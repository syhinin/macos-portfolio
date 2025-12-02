import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

import {
  Navbar,
  Welcome,
  Dock,
  TerminalWindow, SafariWindow
} from "@components";

gsap.registerPlugin(Draggable);

function App() {


  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
    </>
  );
}

export default App;
