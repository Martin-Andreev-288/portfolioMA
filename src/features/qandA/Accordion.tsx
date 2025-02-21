import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { ContactPrompt } from "../";

type QandA = {
  question: string;
  answer: React.ReactNode;
};

type Category = {
  name: string;
  questions: QandA[];
};

type AccordionProps = {
  data: Category[];
};

function Accordion({ data }: AccordionProps) {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const categoryOffsets = data.reduce((acc, category, index) => {
    const previousTotal = index === 0 ? 0 : acc[index - 1];
    acc.push(previousTotal + category.questions.length);
    return acc;
  }, [] as number[]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
      {/* Categories and questions */}
      {data.map((category, categoryIndex) => {
        const startIndex =
          categoryIndex === 0 ? 0 : categoryOffsets[categoryIndex - 1];

        return (
          <div key={category.name} className="category-section">
            <h2 className="text-center text-3xl font-bold mb-6 mt-8 dark:text-white border-b-2 border-primary dark:border-primary-foreground pb-2">
              {category.name}
            </h2>
            {category.questions.map((el, indexWithinCategory) => {
              const globalIndex = startIndex + indexWithinCategory;

              return (
                <AccordionItem
                  key={el.question}
                  currentOpen={currentOpen}
                  setCurrentOpen={setCurrentOpen}
                  question={el.question}
                  num={globalIndex}
                >
                  {el.answer}
                </AccordionItem>
              );
            })}
          </div>
        );
      })}

      {/* Ending message */}
      <ContactPrompt />
    </div>
  );
}

export default Accordion;
