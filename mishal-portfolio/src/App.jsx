import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import MouseGlow from "./components/MouseGlow";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <ParticlesBackground />
      <MouseGlow />
      <CustomCursor />

      <div className="site-content">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;