import ProjectCard from "../componenets/ProjectCard";
import { design } from "./projects/projectLists";

export default function Design() {
  return (
    <div>
      <div>
        <section id="projects" className=" max-w-6xl px-6 py-10">
          <h1 className="mb-10 text-3xl font-bold">
            Design Projects <br /> & Case Studies
          </h1>
          ( ^^)p_____|_o____q(^^ )

          <h3 className="text-lg font-semibold">
            Here's where I'm keeping my assorted design projects. <br />
            UI/UX, graphic, game and everything in between will be stored here. 
            Please enjoy!
            <br />
            <br />
          </h3>




          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {design.map((project, index) => (
              <a href={`/${project.type}/${project.slug}`}>
                <ProjectCard 
                             key={index}
                               {...project}
                             />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
