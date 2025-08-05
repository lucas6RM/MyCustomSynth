import { useState } from "react";
import BlackKey from "../keys/BlackKey/BlackKey";
import WhiteKey from "../keys/WhiteKey/WhiteKey";
import styles from "./PianoOctave.module.css";

interface PianoOctaveProps{
    octaveIndex?: number,
    backgroundColorWhiteKeys?: string,
    backgroundColorBlackKeys?: string,
    borderColor?: string
}

export default function PianoOctave({
    octaveIndex,
    backgroundColorWhiteKeys = "#ffffff",
    backgroundColorBlackKeys = "#000000",
    borderColor = "#00eaffff"
    }: PianoOctaveProps){

        
        const [isActiveArray, setIsActive] = useState(Array(12).fill(false));
        
        const handleMouseDown = (i: number) => {
            const copyIsActiveArray = isActiveArray.slice();
            copyIsActiveArray[i] = true;
            setIsActive(copyIsActiveArray);
        };

        const handleMouseUp = (i: number) => {
            const copyIsActiveArray = isActiveArray.slice();
            copyIsActiveArray[i] = false;
            setIsActive(copyIsActiveArray);
        };

    return(
        <div className={styles.layout}>
            <div >
                <WhiteKey 
                    note={`C${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor} 
                    isActive={ isActiveArray[0] } 
                    handleMouseDown={ () => handleMouseDown(0) } 
                    handleMouseUp={ () => handleMouseUp(0) } 
                    />
                <BlackKey 
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[1] } 
                    handleMouseDown={ () => handleMouseDown(1) } 
                    handleMouseUp={ () => handleMouseUp(1) } 
                    />
            </div>
            <div >
                <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[2] } 
                    handleMouseDown={ () => handleMouseDown(2) }
                    handleMouseUp={ () => handleMouseUp(2) }  
                    />
                <BlackKey 
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[3] } 
                    handleMouseDown={ () => handleMouseDown(3) }
                    handleMouseUp={ () => handleMouseUp(3) }
                    />
            </div>
            <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[4] } 
                    handleMouseDown={ () => handleMouseDown(4) } 
                    handleMouseUp={ () => handleMouseUp(4) } 
                    />
            <div >
                <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[5] } 
                    handleMouseDown={ () => handleMouseDown(5) } 
                    handleMouseUp={ () => handleMouseUp(5) } 
                    />
                <BlackKey 
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[6] } 
                    handleMouseDown={ () => handleMouseDown(6) } 
                    handleMouseUp={ () => handleMouseUp(6) }
                    />
            </div>
            <div >
                <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[7] } 
                    handleMouseDown={ () => handleMouseDown(7) } 
                    handleMouseUp={ () => handleMouseUp(7) }  
                    />
                <BlackKey 
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[8] } 
                    handleMouseDown={ () => handleMouseDown(8) } 
                    handleMouseUp={ () => handleMouseUp(8) }
                    />
            </div>
            <div >
                <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[9] } 
                    handleMouseDown={ () => handleMouseDown(9) } 
                    handleMouseUp={ () => handleMouseUp(9) }
                    />
                <BlackKey 
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[10] } 
                    handleMouseDown={ () => handleMouseDown(10) } 
                    handleMouseUp={ () => handleMouseUp(10) }
                    />
            </div>
            <WhiteKey 
                    note=""
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActiveArray[11] } 
                    handleMouseDown={ () => handleMouseDown(11) } 
                    handleMouseUp={ () => handleMouseUp(11) } 
                    />
        </div>
    );
}
