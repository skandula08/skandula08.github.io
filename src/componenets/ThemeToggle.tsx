import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../useTheme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
      const isDark = theme === "dark";
    return(
       <button
      className="theme-toggle"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      aria-label={`Switch to ${
        isDark ? "light" : "dark"
      } mode`}
    >
      {isDark ? <><FontAwesomeIcon icon={faSun} /> Light</> : <><FontAwesomeIcon icon={faMoon} /> Dark</>}
    </button>
    );

}