

import { useSynth } from '../../../providers/SynthProvider';
import styles from './WhiteKey.module.css'
import { useEffect } from 'react';

import * as Tone from "tone";

interface WhiteKeyProps {
    note?: string,
    bgColor?: string,
    borderColor?: string,
    isActive: boolean,
    onMouseDown: () => void,
    onMouseUp: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

function WhiteKey({
     note ="",
     bgColor = "#ffffff",
     borderColor = "#cccccc",
     isActive,
     onMouseDown: onMouseDown,
     onMouseUp: onMouseUp,
     onMouseEnter: onMouseEnter,
     onMouseLeave: onMouseLeave
    } : WhiteKeyProps) {
    
        const { synth } = useSynth();

        
        useEffect(() => {
        if (!synth) return;

        if (isActive) {
            if(synth.context.state !== 'running'){
                synth.context.resume();
                console.log("context audio was resumed")
            };
            synth.triggerAttack(note, Tone.now());
        } else {
            synth.triggerRelease(Tone.now());
        }
    }, [isActive, note, synth]);


    return(
        <button className={styles.button} style={{
            backgroundColor: isActive ? borderColor : bgColor,
            border: `2px solid ${borderColor}`,}} 
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {note.startsWith('C') ? note : ""}
        </button>
    );

}
export default WhiteKey
