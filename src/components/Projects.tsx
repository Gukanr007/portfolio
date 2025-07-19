
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Palette } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CitySync",
      subtitle: "Civic Engagement App",
      description: "A comprehensive mobile application designed to enhance civic engagement by allowing citizens to report local issues, receive notifications, and interact with city services through an intuitive interface.",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      features: ["Issue reporting", "Push notifications", "Interactive maps", "Real-time updates"],
      image: "/lovable-uploads/05ac143e-611f-4d1c-b021-8be95238d929.png",
      demoLink: "https://gukanr007.github.io/citysync/",
      codeLink: "https://github.com/Gukanr007/citysync"
    },
    {
      title: "CarAura",
      subtitle: "EV Companion App",
      description: "An innovative electric vehicle companion application that provides comprehensive diagnostics, parking assistance, and maintenance scheduling to enhance the EV ownership experience.",
      technologies: ["Mapbox", "Twilio API", "React Native"],
      features: ["Vehicle diagnostics", "Parking assistance", "Maintenance tracking", "Route optimization"],
      image: "/lovable-uploads/9dc14039-75d8-4b85-8554-6905f036886e.png",
      designLink: "https://gukanr007.github.io/caraura/"
    },
    {
      title: "JalNet",
      subtitle: "Rural Water Supply System",
      description: "A digital solution for rural water supply management featuring automated billing, asset tracking, and GIS tools to improve water distribution efficiency in rural areas.",
      technologies: ["Razorpay", "Firestore", "React.js"],
      features: ["Automated billing", "Asset tracking", "GIS integration", "Usage analytics"],
      image: "/lovable-uploads/9ab109eb-e5b6-4a39-9be8-253b25d54cdf.png",
      demoLink: "https://jalnet.netlify.app/",
      codeLink: "https://github.com/Gukanr007/jalnet"
    },
    {
      title: "TrackSafety",
      subtitle: "Road Safety Management",
      description: "A comprehensive road safety management system that enables reporting of road hazards, quick fixes, and creating safer streets for communities through collaborative efforts.",
      technologies: ["React.js", "Firebase", "Google Maps API"],
      features: ["Hazard reporting", "Quick fixes", "Community collaboration", "Safety analytics"],
      image: "/lovable-uploads/b5430146-46a3-40b4-b693-b777a6cd1759.png",
      designLink: "https://gukanr007.github.io/tracksafety/"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 snap-start">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in mobile and web development, focusing on 
            solutions that address real-world challenges and improve user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.subtitle}</p>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  {project.codeLink && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.designLink && !project.demoLink && (
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-teal-600" asChild>
                      <a href={project.designLink} target="_blank" rel="noopener noreferrer">
                        <Palette className="h-4 w-4 mr-2" />
                        Design
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
