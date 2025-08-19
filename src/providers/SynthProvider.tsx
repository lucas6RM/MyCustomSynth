import {
  createContext,
  useContext,
  
  useRef,
  useState,
  type ReactNode,
} from "react";

import * as Tone from "tone";
import type { SynthSettings } from "../types/synthTypes";

interface SynthContextProps {
  synth: Tone.MonoSynth;
  currentSettings: SynthSettings;
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
    sustain: 1
  }
}

const SynthContext = createContext<SynthContextProps | undefined>(undefined);

export default function SynthProvider({ children }: { children: ReactNode }) {


  const [audioState, setAudioState] = useState<{
    initialized: boolean;
    starting: boolean;
    error: string | null;
  }>({ initialized: false, starting: false, error: null });

  const synthRef = useRef<Tone.MonoSynth>(
    new Tone.MonoSynth(initialSettings).toDestination()
  );

  const [settings, setSettings] = useState<SynthSettings>(initialSettings);


  const value: SynthContextProps = {
    synth: synthRef.current,
    currentSettings: settings,
    setAttack: function (value: number): void {
      let newEnv = settings.envelope;
      newEnv = { ...newEnv, attack: value };
      setSettings((prev) => ({ ...prev, envelope: newEnv }));
      setSettings((prev) => ({ ...prev, attack: value }));
      synthRef.current.set({ envelope: {attack: value} });
    },
    setDecay: function (value: number): void {
      let newEnv = settings.envelope;
      newEnv = { ...newEnv, decay: value };
      setSettings((prev) => ({ ...prev, envelope: newEnv }));
      synthRef.current.set({ envelope: {decay: value} });
    },
    setSustain: function (value: number): void {
      let newEnv = settings.envelope;
      newEnv = { ...newEnv, sustain: value };
      setSettings((prev) => ({ ...prev, envelope: newEnv }));
      synthRef.current.set({ envelope: {sustain: value} });
    },

    setRelease: function (value: number): void {
      let newEnv = settings.envelope;
      newEnv = { ...newEnv, release: value };
      setSettings((prev) => ({ ...prev, envelope: newEnv}));
      synthRef.current.set({ envelope: {release: value} });
    },
    setCutoff: function (value: number): void {
      let newFiltEnv = settings.filterEnvelope;
      newFiltEnv = {...newFiltEnv, baseFrequency: value};
      setSettings((prev) => ({ ...prev, filterEnvelope : newFiltEnv }));
      synthRef.current.set({
        filterEnvelope: {
          baseFrequency: value
        }
      });
    },
    setResonance: function (value: number): void {
      let newFilter = settings.filter;
      newFilter = {...newFilter, Q: value}
      setSettings((prev) => ({ ...prev, filter: newFilter }));
      synthRef.current.set({
        filter: {
          Q: value
        }
      });
    },
    setVolume: function (value: number): void {
      setSettings((prev) => ({ ...prev, volume: value }));
      synthRef.current.set({
        volume: value
      });
    },
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
