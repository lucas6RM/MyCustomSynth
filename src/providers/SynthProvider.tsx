
import { createContext, useContext, type ReactNode } from 'react';
import * as Tone from 'tone';


interface SynthContextProps {
    synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>
}


const SynthContext = createContext<SynthContextProps | undefined>(undefined);

export function SynthProvider({ children }: { children: ReactNode }){
    
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const value: SynthContextProps = {
    synth
  };


  return (
    <SynthContext.Provider value={value}>
        {children}
    </SynthContext.Provider>
) ;
}

export function useSynth() {
  const context = useContext(SynthContext);
  if (!context) {
    throw new Error('useSynth must be used within a SynthProvider');
  }
  return context;
}