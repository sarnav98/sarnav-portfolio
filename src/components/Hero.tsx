import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { calculateExperienceYears } from "@/lib/experience";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <span className="block">Sarnav</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dutta
            </span>
          </h1>
          
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Automation Test Engineer
            </h2>
            <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {calculateExperienceYears()}+ years of experience building scalable automation frameworks using 
            <span className="text-primary"> Selenium, Java, TestNG, and Cucumber</span>. 
            Delivering high-quality solutions that reduce manual effort by 70%.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-yellow transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="tel:+91-8282827171" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sarnavdutta2011@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;