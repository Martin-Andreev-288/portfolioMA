import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type ProjectButtonsProps = {
  numShownProjects: number;
  toggleExpand: () => void;
  totalProjectsNum: number;
};

function ProjectButtons({
  numShownProjects,
  toggleExpand,
  totalProjectsNum,
}: ProjectButtonsProps) {
  const remaining = totalProjectsNum - numShownProjects;

  if (remaining <= 0) return null;

  return (
    <div className="mt-4">
      <Button
        aria-label="Expand projects list"
        variant="outline"
        onClick={() => {
          toggleExpand();
          setTimeout(
            () =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              }),
            100
          );
        }}
        className="gap-1 transition-all dark:border-gray-100"
      >
        <ChevronDown className="h-4 w-4" />
        Show More{" "}
        <span className="ml-2 text-xs opacity-75">
          +{totalProjectsNum - numShownProjects}
        </span>
      </Button>
    </div>
  );
}

export default ProjectButtons;
