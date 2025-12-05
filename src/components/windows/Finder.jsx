import { useRef } from "react";
import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { withMacOSWindow } from "@hoc";
import { WindowControls, FoldersGroup } from "@components";
import { useLocationStore, useWindowStore } from "@store";
import { LOCATIONS } from "@constants";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = containerRef.current?.querySelectorAll(".finder-item");
    if (!items) return;

    const instances = Draggable.create(items, {
      bounds: containerRef.current,
      onDragStart() {
        this.target.dataset.isDragging = "true";
      },
      onDragEnd() {
        // give click handler a tiny delay to avoid triggering open
        setTimeout(() => {
          this.target.dataset.isDragging = "false";
        }, 50);
      },
    });

    return () => instances.forEach(i => i.kill());
  }, [activeLocation.children]);

  const openItem = (item, e) => {
    // Check if this specific element is being dragged
    if (e.currentTarget.dataset.isDragging === "true") return;

    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <FoldersGroup name="Favorites" list={Object.values(LOCATIONS)} />
          <FoldersGroup name="My Projects" list={LOCATIONS.WORK.children} />
        </div>

        <ul className="content" ref={containerRef}>
          {activeLocation.children.map((item) => (
            <li
              key={item.id}
              draggable={true}
              className={`finder-item ${item.position}`}
              onClick={(e) => openItem(item, e)}
            >
              <img
                src={item.icon}
                draggable={false}
                style={{ WebkitUserDrag: "none" }}
              />
              <p draggable={false} style={{ WebkitUserDrag: "none" }}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const FinderWindow = withMacOSWindow(Finder, "finder");