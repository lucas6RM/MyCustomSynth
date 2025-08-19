import { useState } from "react";
import PianoOctave from "../piano_octave/PianoOctave";

export default function Piano() {
  const [bgPrimaryColor, setBgPrimaryColor] = useState("#FFFFFF");
  const [bgSecondaryColor, setBgSecondaryColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#808080");

  function handlePrimaryColorChange(event: any) {
    setBgPrimaryColor(event.target.value);
  }

  function handleSecondaryColorChange(event: any) {
    setBgSecondaryColor(event.target.value);
  }

  function handleBorderColorChange(event: any) {
    setBorderColor(event.target.value);
  }
  return (
    <>
      <div className="mainContainer">
        <div className="pianoLayout">
          <PianoOctave
            octaveIndex={3}
            backgroundColorWhiteKeys={bgPrimaryColor}
            backgroundColorBlackKeys={bgSecondaryColor}
            borderColor={borderColor}
          />
          <PianoOctave
            octaveIndex={4}
            backgroundColorWhiteKeys={bgPrimaryColor}
            backgroundColorBlackKeys={bgSecondaryColor}
            borderColor={borderColor}
          />
        </div>
        <div className="colorPickers flex flex-row justify-center items-center m-10">
          <div >
            <label className="flex flex-row items-center gap-5">
              Primary color :
              <input
                className="border-1 border-solid rounded-sm"
                type="color"
                value={bgPrimaryColor}
                onChange={handlePrimaryColorChange}
              />
            </label>
          </div>
          <div >
            <label className="flex flex-row items-center gap-5">
              Secondary color :
              <input
                className="border-1 border-solid rounded-sm"
                type="color"
                value={bgSecondaryColor}
                onChange={handleSecondaryColorChange}
              />
            </label>
          </div>
          <div>
            <label className="flex flex-row items-center gap-5">
              Border color :
              <input
                className="border-1 border-solid rounded-sm"
                type="color"
                value={borderColor}
                onChange={handleBorderColorChange}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
