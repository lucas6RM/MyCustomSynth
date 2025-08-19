import "./index.css";
import Piano from "./components/piano/Piano.tsx";

import { SynthControls } from "./components/synth_controls/SynthControls.tsx";
import SynthProvider from "./providers/SynthProvider.tsx";

function App() {
  return (
    <SynthProvider>
      <SynthControls />
      <Piano />
    </SynthProvider>
  );
}

export default App;
