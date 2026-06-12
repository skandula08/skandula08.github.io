import { faCalendar, faSatellite, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ProjectOverview } from "../types";
import "../stylesheets/project.css";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectIntro(project: ProjectOverview) {
  return (
    <div>
      {/* {JSON.stringify(project)} */}
      <div className="intro-bar rounded-lg border p-10 m-10">
        <h2 className="font-(family-name:Nunito)">{project.title}</h2>
        <h3>{project.description}</h3>
        <br />
        <div className="tags-container">
        {project.year && (
          <>
            <FontAwesomeIcon icon={faCalendar} />
            {project.year} &nbsp;
          </>
        )}
        {project.link && (
          <>
            <a href={project.link} target="_blank" className="underline">
              {project.type === "design" ? (
                <span>
                  <FontAwesomeIcon icon={faFigma} />
                  figma/{project.slug}
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  {new URL(project.link).pathname.slice(1)}
                </span>
              )}
            </a>
            &nbsp;
          </>
        )}
        {project.demo && (
          <>
          <FontAwesomeIcon icon={faSatellite} />
            <a href={project.demo} target="_blank" className="underline">
                  {new URL(project.demo).hostname.replace(/^www\./, "")}
                  {/* {project.demo} */}
            </a>
            &nbsp;
          </>
        )}
        
        
                  <FontAwesomeIcon icon={faTag} />
                  
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tags rounded-full border px-2 py-1 mx-1 text-xs"
          >
            {tag}
          </span>
        ))}

        </div>
      </div>
    </div>
  );
}
