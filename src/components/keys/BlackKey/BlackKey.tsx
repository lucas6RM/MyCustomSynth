import { useEffect } from "react";
import { useSynth } from "../../../providers/SynthProvider";
import styles from "./BlackKey.module.css";

import * as Tone from "tone";

interface BlackKeyProps {
  note?: string;
  bgColor?: string;
  borderColor?: string;
  isActive: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function BlackKey({
  note = "",
  bgColor = "hsl(0, 0%, 0%)",
  borderColor = "hsl(0, 0%, 20%)",
  isActive,
  onMouseDown: handleMouseDown,
  onMouseUp: handleMouseUp,
  onMouseEnter: onMouseEnter,
  onMouseLeave: onMouseLeave,
}: BlackKeyProps) {
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

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: isActive ? borderColor : bgColor,
        border: `2px solid ${borderColor}`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></button>
  );
}
export default BlackKey;
