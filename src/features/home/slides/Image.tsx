import { type Item } from "@/utils/types";
import { Quote } from "lucide-react";

type ImageProps = {
  item: Item;
  index: number;
};

function Image({ item, index }: ImageProps) {
  return (
    <>
      <img
        src={item.src}
        alt={`Slide ${index}`}
        className="mt-8 w-48 h-48 md:w-[300px] md:h-[300px] rounded-full object-cover mb-4 border-4 border-primary/20 shadow-lg mx-auto"
      />
      <p className="max-w-[35em] mx-auto mb-3 text-muted-foreground leading-loose">
        {item.quote}
      </p>
      <h5 className="text-lg uppercase text-primary mt-8">{item.name}</h5>
      <Quote className="text-3xl text-primary mt-4 mx-auto" />
    </>
  );
}

export default Image;
