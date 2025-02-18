import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  name: string;
  technologies: string;
  img: string;
  demo: string;
  link: string;
  repo: string;
  description: string;
};

function Projects({ projects }: { projects: Project[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 p-4">
        {visibleProjects.map((project) => (
          <div key={project.name} className="flex flex-col items-center mb-8">
            {/* Project Card */}
            <div className="group relative w-64 h-96 mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
              />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="text-center transform -translate-y-16 group-hover:-translate-y-0 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {project.technologies}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {project.description}
                </p>

                {/* Video Link */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-500 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-400"
                >
                  Go to Video
                </a>
              </div>
            </div>

            {/* Permanent Icons BELOW the Card */}
            <div className="mt-2 flex justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiExternalLink className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button
          aria-label={
            isExpanded ? "Collapse projects list" : "Expand projects list"
          }
          variant={isExpanded ? "destructive" : "default"}
          onClick={() => {
            setIsExpanded(!isExpanded);
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
                (-{projects.length - 6})
              </span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show More{" "}
              <span className="ml-2 text-xs opacity-75">
                +{projects.length - 6}
              </span>
            </>
          )}
        </Button>
      </div>
    </>
  );
}

export default Projects;
