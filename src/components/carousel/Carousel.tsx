import { useCallback, useEffect, useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

type CarouselItemType = {
  type?: string;
  src?: string;
  name?: string;
  quote?: string;
};

interface CarouselProps {
  items: CarouselItemType[];
  initialIndex?: number;
  transitionDuration?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  infiniteLoop?: boolean;
}

const Carousel = ({
  items,
  initialIndex = 0,
  transitionDuration = 400,
  autoplay = true,
  autoplayInterval = 3000,
  infiniteLoop = true,
}: CarouselProps) => {
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
  }, [items.length, infiniteLoop]);

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
        <article
          key={index}
          className="text-center absolute top-0 left-0 w-full h-full transition-transform duration-300"
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
            opacity: index === currentIndex ? 1 : 0,
            visibility: index === currentIndex ? "visible" : "hidden",
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}
        >
          {item?.type === "image" ? (
            <>
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-48 h-48 md:w-[300px] md:h-[300px] rounded-full object-cover mb-4 border-4 border-primary/20 shadow-lg mx-auto"
              />
              <h5 className="text-lg uppercase text-primary mb-3">
                {item.name}
              </h5>
              <p className="max-w-[35em] mx-auto mt-8 text-muted-foreground leading-loose">
                {item.quote}
              </p>
              <Quote className="text-3xl text-primary mt-4 mx-auto" />
            </>
          ) : (
            <>
              <video
                src={item.src}
                controls
                className="w-full h-auto mx-auto"
              />
              <p className="mt-7 text-base font-normal">
                {isAutoplayEnabled &&
                  `CLICK ON "Pause Autoplay" and press the start button to watch the video`}
              </p>
            </>
          )}
        </article>
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
};

export default Carousel;
