import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss your next automation project or explore opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+91-8282827171" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +91-8282827171
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:sarnavdutta2011@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  sarnavdutta2011@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">Kolkata, India</span>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-yellow transition-all duration-300"
                  onClick={() => window.open('mailto:sarnavdutta2011@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open('https://github.com/sarnav98/')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open('https://www.linkedin.com/in/sarnav-dutta/')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Bachelor of Technology in Information Technology
                </h4>
                <p className="text-muted-foreground mb-1">
                  Techno India Saltlake
                </p>
                <p className="text-muted-foreground mb-1">
                  Maulana Abul Kalam Azad University of Technology
                </p>
                <p className="text-primary font-medium">2017 – 2021</p>
                <p className="text-sm text-muted-foreground mt-2">Kolkata, India</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Professional Certification
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">CS50x from Harvard University</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  under David J. Malan
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
