import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Beyond } from "@/components/Beyond";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Expertise />
        <Experience />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
