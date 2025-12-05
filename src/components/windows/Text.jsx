import { withMacOSWindow } from "@hoc";
import { useWindowStore } from "@store";
import { WindowControls } from "@components";

const Text = () => {
  const { windows } = useWindowStore();
  const { data } = windows.txtfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="bg-white h-full overflow-y-auto p-8 pb-20 text-gray-800">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        {data.subtitle && (
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {data.subtitle}
          </h1>
        )}

        <div className="space-y-4">
          {data.description &&
            data.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export const TextWindow = withMacOSWindow(Text, "txtfile");
