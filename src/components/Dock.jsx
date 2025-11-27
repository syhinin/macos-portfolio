import { useRef } from "react";
import { Tooltip } from "react-tooltip";

import { DOCK_APPS } from "@constants";

export const Dock = () => {
    const dockRef = useRef(null);
    return (
        <section id="dock">
            <div className="dock-container" ref={dockRef}>
                {DOCK_APPS.map(({ id, name, icon, canOpen }) => (
                    <div className="relative flex justify-center" key={id}>
                        <button
                            type="button"
                            className="dock-icon"
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-name={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img src={`/images/${icon}`} loading="lazy" className={canOpen ? "" : "opacity-60"} alt={name} />
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    )
}