import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // delay close for smoother hover
  };

  return (
    <header className="absolute w-5/6 top-4 left-1/2 -translate-x-1/2 z-50 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-gray-900 hover:text-primary transition-colors text-2xl font-bold"
            >
              Be Ballsy
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
               <div className="flex items-center justify-between w-full">
  <Link
    to="/services"
    className="text-gray-700 hover:text-primary transition-colors font-medium"
  >
    Services
  </Link>
  <button onClick={() => setIsServicesOpen(!isServicesOpen)}>
    <ChevronDown
      className={`w-4 h-4 transition-transform ${
        isServicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <Link
                      to="/mentalWellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Mental Health
                    </Link>
                    <Link
                      to="/physicalWellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Physical Wellness
                    </Link>
                    <Link
                      to="/intimateWellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Intimate Health
                    </Link>
                    <Link
                      to="/dadWellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Dad's Wellness
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/ourStory"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Our Story
              </Link>
              <a
                href="resources"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Resources
              </a>
              <a
                href="reachOut"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
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
                <a
                  href="#"
                  className="block text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  About
                </a>
                <div>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <Link
                      to="/services"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Mental Health
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Physical Wellness
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Intimate Health
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        Self Development
                      </a>
                    </div>
                  )}
                </div>
                <Link
                  to="/ourStory"
                  className="block text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Our Story
                </Link>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-primary transition-colors font-medium"
                >
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
