import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

import { Navbar, Welcome, Dock, TerminalWindow } from "@components";

gsap.registerPlugin(Draggable);

/**
 * Root application component that composes the main UI.
 *
 * Renders the top-level layout including the Navbar, Welcome, Dock, and TerminalWindow components.
 * @returns {JSX.Element} The application's root React element tree.
 */
function App() {


  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
    </>
  );
}

export default App;