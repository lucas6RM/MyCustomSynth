import styles from './BlackKey.module.css'

interface BlackKeyProps {
    bgColor?: string,
    borderColor?: string,
    isActive: boolean,
    handleMouseDown: () => void,
    handleMouseUp: () => void,
}

function BlackKey({
     bgColor = "hsl(0, 0%, 0%)",
     borderColor = "hsl(0, 0%, 20%)",
     isActive,
     handleMouseDown,
     handleMouseUp,
    } : BlackKeyProps){


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