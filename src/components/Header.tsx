
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
            G
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-105">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-105">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-105">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-105">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-105">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://www.linkedin.com/in/gukanr/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/Gukanr007" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="transform hover:scale-110 transition-all duration-300">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:gukanranganathan@gmail.com">
              <Button variant="ghost" size="sm" className="transform hover:scale-110 transition-all duration-300">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fadeInUp">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/gukanr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://github.com/Gukanr007" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a href="mailto:gukanranganathan@gmail.com">
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
