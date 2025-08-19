import { useSynth } from "../../providers/SynthProvider";
import { Slider } from "./sliders/Slider";

import * as Tone from "tone";

export function SynthControls() {
  const {
    currentSettings,
    setAttack,
    setDecay,
    setSustain,
    setRelease,
    setCutoff,
    setResonance,
    setVolume
  } = useSynth();

  return (
    <div className="mt-10">
      <div className="flex flex-row justify-center items-end font-mono ">
        <div className=" border-1 bg-fuchsia-300 p-5 rounded-xl mr-20">
          <Slider
            label={`cutoff: ${currentSettings.filterEnvelope.baseFrequency}`}
            value={currentSettings.filterEnvelope.baseFrequency}
            min={10}
            max={2000}
            onValueChange={(value: number) => {
              setCutoff(value);
            }}
          />
          <Slider
            label={`resonance: ${currentSettings.filter.Q}`}
            value={currentSettings.filter.Q}
            min={0}
            max={100}
            step={0.1}
            onValueChange={function (value: number): void {
              setResonance(value);
            }}
          />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Filter
          </h1>
        </div>

        <div className=" border-1 bg-teal-300 p-5 rounded-xl mr-20">
          <Slider
            label={`attack: ${currentSettings.envelope.attack}`}
            value={currentSettings.envelope.attack}
            min={0}
            max={2}
            step={0.05}
            onValueChange={function (value: number): void {
              setAttack(value);
            }}
          />
          <Slider
            label={`decay: ${currentSettings.envelope.decay}`}
            value={currentSettings.envelope.decay}
            min={0}
            max={2}
            step={0.05}
            onValueChange={function (value: number): void {
              setDecay(value);
            }}
          />
          <Slider
            label={`sustain: ${currentSettings.envelope.sustain}`}
            value={currentSettings.envelope.sustain}
            min={0}
            max={1}
            step={0.05}
            onValueChange={function (value: number): void {
              setSustain(value);
              console.log(`sustain: ${value}`);
            }}
          />
          <Slider
            label={`release: ${currentSettings.envelope.release}`}
            value={currentSettings.envelope.release}
            min={0}
            max={5}
            step={0.05}
            onValueChange={function (value: number): void {
              setRelease(value);
            }}
          />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Enveloppe
          </h1>
        </div>

        <div className=" border-1 bg-orange-300 p-5 rounded-xl mr-20">
          <Slider
            label={`volume: ${currentSettings.volume}`}
            value={currentSettings.volume}
            min={-30}
            max={5}
            step={0.1}
            onValueChange={function (value: number): void {
              setVolume(value);
            }}
          />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Amp
          </h1>
        </div>
        <div className=" border-1 bg-red-300 p-5 rounded-xl">
          <button
            className="text-2xl text-white font-semibold text-center"
            onClick={() => {
              Tone.start();
            }}>
                panic
          </button>
        </div>
      </div>
    </div>
  );
}
