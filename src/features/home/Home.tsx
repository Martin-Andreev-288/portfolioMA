import { Carousel } from "@/features";
import { data as carouselItems } from "@/utils/carouselItems";

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
