import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background and Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <Navbar />
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}
