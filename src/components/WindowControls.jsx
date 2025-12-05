import { useWindowStore } from "@store";

export const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <button
        type="button"
        className="close"
        aria-label="Close window"
        onClick={() => closeWindow(target)}
      ></button>
      <button
        type="button"
        className="minimize"
        aria-label="Minimize window"
      ></button>
      <button
        type="button"
        className="maximize"
        aria-label="Maximize window"
      ></button>
    </div>
  );
};
