import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

import {
  Navbar,
  Welcome,
  Dock,
  TerminalWindow, SafariWindow, ResumeWindow
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
      <ResumeWindow />
    </>
  );
}

export default App;
