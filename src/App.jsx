import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

import {
  Navbar,
  Welcome,
  Dock,
  TerminalWindow, SafariWindow, ResumeWindow, FinderWindow, TextWindow
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
      <FinderWindow />
      <TextWindow />
    </>
  );
}

export default App;
