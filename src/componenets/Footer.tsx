import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/headerfooter.css";
// import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
// import { faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer-area flex flex-col items-center gap-4 p-4">
      
      
      <p className="text-sm">
        {/* <FontAwesomeIcon icon={faPuzzlePiece} className="text-lg" />{" "} */}
        brought to you by sree © 2026
        </p>
      <section className="flex gap-4">
        <button title="Github" className="rounded bg-white/20 p-1">
          <a href="https://github.com/skandula08/">
          <FontAwesomeIcon icon={faGithub} className="text-lg" />
          github/skandula08
          </a>
        </button>
        <button title="LinkedIn" className="rounded bg-white/20 p-1">
          <a href="https://www.linkedin.com/in/sreekandula/">
          <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          LinkedIn
          </a>
        </button>
        {/* <button title="Resume" className="rounded bg-white/20 p-1">
          <a href="https://drive.google.com/file/d/1FGtO2ZcbtFSurl-F2GoabqERBaTCiMZM/view?usp=sharing">
            <FontAwesomeIcon icon={faFileLines} className="text-lg" />
            Resume
          </a>
        </button> */}
      </section>
    </div>
  );
}
