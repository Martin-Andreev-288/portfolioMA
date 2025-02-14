import { type Item } from "@/utils/types";
import Video from "./Video";
import Image from "./Image";
import WelcomeSlide from "./WelcomeSlide";

type SlideProps = {
  item: Item;
  index: number;
  currentIndex: number;
  transitionDuration: number;
};

function Slide({ item, index, currentIndex, transitionDuration }: SlideProps) {
  return (
    <article
      className="text-center absolute top-0 left-0 w-full h-full transition-transform duration-300"
      style={{
        transform: `translateX(${100 * (index - currentIndex)}%)`,
        opacity: index === currentIndex ? 1 : 0,
        visibility: index === currentIndex ? "visible" : "hidden",
        transition: `transform ${transitionDuration}ms ease-in-out`,
      }}
    >
      {item?.type === "image" ? (
        <Image item={item} index={index} />
      ) : item?.type === "video" ? (
        <Video item={item} />
      ) : (
        <WelcomeSlide item={item} index={index} />
      )}
    </article>
  );
}

export default Slide;
