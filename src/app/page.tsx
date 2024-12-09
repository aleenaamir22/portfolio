import Hero from "@/components/hero";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Portfolio from "@/components/pages/portfolio";
import Projects from "@/components/pages/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Portfolio/>
      <Contact/>
       
    </div>
  );
}
