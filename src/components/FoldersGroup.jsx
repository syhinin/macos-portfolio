import clsx from "clsx";

import { useLocationStore } from "@store";
import { LOCATIONS } from "@constants";

export const FoldersGroup = ({ name, list }) => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {list.map((item) => (
          <li
            className={clsx(
              item.id === activeLocation.id ? "active" : "non-active"
            )}
            key={item.id}
            onClick={() => setActiveLocation(item)}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
