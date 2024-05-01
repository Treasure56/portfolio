import Navbar from "@/components/Navbar";
import HeroSection from "./Hero";
import Technologies from "./Technologies";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Technologies />
      <About />
      <Project />
      <Contact />
    </>
  );
}
