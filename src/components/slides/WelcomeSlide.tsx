import { Item } from "@/utils/types";
import { NavLink } from "react-router";

type WelcomeSlideProps = {
  item: Item;
  index: number;
};

function WelcomeSlide({ item, index }: WelcomeSlideProps) {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-primary mb-8 text-white bg-[#e41c6f] tracking-[1rem] border-b-4 border-white drop-shadow-[0.2rem_0.2rem_1rem_#555]">
        {item.position}
      </h1>
      <img
        src="src/assets/m-a.jpg"
        alt={`Slide ${index}`}
        className="w-48 h-48 md:w-[200px] md:h-[200px] rounded-full object-cover mb-4 border-4 border-primary/20 shadow-lg mx-auto"
      />
      <h3
        className="inline-block text-2xl text-white bg-[#e41c6f] py-2 px-1 mt-8
        tracking-[0.3rem] uppercase -skew-x-12"
      >
        {item.name}
      </h3>
      <div className="flex justify-center gap-8 mt-12">
        <NavLink
          to="/portfolio"
          className="text-[0.8rem] font-bold text-gray-800 bg-white border-4 border-gray-800
          py-2 px-4 uppercase tracking-[0.3rem] transition-all hover:bg-gray-100
          focus:outline-none focus:shadow-[0_0_0_3px_#e41c6f]"
        >
          See my Work
        </NavLink>
        <NavLink
          to="/contact"
          className="text-[0.8rem] font-bold text-gray-800 bg-white border-4 border-gray-800
          py-2 px-4 uppercase tracking-[0.3rem] transition-all hover:bg-gray-100
          focus:outline-none focus:shadow-[0_0_0_3px_#e41c6f]"
        >
          Get in Touch
        </NavLink>
      </div>
    </>
  );
}

export default WelcomeSlide;
