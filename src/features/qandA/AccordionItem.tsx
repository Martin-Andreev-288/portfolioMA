type AccordionItemProps = {
  currentOpen: number | null;
  setCurrentOpen: (e: number | null) => void;
  question: string;
  num: number;
  children: React.ReactNode;
};

function AccordionItem({
  currentOpen,
  setCurrentOpen,
  question,
  num,
  children,
}: AccordionItemProps) {
  const isOpen: boolean = num === currentOpen;

  const handleToggle = (): void => {
    console.log(`Toggling state from ${currentOpen} to ${isOpen ? null : num}`);
    setCurrentOpen(isOpen ? null : num);
  };

  return (
    <div
      className={`cursor-pointer p-5 rounded-md shadow-md grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center dark:bg-gray-800 dark:shadow-lg dark:shadow-gray-800/50 ${
        isOpen
          ? "border-t-4 border-emerald-700 dark:border-primary"
          : "border-t-4 border-white dark:border-gray-700"
      }`}
      onClick={handleToggle}
    >
      <p className="text-2xl font-medium text-gray-400 dark:text-gray-300">
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="text-2xl font-medium dark:text-white">{question}</p>
      <p className="text-2xl font-medium dark:text-gray-300">
        {isOpen ? "+" : "-"}
      </p>

      {isOpen && (
        <div className="col-start-2 pb-4 leading-relaxed break-words max-w-full dark:text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
