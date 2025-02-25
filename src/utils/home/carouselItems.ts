import { type Item } from '../types';
import passportImg from '@/assets/m-a.jpg';
import intrVideo from '@/assets/intrVideo.mp4';

export const carouselItems: Item[] = [
    {
        type: "welcomeSlide",
        src: passportImg,
        position: "Web Developer",
        name: "Martin Andreev",
    },
    {
        type: "video",
        src: intrVideo,
    },
    {
        type: "image",
        src: "https://cacm.acm.org/wp-content/uploads/2010/08/072010_CACMpg41_An-Interview.jpg",
        name: "Edsger W. Dijkstra",
        quote: "Much of the excitement we get out of our work is that we don't really know what we are doing.",
    },
];
