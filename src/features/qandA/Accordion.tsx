import { useState } from "react";
import AccordionItem from "./AccordionItem";

type QandA = {
  question: string;
  answer: string;
};

type AccordionProps = {
  data: QandA[];
};

function Accordion({ data }: AccordionProps) {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          question={el.question}
          num={i}
          key={el.question}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
