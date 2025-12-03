import { Search } from "lucide-react";
// import clsx from "clsx";

import { withMacOSWindow } from "@hoc";
import { WindowControls, FoldersGroup } from "@components";
import { useLocationStore, useWindowStore } from "@store";
import { LOCATIONS } from "@constants";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
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

        <ul className="content">
          {activeLocation.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const FinderWindow = withMacOSWindow(Finder, "finder");
