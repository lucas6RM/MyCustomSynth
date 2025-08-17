import { Slider } from "./sliders/Slider";

export function SynthControls() {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-center items-end font-mono ">
        <div className=" border-1 bg-fuchsia-300 p-5 rounded-xl mr-20">
          <Slider label={"cutoff: "} value={0} min={0} max={100} />
          <Slider label={"resonance: "} value={0} min={0} max={100} />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Filter
          </h1>
        </div>

        <div className=" border-1 bg-teal-300 p-5 rounded-xl mr-20">
          <Slider label={"attack: "} value={0} min={0} max={100} />
          <Slider label={"release: "} value={0} min={0} max={100} />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Enveloppe
          </h1>
        </div>

        <div className=" border-1 bg-orange-300 p-5 rounded-xl">
          <Slider label={"volume: "} value={0} min={0} max={100} />
          <h1 className="text-2xl text-white font-semibold text-center pt-10">
            Amp
          </h1>
        </div>
      </div>
    </ div>
  );
}
