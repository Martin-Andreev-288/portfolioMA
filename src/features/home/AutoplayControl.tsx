type AutoplayControlProps = {
  onToggle: () => void;
  isEnabled: boolean;
};

function AutoplayControl({ onToggle, isEnabled }: AutoplayControlProps) {
  return (
    <button
      type="button"
      className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold px-4 py-1 rounded-md cursor-pointer transition-colors hover:bg-primary/90"
      onClick={onToggle}
    >
      {isEnabled ? "Pause Slideshow" : "Enable Slideshow"}
    </button>
  );
}

export default AutoplayControl;
