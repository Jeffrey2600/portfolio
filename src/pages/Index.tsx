
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Certificates } from "@/components/Certificates"
import { Resume } from "@/components/Resume"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
