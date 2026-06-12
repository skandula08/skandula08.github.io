import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/project.css"
import type { ProjectOverview } from "../types";

export default function ProjectCard({
  image,
  type,
  title,
  description,
  tags,
}: ProjectOverview) {
  return (
    <article 
    className="project-card text-left overflow-hidden rounded-md border transition-all hover:-translate-y-1">
      <div className="top-bar border-b bg-gradient-to-b px-4 py-2">
  <div className="flex gap-2">
    {/* <div className="h-3 w-3 rounded-full bg-red-400" />
    <div className="h-3 w-3 rounded-full bg-yellow-400" />
    <div className="h-3 w-3 rounded-full bg-green-400" /> */}
    <p className="text-sm">{type}</p>
  </div>
</div>
      {/* Image */}
      <div className="aspect-video overflow-hidden border-b">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed">
          {description}
        </p>

        <div className="tags flex flex-wrap gap-2">
            <FontAwesomeIcon icon={faTag} />
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag rounded-full border px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}