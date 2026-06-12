import ProjectCard from "../componenets/ProjectCard";
import { selected } from "./projects/projectLists";
import "../stylesheets/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Contact from "../componenets/Contact";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="introduction text-left">
        <div className="cut-marks">
          <span className="absolute top-15 left-20 h-4 w-4 border-t-2 border-l-2" />
          <span className="absolute top-15 right-160 h-4 w-4 border-t-2 border-r-2" />
          <span className="absolute bottom-70 left-20 h-4 w-4 border-b-2 border-l-2" />
          <span className="absolute bottom-70 right-160 h-4 w-4 border-b-2 border-r-2" />
        </div>

        <h1 className="text-xxl">
          Hi, I'm <span className="">Sree!</span>
        </h1>
        <h2 className="">
          Welcome to my portfolio!
          <br />
          <span className="text-[var(--red)]">(((o(*°▽°*)o)))</span>
        </h2>

        <p className="text-lg w-2/6">
          I'm a designer, developer and artist who likes to solve problems and
          make cool tools that can help a friend out. <br />
          Feel free to peruse my woundrous collection
        </p>
      </section>
      <div className="colophon-bar mt-15">
        +++++++++++++++++++++++++++++++++++++++
        <br />
        <span>ARCHIVE_08</span>
        <span>STATUS:AOK</span>
        <span>REACT+TS</span>
        <span>BUILD:2026</span>
        <span>SIGNAL:███████░░</span>
        <span>PATTERN RED</span>
      </div>
      {/* Projects */}
      <section id="projects" className=" max-w-6xl px-6 py-24">
        <h1 className="mb-10 text-3xl font-bold">
          Project Showcase <FontAwesomeIcon icon={faMagnifyingGlass} />
        </h1>
        <p className="px-20">
          Here's a collection of some of my projects. Click on each card to read
          my write up on them. You can also navigate to other tabs to look at
          some other collections of projects too! :3
        </p>
        ヾ( `ー´)シφ__
        <br />
        <br />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selected.map((project, index) => (
            <a href={`/${project.type}/${project.slug}`}>
              <ProjectCard key={index} {...project} />
            </a>
          ))}
        </div>
        <br />
        <hr />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 flex justify-center text-left ">
        <div className="p-8">
          <h1 className="mb-6 text-3xl font-bold">Contact</h1>
          <h3 className="mb-4 font-[Cousine] w-4/5">
            Feel free to reach out if you'd like to work together!
          </h3>
        </div>
        <Contact />
      </section>
    </main>
  );
}
