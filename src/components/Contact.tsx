import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.open("mailto:gukanranganathan@gmail.com", "_blank");
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/10bpSPUws60vwlB1nPHP0rrEQ2Rx5V2-E/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 snap-start"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on
            innovative projects, or simply connect with fellow tech enthusiasts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Get In Touch
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">Email</p>
                        <a
                          href="mailto:gukanranganathan@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          gukanranganathan@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">Phone</p>
                        <a
                          href="tel:+919360684799"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          +91 9360684799
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">Location</p>
                        <p className="text-gray-600">Muthialpet, Pondicherry</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Connect Online
                  </h3>

                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/gukanr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">LinkedIn</p>
                        <p className="text-gray-600 text-sm">
                          Professional network
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </a>

                    <a
                      href="https://github.com/Gukanr007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-purple-600" />
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">GitHub</p>
                        <p className="text-gray-600 text-sm">
                          Code repositories
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm border-blue-200 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Whether you have a project in mind, want to discuss
                    technology trends, or explore potential opportunities, I'd
                    love to hear from you!
                  </p>

                  <div className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-lg py-3"
                      onClick={handleEmailClick}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 text-lg py-3"
                      onClick={handleResumeDownload}
                    >
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Current Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">
                        Available for opportunities
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Final year student (2025)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Open to work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            ©2025{" "}
            <a
              href="https://www.linkedin.com/in/gukanr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Gukan R
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
