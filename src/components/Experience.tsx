
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Backend Developer Intern",
      company: "DevQuad, Chennai",
      period: "Mar - Apr 2025",
      description: [
        "Developed REST APIs using Spring Boot",
        "Implemented Spring Security with JWT",
        "Used Hibernate ORM for efficient database queries"
      ],
      skills: ["Spring Boot", "JWT", "Hibernate", "REST APIs"]
    },
    {
      title: "Full Stack Development Intern",
      company: "Wipro TalentNext",
      period: "2024",
      description: [
        "Developed web applications with Java, HTML, CSS, JavaScript",
        "Built RESTful backend services",
        "Worked on end-to-end application development"
      ],
      skills: ["Java", "JavaScript", "HTML/CSS", "RESTful Services"]
    },
    {
      title: "Data Analytics Intern",
      company: "CSRBOX & IBM SkillsBuild",
      period: "Jun - Aug 2024",
      description: [
        "Worked with data analytics tools and techniques",
        "Gained hands-on experience with IBM SkillsBuild platform",
        "Applied data science concepts to real-world problems"
      ],
      skills: ["Data Analytics", "IBM SkillsBuild", "Data Science"]
    },
    {
      title: "Machine Learning Intern",
      company: "Pantech eLearning, Chennai",
      period: "Sep 2023",
      description: [
        "Created machine learning models with 85% accuracy",
        "Worked on predictive analytics projects",
        "Gained experience in model evaluation and optimization"
      ],
      skills: ["Machine Learning", "Python", "Model Development"]
    },
    {
      title: "Mobile App Developer Intern",
      company: "Smart Knower Technologies",
      period: "Aug - Sep 2022",
      description: [
        "Built and integrated a Flutter mobile application",
        "Worked on cross-platform mobile development",
        "Implemented modern UI/UX design principles"
      ],
      skills: ["Flutter", "Mobile Development", "UI/UX"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various internships and roles has equipped me with 
            diverse technical skills and real-world experience in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
