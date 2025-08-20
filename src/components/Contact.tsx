import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, MessageSquare, Send } from "lucide-react";

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
          {/* Contact Information Card */}
          <Card className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
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
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Get In Touch
                </h4>
                
                <div className="space-y-3">
                  <a href="mailto:sarnavdutta2011@gmail.com">
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-yellow transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://github.com/sarnav98" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/sarnav-dutta/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Contact Form or Additional Info Card */}
          <Card className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Why Work With Me?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">4+ years</span> of hands-on experience in test automation
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Expertise in <span className="font-semibold text-foreground">Selenium, Java, TestNG, Cucumber</span> and modern testing frameworks
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Proven track record of <span className="font-semibold text-foreground">reducing manual effort by 70%</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Strong background in <span className="font-semibold text-foreground">CI/CD integration</span> and agile methodologies
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Available for full-time opportunities only. 
                  Let's discuss how I can help automate your testing processes and improve your software quality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 shadow-card">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need help with test automation, framework development, or want to discuss opportunities, 
                I'm just one email away. Let's build something amazing together!
              </p>
              <a href="mailto:sarnavdutta2011@gmail.com">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-yellow transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start the Conversation
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
