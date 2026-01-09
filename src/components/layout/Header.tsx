import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpeg";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Cursos", href: "/cursos" },
  { name: "Contacto", href: "/contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md",
        isScrolled ? "py-1.5 sm:py-2" : "py-2 sm:py-3 md:py-4"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="SOUT Training Center" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-5 py-2.5 font-heading text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10 tracking-wide",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:+51977959001" className="hidden md:flex items-center gap-2 font-heading text-base lg:text-lg font-semibold transition-colors duration-300 text-gray-800 hover:text-primary tracking-wide">
              <Phone className="w-5 h-5" />
              <span>+51 977 959 001</span>
            </a>
            
            <a
              href="https://wa.me/51977959001?text=Hola%2C%20estoy%20interesado%20en%20solicitar%20una%20cotizaci%C3%B3n%20para%20capacitaciones%20en%20SOUT%20Training%20Center.%0A%0A%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="default" className="hidden sm:flex text-base lg:text-lg font-semibold tracking-wide">
                Solicitar Cotización
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-gray-800 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-screen mt-4" : "max-h-0"
          )}
        >
          <div className="bg-background rounded-xl shadow-xl p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 font-heading text-sm font-medium rounded-lg transition-all duration-300",
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/51977959001?text=Hola%2C%20estoy%20interesado%20en%20solicitar%20una%20cotizaci%C3%B3n%20para%20capacitaciones%20en%20SOUT%20Training%20Center.%0A%0A%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-4"
            >
              <Button variant="hero" size="lg" className="w-full">
                Solicitar Cotización
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
