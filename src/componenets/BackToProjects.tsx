import { useNavigate } from "react-router";

export default function BackToProjects() {
  const navigate = useNavigate();
    return(
        <div className="w-full m-auto my-10 border rounded p-5 border-[var(--accent)] transition duration-700">
            <h3 className="font-[Cousine]"><b> Return to Projects?</b></h3>
            <div>
               <button
            className="m-2 p-2 border rounded hover:font-bold duration-300 hover:bg-[var(--accent)]/20"
            onClick={() => {
              navigate("/design");
            }}
          >
            Design
          </button>
          {/* </li>
      <li> */}
          <button
            className="m=2 p-2 border rounded hover:font-bold duration-300 hover:bg-[var(--accent)]/20"
            onClick={() => {
              navigate("/coding");
            }}
          >
            Programming
          </button>
          </div>
        </div>
    );
}