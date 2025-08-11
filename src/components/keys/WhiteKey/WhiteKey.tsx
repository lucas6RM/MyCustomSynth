
import { useSynth } from '../../../providers/SynthProvider';
import styles from './WhiteKey.module.css'

interface WhiteKeyProps {
    note?: string,
    bgColor?: string,
    borderColor?: string,
    isActive: boolean,
    handleMouseDown: () => void,
    handleMouseUp: () => void,
}

function WhiteKey({
     note ="",
     bgColor = "#ffffff",
     borderColor = "#cccccc",
     isActive,
     handleMouseDown,
     handleMouseUp,
    } : WhiteKeyProps){
    
        const { synth } = useSynth();

        if(isActive){
            synth.triggerAttackRelease(note,'8n')
        }


    return(
        <button className={styles.button} style={{
            backgroundColor: isActive ? borderColor : bgColor,
            border: `2px solid ${borderColor}`,}} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {note.startsWith('C') ? note : ""}
        </button>
    );

}
export default WhiteKey
