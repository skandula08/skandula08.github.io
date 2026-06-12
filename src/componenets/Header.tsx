import "../stylesheets/headerfooter.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const navigate = useNavigate();
  // const today = new Date().toLocaleDateString(undefined, {
  //   weekday: "short",
  //   month: "short",
  //   day: "numeric",
  // });
  // const now = new Date().toLocaleTimeString(undefined, {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="portfolio-menu justify-between z-9">
        <div className="desktop-nav">
          {/* Sree.fun */}
          {/* <li> */}
          <button
            className="menu-link"
            title="Home"
            onClick={() => {
              navigate("/home");
            }}
          >
            <FontAwesomeIcon icon={faHouse} /> HOMEBASE
          </button>
          <button
            className="menu-link"
            onClick={() => {
              navigate("/design");
            }}
          >
            Design
          </button>
          {/* </li>
      <li> */}
          <button
            className="menu-link"
            onClick={() => {
              navigate("/coding");
            }}
          >
            Programming
          </button>
          {/* <button
            className="menu-link"
            onClick={() => {
              navigate("/art");
            }}
          >
            Illustration
          </button> */}

          <button
            className="menu-link"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Me
          </button>
          {/* <button
            className="menu-link"
            onClick={() => {
              navigate("/about");
            }}
          >
            &gt;_
          </button> */}
        </div>
        {/* <span className="datetime">
        {today}, &nbsp;{now}&nbsp;</span> */}
        {/* </li> */}

         <button
      className="eva-menu"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      NAV-01
    </button>
    <div className="px-10 py-2 text-[var(--accent)] rounded">
          <ThemeToggle />
        </div>
      </div>
      {mobileMenuOpen && (
  <div className="mobile-nav">
    <button onClick={() => navigate("/home")}>HOMEBASE</button>
    <button onClick={() => navigate("/design")}>DESIGN</button>
    <button onClick={() => navigate("/coding")}>PROGRAMMING</button>
    <button onClick={() => navigate("/art")}>ILLUSTRATION</button>
    <button onClick={() => navigate("/about")}>ABOUT</button>
    <button onClick={() => navigate("/about")}>&gt;_</button>
  </div>
)}
    </div>

    
  );
}
