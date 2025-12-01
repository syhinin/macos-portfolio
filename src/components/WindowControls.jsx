import { useWindowStore } from "@store";

export const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore()
    return (
        <div id="window-controls">
            <button type="button" className="close" onClick={() => closeWindow(target)}></button>
            <button type="button" className="minimize"></button>
            <button type="button" className="maximize"></button>
        </div>
    )
}