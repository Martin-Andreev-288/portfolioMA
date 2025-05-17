import { FiExternalLink, FiGithub } from "react-icons/fi";
import { type Project } from "./Projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div key={project.name} className="flex flex-col items-center mb-8">
      {/* Project Card */}
      <div className="group relative w-72 h-96 mx-auto overflow-hidden rounded-lg shadow-2xl transition-all duration-300">
        {/* Project Image */}
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-fill transition-opacity duration-300 group-hover:opacity-20"
        />

        {/* Hover Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <div className="text-center transform -translate-y-16 group-hover:-translate-y-0 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {project.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              <p className="font-bold">Core technologies: </p>{" "}
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
          <FiExternalLink
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
            data-testid="external-link-icon"
          />
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white dark:bg-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiGithub
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
            data-testid="github-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
