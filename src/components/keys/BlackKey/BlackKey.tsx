import { useSynth } from '../../../providers/SynthProvider';
import styles from './BlackKey.module.css'

interface BlackKeyProps {
    note?: string,
    bgColor?: string,
    borderColor?: string,
    isActive: boolean,
    handleMouseDown: () => void,
    handleMouseUp: () => void,
}

function BlackKey({
     note ="",
     bgColor = "hsl(0, 0%, 0%)",
     borderColor = "hsl(0, 0%, 20%)",
     isActive,
     handleMouseDown,
     handleMouseUp,
    } : BlackKeyProps){

         const { synth } = useSynth();
        
                if(isActive){
                    synth.triggerAttackRelease(note,'8n')
                }
        


    return(
        <button 
            className={styles.button}
            style={
                {
                backgroundColor: isActive ? borderColor : bgColor,
                border: `2px solid ${borderColor}`
                }
            }
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >

        </button>
    );

}
export default BlackKey