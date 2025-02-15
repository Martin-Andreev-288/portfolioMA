type Passion = {
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
};

type PassionsProps = {
  passions: Passion[];
};

function Passions({ passions }: PassionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {passions.map((passion) => (
        <div
          key={passion.title}
          className={`relative pt-4 pb-5 px-5 rounded-xl shadow-sm hover:shadow-xl transition-shadow
                     sm:w-[40%] md:w-[35%] lg:w-[31%] flex flex-col items-center
                     bg-cover bg-center ${passion.imageUrl}`}
        >
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50 rounded-xl z-0" />

          <div className="relative z-10 mb-3 text-2xl">
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">
              {passion.icon}
            </span>
          </div>

          <h4
            className="relative z-10 text-lg text-center mb-2 font-extrabold
                          text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                          dark:text-gray-100 dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
          >
            {passion.title}
          </h4>

          <p
            className="relative z-10 text-sm text-center px-2 font-semibold
                         text-white/95 backdrop-blur-[2px] bg-black/20 rounded-lg
                         dark:text-gray-200 dark:bg-white/15"
          >
            {passion.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Passions;
