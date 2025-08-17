
import { useSynth } from '../../../providers/SynthProvider';
import styles from './WhiteKey.module.css'

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

        if(isActive){
            synth.triggerAttack(note)
        }
        else{
            synth.triggerRelease(note)
        }


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
