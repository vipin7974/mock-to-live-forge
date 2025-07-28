import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900">Be Ballsy</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </a>
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Mental Health
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Physical Wellness
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Intimate Health
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Self Development
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contact Us
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <Button 
              variant="default" 
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium"
            >
              Book Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
              <nav className="space-y-4">
                <a href="#" className="block text-gray-700 hover:text-primary transition-colors font-medium">
                  About
                </a>
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Mental Health
                      </a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Physical Wellness
                      </a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Intimate Health
                      </a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Self Development
                      </a>
                    </div>
                  )}
                </div>
                <a href="#" className="block text-gray-700 hover:text-primary transition-colors font-medium">
                  Resources
                </a>
                <a href="#" className="block text-gray-700 hover:text-primary transition-colors font-medium">
                  Contact Us
                </a>
                <Button 
                  variant="default" 
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium mt-4"
                >
                  Book Consultation
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;