import dayjs from "dayjs";

import { NAV_LINKS, NAV_ICONS } from "@constants";
import { useWindowStore } from "@store";

export const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav className="">
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">My Portfolio</p>
        <ul>
          {NAV_LINKS.map(({ name, id, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {NAV_ICONS.map(({ img, id }) => (
            <li key={id}>
              <img className="icon-hover" src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D hh:mm")}</time>
      </div>
    </nav>
  );
};
