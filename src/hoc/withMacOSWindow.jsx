import { useRef } from "react";

import { useWindowStore } from "@store";


export const withMacOSWindow = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex } = windows[windowKey]

        const ref = useRef(null);

        return (
            <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
                <Component {...props} />
            </section>
        )
    }

    Wrapped.displayName = `withMacOSWindow(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}

