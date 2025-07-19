
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner – Hack to Crack 1.0",
      category: "Blockchain & Cyber Security",
      year: "2024",
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      description: "First place in blockchain and cybersecurity hackathon"
    },
    {
      title: "Runner-Up – Socio-Tech Hackathon",
      category: "Social Technology",
      year: "2024",
      icon: <Award className="h-8 w-8 text-silver-600" />,
      description: "Second place for developing innovative social technology solutions"
    },
    {
      title: "First Prize – Tech Sparks Mini Project Expo",
      category: "Innovation",
      year: "2023",
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      description: "Top project in mini project exhibition"
    },
    {
      title: "Mentor – i.mobilothon 4.0",
      category: "Volkswagen",
      year: "2024",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      description: "Mentored teams in automotive technology hackathon"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 snap-start">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for excellence in hackathons, academic performance, and leadership 
            in technology innovation and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Excellence */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto card-hover bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold gradient-text">8.8</p>
                  <p className="text-sm text-gray-600">CGPA</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">2+</p>
                  <p className="text-sm text-gray-600">Merit Certificates</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Certificate of Merit for 2nd and 3rd Semester Top Rank at IFET College of Engineering
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
