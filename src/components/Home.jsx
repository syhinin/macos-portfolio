import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";

import { useWindowStore, useLocationStore } from "@store";
import { LOCATIONS } from "@constants";

const PROJECTS = LOCATIONS.WORK.children ?? [];
export const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const containerRef = useRef(null);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    const [instance] = Draggable.create(".folder", {
      bounds: containerRef.current,
    });



    return () => instance.kill();
  }, []);
  return (
    <section id="home">
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          minHeight: "calc(100vh - 160px)",
          pointerEvents: "none",
        }}
      />
      <ul>
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
