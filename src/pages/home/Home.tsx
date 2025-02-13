import { Carousel } from "../../components";

function Home() {
  return (
    <Carousel
      initialIndex={0}
      transitionDuration={500}
      autoplay={true}
      autoplayInterval={4000}
      infiniteLoop={true}
    />
  );
}

export default Home;
