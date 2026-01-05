import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Cursos", href: "/cursos" },
  { name: "Clientes", href: "/clientes" },
  { name: "Blog", href: "/blog" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                <span className="text-primary-foreground font-heading font-black text-xl transform skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                  S
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                SOUT
              </span>
              <span className={cn(
                "font-heading text-xs tracking-widest transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              )}>
                TRAINING CENTER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 font-heading text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/10",
                  location.pathname === item.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:+51977959001" className={cn(
              "hidden md:flex items-center gap-2 font-heading text-sm font-medium transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              <Phone className="w-4 h-4" />
              <span>+51 977 959 001</span>
            </a>
            
            <Link to="/contacto">
              <Button variant="hero" size="default" className="hidden sm:flex">
                Solicitar Cotización
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-300",
                isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
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
            <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="hero" size="lg" className="w-full mt-4">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
