import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type ProjectButtonsProps = {
  isExpanded: boolean;
  toggleExpand: () => void;
  totalProjects: number;
};

function ProjectButtons({
  isExpanded,
  toggleExpand,
  totalProjects,
}: ProjectButtonsProps) {
  return (
    <div className="mt-4">
      <Button
        aria-label={
          isExpanded ? "Collapse projects list" : "Expand projects list"
        }
        variant={isExpanded ? "destructive" : "default"}
        onClick={() => {
          toggleExpand();
          if (!isExpanded) {
            setTimeout(
              () =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                }),
              100
            );
          }
        }}
        className="gap-2 transition-all"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="h-4 w-4" />
            Show Less{" "}
            <span className="ml-2 text-xs opacity-75">
              (-{totalProjects - 6})
            </span>
          </>
        ) : (
          <>
            <ChevronDown className="h-4 w-4" />
            Show More{" "}
            <span className="ml-2 text-xs opacity-75">
              +{totalProjects - 6}
            </span>
          </>
        )}
      </Button>
    </div>
  );
}

export default ProjectButtons;
