
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript", "SQL"],
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      skills: ["Spring", "Hibernate", "React.js", "Flutter"],
      color: "purple"
    },
    {
      title: "Tools & Platforms",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Firebase", "Mapbox", "Postman", "GitHub"],
      color: "green"
    },
    {
      title: "Certifications",
      icon: <Award className="h-6 w-6" />,
      skills: ["CCNA (Cisco)", "NPTEL", "IBM SkillsBuild", "GUVI"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-500 bg-blue-50",
      purple: "border-purple-500 bg-purple-50",
      green: "border-green-500 bg-green-50",
      orange: "border-orange-500 bg-orange-50"
    };
    return colorMap[color as keyof typeof colorMap] || "border-gray-500 bg-gray-50";
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      orange: "text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <section id="skills" className="py-16 bg-white snap-start">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, frameworks, and certifications 
            that enable me to build robust and scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`card-hover border-l-4 transform hover:scale-105 transition-all duration-300 ${getColorClasses(category.color)}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <span className={`mr-3 ${getIconColor(category.color)}`}>
                    {category.icon}
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-2 text-sm transform hover:scale-105 transition-all duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Technical Certifications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Java Full Stack – Wipro</li>
                  <li>• Python for Data Science – NPTEL (IIT Madras)</li>
                  <li>• CCNA (3 modules) – Cisco</li>
                  <li>• Spring & Hibernate Frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Design & Analytics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• UI/UX Design and Flutter – GUVI</li>
                  <li>• IBM SkillsBuild – Data Analytics</li>
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Mobile App Development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
