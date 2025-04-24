import { type Item } from "@/utils/types";

type VideoProps = {
  item: Item;
  isEnabled: boolean;
};

function Video({ item, isEnabled }: VideoProps) {
  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex-1 flex items-center">
        <video
          src={item.src}
          controls
          className="w-fit h-auto max-h-[500px] mx-auto rounded-lg shadow-xl"
        />
      </div>
      <div className="mt-14 text-base font-normal text-center text-muted-foreground pb-4">
        {isEnabled && (
          <p className="inline-block text-primary-foreground bg-black/80 text-white px-2 rounded-md shadow-md font-normal border-primary/30 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
            CLICK ON "Pause Slideshow" and press the start button to watch the
            video
          </p>
        )}
      </div>
    </div>
  );
}

export default Video;
