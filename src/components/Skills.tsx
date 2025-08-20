import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Languages",
    icon: Code,
    skills: ["Java", "Gherkin", "SQL", "MySQL", "Oracle"],
    color: "text-primary"
  },
  {
    title: "Automation Tools",
    icon: Wrench,
    skills: ["Selenium WebDriver", "Cucumber", "TestNG", "Postman", "RestAssured"],
    color: "text-accent"
  },
  {
    title: "Frameworks & Practices",
    icon: Database,
    skills: ["BDD", "Data-Driven Testing", "POM", "CI/CD", "Jenkins", "Azure DevOps"],
    color: "text-primary"
  }
];

const achievements = [
  {
    title: "TCS Digital Conversion",
    description: "Converted from TCS Ninja to TCS Digital through Wings 1 (Top 2% of TCS Workforce)",
    highlight: "Top 2%"
  },
  {
    title: "Multiple Awards",
    description: "Star of The Month, Contextual Master Award, On The Spot Award",
    highlight: "Recognition"
  },
  {
    title: "CS50x Harvard",
    description: "Completed CS50x from Harvard University under David J. Malan",
    highlight: "Harvard"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-3 rounded-full bg-secondary ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-primary">Achievements</span> & Recognition
          </h3>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{achievement.description}</p>
                <Badge className="bg-gradient-primary text-primary-foreground">
                  {achievement.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;