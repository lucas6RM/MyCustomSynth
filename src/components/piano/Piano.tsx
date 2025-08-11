import { useState } from "react"
import PianoOctave from "../piano_octave/PianoOctave"

export default function Piano(){

    
    
      const [bgPrimaryColor, setBgPrimaryColor] = useState("#FFFFFF")
      const [bgSecondaryColor, setBgSecondaryColor] = useState("#000000")
      const [borderColor, setBorderColor] = useState("#00FFFF")
      
      function handlePrimaryColorChange(event : any){
        setBgPrimaryColor(event.target.value)      
      }
    
      function handleSecondaryColorChange(event : any){
        setBgSecondaryColor(event.target.value)      
      }
    
      function handleBorderColorChange(event : any){
        setBorderColor(event.target.value)      
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
            <div className="colorPickers">
              <div>
                <label htmlFor="">Primary color : </label>
                <input type="color" value={bgPrimaryColor} onChange={handlePrimaryColorChange} />
              </div>
              <div>
                <label htmlFor="">Secondary color : </label>
                <input type="color" value={bgSecondaryColor} onChange={handleSecondaryColorChange} />
              </div>
              <div>
                <label htmlFor="">Border color : </label>
                <input type="color" value={borderColor} onChange={handleBorderColorChange} />
              </div>
            </div>
        </div>
        </>
    
      )
}