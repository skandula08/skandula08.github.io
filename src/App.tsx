import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Code from "./pages/Code";
import Design from "./pages/Design";
import About from "./pages/About";
import Illustration from "./pages/Illustration";
import ProjectPage from "./pages/ProjectPage";

import { useParams } from "react-router-dom";
import { design, programming } from "./pages/projects/projectLists";

function CodeProjectRoute() {
  const { slug } = useParams();

  const project = programming.find(
    f => f.slug === slug
  );
  if(!project) return;
  return <ProjectPage project={project} />;
}

function DesignProjectRoute() {
  const { slug } = useParams();

  const project = design.find(
    f => f.slug === slug
  );
  if(!project) return;
  return <ProjectPage project={project} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coding" element={<Code />} />
          <Route path="/design" element={<Design />} />
          <Route path="/art" element={<Illustration />} />
          <Route path="/about" element={<About />} />

          <Route path="/coding/:slug" element={<CodeProjectRoute />} />
          <Route path="/design/:slug" element={<DesignProjectRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
