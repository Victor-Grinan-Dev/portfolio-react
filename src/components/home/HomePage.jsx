import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Contact from "./sections/contact/Contact";
import HeroBanner from "./sections/heroBanner/HeroBanner";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  )
}

export default HomePage;