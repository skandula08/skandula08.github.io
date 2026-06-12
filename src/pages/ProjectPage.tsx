import { useEffect, useState } from "react";
import ProjectIntro from "../componenets/ProjectIntro";
import type { ProjectOverview } from "../types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


type ProjectProps = {
  project: ProjectOverview;
};

const writeups = import.meta.glob("./projects/writeups/*.md", {
  as: "raw",
});
export default function ProjectPage(project: ProjectProps) {
  const toDisplay: ProjectOverview = { ...project.project };

  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    const filePath = `./projects/writeups/${toDisplay.slug}.md`;

    const loader = writeups[filePath];

    if (!loader) {
      return;
    }

    loader().then((content) => {
      setMarkdown(content as string);
    });
  }, [toDisplay.slug]);

  return (
    <div>
      <ProjectIntro {...toDisplay} />
      <div className="writeup text-left text-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
      
    </div>
  );
}
