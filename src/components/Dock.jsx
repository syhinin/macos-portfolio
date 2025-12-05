import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { DOCK_APPS } from "@constants";
import { useWindowStore } from "@store";

export const Dock = () => {
  const dockRef = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dockRef.current?.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const iconCenter = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - iconCenter);

        const intensity = Math.exp(-(distance ** 3) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = ({ id, canOpen }) => {
    if (!canOpen) return;

    const window = windows[id];

    if (!window) return;

    if (window?.isOpen) {
      closeWindow(id);
    } else {
      openWindow(id);
    }
  };

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
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
                alt={name}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};
