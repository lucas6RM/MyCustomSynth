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

        
        const [isActive, setIsActive] = useState<Set<number>>(new Set());
        const [isMouseDown, setIsMouseDown] = useState(false)
        
        const onMouseDown = (i: number) => {
            setIsMouseDown(true);
            setIsActive(prev => new Set([...prev, i]));
            
        };

        const onMouseUp = () => {
            setIsMouseDown(false);
            setIsActive(new Set());
        };

        const onMouseEnter = (i:number) => {
            if(!isMouseDown) return;
            setIsActive(prev => new Set([...prev, i]));
        };

        const onMouseLeave = (i:number) => {
            setIsActive(prev => {
                const newSet = prev;
                newSet.delete(i) 
                return newSet;
            }
            );

        };


    return(
        <div className={styles.layout}>
            <div >
                <WhiteKey 
                    note={`C${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor} 
                    isActive={ isActive.has(0) } 
                    onMouseDown={ () => onMouseDown(0) } 
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(0) }
                    onMouseLeave={ () => onMouseLeave(0) }

                    />
                <BlackKey 
                    note={`C#${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(1)} 
                    onMouseDown={ () => onMouseDown(1) } 
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(1) }
                    onMouseLeave={ () => onMouseLeave(1) }
                    />
            </div>
            <div >
                <WhiteKey 
                    note={`D${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(2)} 
                    onMouseDown={ () => onMouseDown(2) }
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(2) }
                    onMouseLeave={ () => onMouseLeave(2) } 
                    />
                <BlackKey 
                    note={`D#${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(3)} 
                    onMouseDown={ () => onMouseDown(3) }
                    onMouseUp={ () => onMouseUp() }
                    onMouseEnter={ () => onMouseEnter(3) }
                    onMouseLeave={ () => onMouseLeave(3) }
                    />
            </div>
            <WhiteKey 
                    note={`E${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(4)} 
                    onMouseDown={ () => onMouseDown(4) } 
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(4) }
                    onMouseLeave={ () => onMouseLeave(4) }
                    />
            <div >
                <WhiteKey 
                    note={`F${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(5)} 
                    onMouseDown={ () => onMouseDown(5) } 
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(5) }
                    onMouseLeave={ () => onMouseLeave(5) }
                    />
                <BlackKey 
                    note={`F#${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(6)} 
                    onMouseDown={ () => onMouseDown(6) } 
                    onMouseUp={ () => onMouseUp() }
                    onMouseEnter={ () => onMouseEnter(6) }
                    onMouseLeave={ () => onMouseLeave(6) }
                    />
            </div>
            <div >
                <WhiteKey 
                    note={`G${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(7) } 
                    onMouseDown={ () => onMouseDown(7) } 
                    onMouseUp={ () => onMouseUp() }  
                    onMouseEnter={ () => onMouseEnter(7) }
                    onMouseLeave={ () => onMouseLeave(7) }
                    />
                <BlackKey 
                    note={`G#${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(8)} 
                    onMouseDown={ () => onMouseDown(8) } 
                    onMouseUp={ () => onMouseUp() }
                    onMouseEnter={ () => onMouseEnter(8) }
                    onMouseLeave={ () => onMouseLeave(8) }
                    />
            </div>
            <div >
                <WhiteKey 
                    note={`A${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(9)} 
                    onMouseDown={ () => onMouseDown(9) } 
                    onMouseUp={ () => onMouseUp() }
                    onMouseEnter={ () => onMouseEnter(9) }
                    onMouseLeave={ () => onMouseLeave(9) }
                    />
                <BlackKey 
                    note={`A#${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorBlackKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(10) } 
                    onMouseDown={ () => onMouseDown(10) } 
                    onMouseUp={ () => onMouseUp() }
                    onMouseEnter={ () => onMouseEnter(10) }
                    onMouseLeave={ () => onMouseLeave(10) }
                    />
            </div>
            <WhiteKey 
                    note={`B${octaveIndex == null ? "" : octaveIndex}`}
                    bgColor={backgroundColorWhiteKeys}
                    borderColor={borderColor}
                    isActive={ isActive.has(11) } 
                    onMouseDown={ () => onMouseDown(11) } 
                    onMouseUp={ () => onMouseUp() } 
                    onMouseEnter={ () => onMouseEnter(11) }
                    onMouseLeave={ () => onMouseLeave(11) }
                    />
        </div>
    );
}
