import "./index.css";
import Piano from "./components/piano/Piano.tsx";

import { SynthProvider } from "./providers/SynthProvider.tsx";
import { SynthControls } from "./components/synth_controls/SynthControls.tsx";

function App() {
  return (
    <SynthProvider>
      <SynthControls />
      <Piano />
    </SynthProvider>
  );
}

export default App;
