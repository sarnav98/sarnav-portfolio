import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { calculateExperienceYears } from "@/lib/experience";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Automation Test Engineer",
    location: "Kolkata, India",
    period: "Feb 2023 – Present",
    achievements: [
      "Automated regression test suites using Selenium, Cucumber & TestNG, reducing manual effort by 70%",
      "Designed and executed data-driven tests across multiple datasets to ensure functional accuracy",
      "Implemented parallel execution in TestNG, improving test efficiency by 25%",
      "Led cross-browser compatibility testing across Chrome, Firefox, Safari, and Edge browsers",
      "Conducted comprehensive API testing with Postman to validate critical REST endpoints and data integrity",
      "Enhanced frameworks with modular, reusable components and maintained comprehensive test documentation",
      "Created and executed Cucumber BDD feature files to simplify communication with stakeholders",
      "Mentored junior team members on automation best practices and code review processes",
      "Integrated Allure reporting for detailed test execution insights and stakeholder visibility",
      "Collaborated with development teams to implement shift-left testing practices",
      "Established test data management strategies for consistent and reliable test execution"
    ],
    skills: ["Selenium", "Cucumber", "TestNG", "Postman", "BDD", "Cross-browser Testing", "Allure Reports"]
  },
  {
    company: "RS Software",
    role: "Software Engineer",
    location: "Kolkata, India",
    period: "Aug 2022 – Jan 2023",
    achievements: [
      "Built hybrid automation framework (WebDriver, TestNG, Cucumber) with POM & Data-Driven Testing",
      "Architected scalable test framework supporting multiple environments (Dev, QA, Staging, Prod)",
      "Automated API workflows with Postman, improving issue detection speed by 35%",
      "Authored comprehensive Gherkin feature files, increasing test coverage by 40%",
      "Optimized WebDriver scripts with smart waits and locator strategies, reducing execution time by 20%",
      "Configured Jenkins pipelines for CI/CD integration of automated test suites",
      "Implemented database validation testing using SQL queries for data consistency checks",
      "Established automated smoke testing for rapid feedback on build deployments",
      "Created detailed test execution reports with screenshots for failed test scenarios",
      "Collaborated with product owners to define acceptance criteria and testing scope"
    ],
    skills: ["WebDriver", "TestNG", "Cucumber", "Jenkins", "CI/CD", "SQL", "Database Testing"]
  },
  {
    company: "Infogain",
    role: "Software Engineer",
    location: "Mumbai, India - Noida, India",
    period: "Jul 2021 – Aug 2022",
    achievements: [
      "Developed hybrid automation framework (Selenium WebDriver, TestNG, Apache POI) from ground up",
      "Created reusable API libraries using RestAssured for microservices testing",
      "Integrated automation workflows with Azure DevOps, improving deployment efficiency by 25%",
      "Implemented Excel-driven test data management using Apache POI for complex test scenarios",
      "Optimized WebDriver scripts with Page Factory pattern, reducing execution time by 20%",
      "Conducted comprehensive regression suite maintenance, ensuring 100% coverage during updates",
      "Set up automated email notifications for test execution results and failure analysis",
      "Participated in daily standups and sprint planning sessions following Agile methodologies",
      "Performed functional, integration, and end-to-end testing across web applications",
      "Documented test cases, test plans, and framework architecture for knowledge transfer",
      "Contributed to code reviews and maintained coding standards across the testing team"
    ],
    skills: ["Selenium WebDriver", "RestAssured", "Azure DevOps", "Apache POI", "Microservices Testing", "Agile"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {calculateExperienceYears()}+ years of expertise in test automation
          </p>
          <div className="h-1 w-24 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card shadow-card border-border hover:shadow-yellow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;