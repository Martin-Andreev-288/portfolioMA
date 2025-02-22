import { useState } from "react";
import { ProjectButtons, ProjectCard } from "../";

export type Project = {
  name: string;
  technologies: string;
  img: string;
  demo: string;
  link: string;
  repo: string;
  description: string;
};

function Projects({ projects }: { projects: Project[] }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 p-4">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <ProjectButtons
        isExpanded={isExpanded}
        toggleExpand={() => setIsExpanded(!isExpanded)}
        totalProjects={projects.length}
      />
    </>
  );
}

export default Projects;
