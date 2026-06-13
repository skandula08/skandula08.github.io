import ProjectCard from "../componenets/ProjectCard";
import { programming } from "./projects/projectLists";

export default function Code() {
    return (
        <div>
                  <section id="projects" className=" max-w-6xl px-6 py-10">
                    <h1 className="mb-10 text-3xl font-bold">&gt;_Coding Projects//</h1>

                    ଘ(੭ˊ꒳ˋ)੭✧ ┌iii┐ (o˘◡˘o )
                    <br />
                    This is my current catalog of coding project writeups.
                    <br />
                    There will always be more to come~
                    <br />
                    <br />




                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {programming.map((project, index) => (
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
    );
}