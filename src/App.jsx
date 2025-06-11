// import components
import { useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectsWebflow from "./components/ProjectsWebflow";

import Skills from "./components/Skills";
import Navbar from "./Layouts/Navbar";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
const now = new Date();

const App = () => {
  const handleInstallClick = async () => {
    const registration = await navigator.serviceWorker.ready;
    registration.showInstallPrompt();
  };
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div id="style-1" className="overflow-x-hidden scrollbar">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectsWebflow/>
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Amir Mohammad Hamzavi</h6>
        <p>© All CopyRights Reserved {now.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
