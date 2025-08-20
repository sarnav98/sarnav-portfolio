// Update this page (the content is just a fallback if you fail to update the page)

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
