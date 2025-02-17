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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 p-4">
      {projects.map((project) => (
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {project.technologies}
                </p>
              </div>

              <p className="text-gray-700 text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                {project.description}
              </p>

              {/* Video Link */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
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
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <FiExternalLink className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <FiGithub className="w-6 h-6 text-gray-800" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
