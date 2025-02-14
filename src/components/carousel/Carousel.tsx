import { useCallback, useEffect, useState } from "react";
import { data as items } from "@/utils/carouselItems";
import { Slide, NavButton, AutoplayControl } from "..";

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
    <section className="mx-auto w-[90vw] max-w-[1200px] relative min-h-[620px] overflow-hidden border border-border rounded-xl shadow-lg backdrop-blur-sm bg-background/50">
      {items.map((item, index) => (
        <Slide
          key={index}
          item={item}
          index={index}
          currentIndex={currentIndex}
          transitionDuration={transitionDuration}
        />
      ))}

      <NavButton direction={"prev"} onClick={prevSlide} />
      <NavButton direction={"next"} onClick={nextSlide} />

      <AutoplayControl
        isEnabled={isAutoplayEnabled}
        onToggle={toggleAutoplay}
      />
    </section>
  );
}

export default Carousel;
