import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Contact from "./sections/contact/Contact";
import HeroBanner from "./sections/heroBanner/HeroBanner";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Footer from "./sections/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  )
}

export default HomePage;