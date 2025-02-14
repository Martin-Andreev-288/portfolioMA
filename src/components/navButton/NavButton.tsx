import { ArrowLeft, ArrowRight } from "lucide-react";

type NavButtonProps = {
  direction: string;
  onClick: () => void;
};

function NavButton({ direction, onClick }: NavButtonProps) {
  return (
    <button
      type="button"
      className={`absolute top-[285px] bg-secondary text-secondary-foreground w-8 h-8 grid place-items-center border border-border rounded-md cursor-pointer transition-colors hover:bg-secondary/80 md:w-10 md:h-10 md:text-xl ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
      onClick={onClick}
    >
      {direction === "prev" ? (
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      )}
    </button>
  );
}

export default NavButton;
