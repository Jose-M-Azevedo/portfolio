import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-boxColor p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-10">{project.title}</h2>
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                className="text-xl text-secondaryColor hover:underline hover:text-[#5A9BD4]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="text-xl text-secondaryColor hover:underline hover:text-[#5A9BD4]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
            </div>
          </div>
          <p className="text-foreground mb-8">{project.description}</p>
          <p className="text-sm text-gray-400">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block border border-secondaryColor text-secondaryColor px-2 py-1 rounded-full mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
