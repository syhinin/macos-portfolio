import { withMacOSWindow } from "@hoc";
import { WindowControls } from "@components";
import { SOCIALS } from "@constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>
      <div className="p-4 space-y-5">
        <img
          src="files/contact-me.png"
          alt="Contact Me"
          className="w-20 rounded-full"
        />
        <h3 className="text-xl font-semibold">Let's Connect</h3>

        <p>
          You can contact me directly via email:{" "}
          <a
            href="mailto:syhinin@gmail.com"
            className="text-blue-600 font-medium underline hover:text-blue-800"
          >
            syhinin@gmail.com
          </a>
          <span className="block mt-2">
            Or reach me on any of the platforms below
          </span>
        </p>

        <ul>
          {SOCIALS.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5 " />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ContactWindow = withMacOSWindow(Contact, "contact");
