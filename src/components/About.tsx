import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Award, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 snap-start">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify leading-relaxed">
            I am Gukan R, a final-year Information Technology student at IFET
            College of Engineering. With practical experience in backend
            development, machine learning, and UI/UX design, I aim to build
            scalable digital solutions with real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Personal Details */}
          <div className="space-y-6">
            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-600">Muthialpet, Pondicherry</p>
              </CardContent>
            </Card>

            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">
                      B.Tech in Information Technology
                    </p>
                    <p className="text-gray-600">
                      IFET College of Engineering (2019-2025)
                    </p>
                    <p className="text-blue-600 font-semibold">CGPA: 8.8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Academic Excellence</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Certificate of Merit for 2nd & 3rd Semester Top Rank
                  </li>
                  <li>• HSC: 90% (2021)</li>
                  <li>• SSLC: 85.8% (2019)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What Drives Me */}
          <div className="space-y-6">
            <Card className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  I believe in the power of technology to solve real-world
                  problems. My journey through hackathons and internships has
                  taught me that the best solutions come from understanding user
                  needs and building with empathy and innovation. Every project
                  I work on is driven by the desire to create meaningful impact
                  and push the boundaries of what's possible with code.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">
                      gukanranganathan@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">9360684799</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
