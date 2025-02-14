import { Item } from "@/utils/types";

type VideoProps = {
  item: Item;
};

function Video({ item }: VideoProps) {
  return (
    <>
      <video src={item.src} controls className="w-full h-auto mx-auto" />
      <p className="mt-7 text-base font-normal">
        {`CLICK ON "Pause Autoplay" and press the start button to watch the video`}
      </p>
    </>
  );
}

export default Video;
