import { Carousel } from "../../components";

const items = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=3057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Whiskers the Kitty",
    quote: "In a world full of people, be a cat.",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/4549682/4549682-hd_1920_1080_30fps.mp4",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1712311953600-81354526ec28?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Birdy",
    quote: "Let your dreams take flight.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1730365553322-6cd83a29f9fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Somewhere in the nowhere",
    quote: "Not all those who wander are lost.",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/5285043/5285043-uhd_2560_1440_25fps.mp4",
  },
];

function Home() {
  return (
    <Carousel
      items={items}
      initialIndex={0}
      transitionDuration={500}
      autoplay={true}
      autoplayInterval={4000}
      infiniteLoop={true}
    />
  );
}

export default Home;
