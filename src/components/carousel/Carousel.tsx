import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { data as items } from "@/utils/carouselItems";
import Slide from "../slides/Slide";

type CarouselProps = {
  initialIndex: number;
  transitionDuration: number;
  autoplay: boolean;
  autoplayInterval: number;
  infiniteLoop: boolean;
};

function Carousel({
  initialIndex = 0,
  transitionDuration = 400,
  autoplay = true,
  autoplayInterval = 3000,
  infiniteLoop = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(autoplay);

  const prevSlide = () => {
    setCurrentIndex((oldIndex) => {
      const newIndex =
        oldIndex === 0 ? (infiniteLoop ? items.length - 1 : 0) : oldIndex - 1;
      return newIndex;
    });
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((oldIndex) => {
      const newIndex = (oldIndex + 1) % items.length;
      if (newIndex === 0 && !infiniteLoop) return oldIndex;
      return newIndex;
    });
  }, [infiniteLoop]);

  useEffect(() => {
    if (isAutoplayEnabled) {
      const intervalId = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(intervalId);
    }
  }, [isAutoplayEnabled, currentIndex, nextSlide, autoplayInterval]);

  const toggleAutoplay = () => setIsAutoplayEnabled((prev) => !prev);

  return (
    <section className="mx-auto w-[80vw] max-w-[800px] relative h-[580px] overflow-hidden border border-border rounded-xl shadow-lg backdrop-blur-sm bg-background/50">
      {items.map((item, index) => (
        <Slide
          key={index}
          item={item}
          index={index}
          currentIndex={currentIndex}
          transitionDuration={transitionDuration}
        />
      ))}

      <button
        type="button"
        className="absolute top-[200px] bg-secondary text-secondary-foreground w-8 h-8 grid place-items-center border border-border rounded-md cursor-pointer transition-colors hover:bg-secondary/80 md:w-10 md:h-10 md:text-xl left-0"
        onClick={prevSlide}
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <button
        type="button"
        className="absolute top-[200px] bg-secondary text-secondary-foreground w-8 h-8 grid place-items-center border border-border rounded-md cursor-pointer transition-colors hover:bg-secondary/80 md:w-10 md:h-10 md:text-xl right-0"
        onClick={nextSlide}
      >
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <button
        type="button"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-primary/90"
        onClick={toggleAutoplay}
      >
        {isAutoplayEnabled ? "Pause Autoplay" : "Enable Autoplay"}
      </button>
    </section>
  );
}

export default Carousel;
