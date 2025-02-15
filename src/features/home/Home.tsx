import { Carousel } from "@/features";
import { carouselItems } from "@/utils";

function Home() {
  return (
    <Carousel
      items={carouselItems}
      initialIndex={0}
      transitionDuration={500}
      autoplay={true}
      autoplayInterval={4000}
      infiniteLoop={true}
    />
  );
}

export default Home;
