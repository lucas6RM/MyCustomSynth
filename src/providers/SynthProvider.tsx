import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

import * as Tone from "tone";
import type { SynthSettings } from "../types/synthTypes";

interface SynthContextProps {
  synth: Tone.MonoSynth | null;
  currentSettings: SynthSettings;
  ready: boolean;
  starting: boolean;
  error: string | null;
  initializeAudio: () => Promise<void>;
  setAttack: (value: number) => void;
  setDecay: (value: number) => void;
  setSustain: (value: number) => void;
  setRelease: (value: number) => void;
  setCutoff: (value: number) => void;
  setResonance: (value: number) => void;
  setVolume: (value: number) => void;
}

const initialSettings: SynthSettings = {
  filter: {
    type: "lowpass",
    Q: 0,
  },
  envelope: {
    attack: 0,
    decay: 0.5,
    sustain: 1,
    release: 0,
  },

  volume: 0,
  filterEnvelope: {
    baseFrequency: 2000,
    attack: 0,
    decay: 2,
    release: 2,
    sustain: 1,
  },
};

const SynthContext = createContext<SynthContextProps | undefined>(undefined);

export default function SynthProvider({ children }: { children: ReactNode }) {
  const [audioState, setAudioState] = useState<{
    initialized: boolean;
    starting: boolean;
    error: string | null;
  }>({ initialized: false, starting: false, error: null });
  const [settings, setSettings] = useState<SynthSettings>(initialSettings);

  const synthRef = useRef<Tone.MonoSynth | null>(null);

  const initializeAudio = useCallback(async () => {
    if (synthRef.current || audioState.initialized || audioState.starting)
      return;

    try {
      setAudioState((prev) => ({ ...prev, starting: true, error: null }));
      console.log("initialising")
      await Tone.start();
      if (Tone.getContext().state !== "running") {
        throw new Error("Failed to start audio context");
      }

      synthRef.current = new Tone.MonoSynth(settings).toDestination();

      setAudioState({ initialized: true, starting: false, error: null });
    } catch (error) {
      if (synthRef.current) {
        synthRef.current.dispose();
        synthRef.current = null;
      }

      setAudioState({
        initialized: false,
        starting: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
      throw error;

    }
  }, [audioState.initialized, audioState.starting, settings]);

  const setAttack = useCallback((value: number) => {
    if (!synthRef.current) return;

    let newEnv = settings.envelope;
    newEnv = { ...newEnv, attack: value };
    setSettings((prev) => ({ ...prev, envelope: newEnv }));
    synthRef.current.set({ envelope: { attack: value } });
  }, [audioState.initialized]);

  const setDecay = useCallback((value: number) => {
    if (!synthRef.current) return;

    let newEnv = settings.envelope;
    newEnv = { ...newEnv, decay: value };
    setSettings((prev) => ({ ...prev, envelope: newEnv }));
    synthRef.current.set({ envelope: { decay: value } });
  }, [audioState.initialized]);

  const setSustain = useCallback(function (value: number): void {
    if (!synthRef.current) return;

    let newEnv = settings.envelope;
    newEnv = { ...newEnv, sustain: value };
    setSettings((prev) => ({ ...prev, envelope: newEnv }));
    synthRef.current.set({ envelope: { sustain: value } });
  }, [audioState.initialized]);

  const setRelease = useCallback(function (value: number): void {
    if (!synthRef.current) return;

    let newEnv = settings.envelope;
    newEnv = { ...newEnv, release: value };
    setSettings((prev) => ({ ...prev, envelope: newEnv }));
    synthRef.current.set({ envelope: { release: value } });
  }, [audioState.initialized]);

  const setCutoff = useCallback(function (value: number): void {
    if (!synthRef.current) return;

    let newFiltEnv = settings.filterEnvelope;
    newFiltEnv = { ...newFiltEnv, baseFrequency: value };
    setSettings((prev) => ({ ...prev, filterEnvelope: newFiltEnv }));
    synthRef.current.set({
      filterEnvelope: {
        baseFrequency: value,
      },
    });
  }, [audioState.initialized]);

  const setResonance = useCallback(function (value: number): void {
    if (!synthRef.current) return;

    let newFilter = settings.filter;
    newFilter = { ...newFilter, Q: value };
    setSettings((prev) => ({ ...prev, filter: newFilter }));
    synthRef.current.set({
      filter: {
        Q: value,
      },
    });
  }, [audioState.initialized]);

  const setVolume = useCallback(function (value: number): void {
    if (!synthRef.current) return;

    setSettings((prev) => ({ ...prev, volume: value }));
    synthRef.current.set({
      volume: value,
    });
  }, [audioState.initialized]);

  const value: SynthContextProps = {
    synth: synthRef.current,
    currentSettings: settings,
    ready: audioState.initialized,
    starting: audioState.starting,
    error: audioState.error,
    initializeAudio: initializeAudio,
    setAttack: setAttack,
    setDecay: setDecay,
    setSustain: setSustain,
    setRelease: setRelease,
    setCutoff: setCutoff,
    setResonance: setResonance,
    setVolume: setVolume,
  };

  return (
    <SynthContext.Provider value={value}>{children}</SynthContext.Provider>
  );
}

export function useSynth() {
  const context = useContext(SynthContext);
  if (!context) {
    throw new Error("useSynth must be used within a SynthProvider");
  }
  return context;
}
