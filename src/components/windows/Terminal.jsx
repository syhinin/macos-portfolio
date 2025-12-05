import { Check, Flag } from "lucide-react";

import { TECH_STACK } from "@constants";
import { WindowControls } from "@components";
import { withMacOSWindow } from "@hoc";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@syhinin </span>% show tech stack
        </p>
        <div className="label">
          <p className="w-32"> Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {TECH_STACK.map(({ category, items }) => (
            <li className="flex items-center" key={category}>
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> {TECH_STACK.length} of {TECH_STACK.length}{" "}
            stacks loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render tim: 4ms
          </p>
        </div>
      </div>
    </>
  );
};

export const TerminalWindow = withMacOSWindow(Terminal, "terminal");
