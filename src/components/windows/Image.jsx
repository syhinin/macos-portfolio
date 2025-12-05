import { withMacOSWindow } from "@hoc";
import { useWindowStore } from "@store";
import { WindowControls } from "@components";

const Image = () => {
  const { windows } = useWindowStore();
  const { data } = windows.imgfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="bg-white h-full w-full flex items-center justify-center p-4 bg-gray-100">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-full object-contain shadow-lg rounded-md"
        />
      </div>
    </>
  );
};

export const ImageWindow = withMacOSWindow(Image, "imgfile");
