import { Carousel } from "@/features";
import { carouselItems } from "@/utils";

function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="h-full">
        <Carousel
          items={carouselItems}
          initialIndex={0}
          transitionDuration={500}
          autoplay={true}
          autoplayInterval={4000}
          infiniteLoop={true}
        />
      </div>
    </section>
  );
}

export default Home;
