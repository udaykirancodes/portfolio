import { useState } from "react";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Model from "./components/Model";
function App() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="w-full bg-primary">
      <div className="bg-primary container px-4 sm:px-0  md:px-0 py-10 mx-auto">
        <Navbar />
        <Landing setOpenModel={setOpenModel} />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
        <Model />
      </div>
    </div>
  );
}

export default App;
