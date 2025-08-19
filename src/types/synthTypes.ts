export interface SynthSettings {
  envelope: {
    attack: number;
    decay: number;
    sustain: number;
    release: number;
  };
  filter: {
    type: BiquadFilterType;
    Q: number;
  };
  volume: number;
  filterEnvelope: {
    baseFrequency: number;
    attack: number;
    decay: number;
    release: number;
    sustain: number;
  };
}
