import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
          {/* Main Content */}
          <div className="animate-slide-in-left delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Gukan R</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Software Engineer
            </h2>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Innovative tech student passionate about full stack development,
              data analytics, and building impactful digital solutions that make
              a difference.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                Explore My Work <ExternalLink className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/10bpSPUws60vwlB1nPHP0rrEQ2Rx5V2-E/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("about")}
                className="text-gray-500 hover:text-gray-700"
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
