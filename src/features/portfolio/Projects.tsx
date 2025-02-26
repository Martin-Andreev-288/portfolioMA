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

type ProjectProps = {
  projects: Project[];
  initialCount: number;
};

function Projects({ projects, initialCount }: ProjectProps) {
  const [numShownProjects, setNumShownProjects] =
    useState<number>(initialCount);
  const visibleProjects = projects.slice(0, numShownProjects);
  const totalProjectsNum = projects.length;

  const toggleExpand = () => {
    setNumShownProjects((prev) => prev + 3);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 p-4">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <ProjectButtons
        numShownProjects={numShownProjects}
        toggleExpand={toggleExpand}
        totalProjectsNum={totalProjectsNum}
      />
    </>
  );
}

export default Projects;
