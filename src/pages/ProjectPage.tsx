import { useEffect, useState } from "react";
import ProjectIntro from "../componenets/ProjectIntro";
import type { ProjectOverview } from "../types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type ProjectProps = {
  project: ProjectOverview;
};

const writeups = import.meta.glob(
  "./projects/writeups/*.md",
  { import: "raw" }
) as Record<string, () => Promise<string>>;

export default function ProjectPage(project: ProjectProps) {
  const toDisplay = project.project;

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const filePath = Object.keys(writeups).find((path) =>
      path.endsWith(`${toDisplay.slug}.md`)
    );

    if (!filePath) return;

    writeups[filePath]().then((content) => {
      setMarkdown(content);
    });
  }, [toDisplay.slug]);

  return (
    <div>
      <ProjectIntro {...toDisplay} />

      <div className="writeup text-left text-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}