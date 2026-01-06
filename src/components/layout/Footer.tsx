import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";
import libroReclamaciones from "@/assets/libroreclamaciones.jpeg";
import logo from "@/assets/logo.jpeg";
import marca from "@/assets/marca.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="SOUT Training Center" 
                className="h-16 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Centro de entrenamiento especializado en manejo defensivo, seguridad vial 
              y prevención de riesgos para el sector minero, industrial y de transporte.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/SOUTTrainingCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/51977959001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            {/* Libro de Reclamaciones */}
            <a
              href="https://forms.gle/YaXB1nhvNkimJGUT7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <img
                src={libroReclamaciones}
                alt="Libro de Reclamaciones"
                className="w-40 h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary-foreground">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Quiénes Somos", href: "/nosotros" },
                { name: "Cursos", href: "/cursos" },
                { name: "Blog", href: "/blog" },
                { name: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary-foreground">
              Cursos Destacados
            </h4>
            <ul className="space-y-3">
              {[
                "Manejo Defensivo NSC",
                "Manejo 4x4 Minería",
                "Primeros Auxilios RCP",
                "Uso de Extintores",
                "Fatiga y Somnolencia",
                "Formación de Instructores",
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/cursos"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary-foreground">
              Contáctenos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Av. Alameda del Corregidor 1769, La Molina, Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  <p>+51 977 959 001</p>
                  <p>+51 932 191 033</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  <p>capacitaciones@soutrainingcenter.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Lun - Vie: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications 
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-heading font-bold text-accent text-xs">NSC</span>
              </div>
              <span className="text-xs text-secondary-foreground/60">NSC USA</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-heading font-bold text-primary text-xs">HP</span>
              </div>
              <span className="text-xs text-secondary-foreground/60">Hodelpe</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-heading font-bold text-secondary-foreground text-xs">CCL</span>
              </div>
              <span className="text-xs text-secondary-foreground/60">Cámara de Comercio</span>
            </div>
          </div>
        </div>*/}
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground/5">
        <div className="section-container py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-secondary-foreground/60">
            {/* Developed by - centered */}
            <a
              href="https://wa.me/51912603970?text=Hola%20Fly%2C%20vengo%20de%20SOUT%20TRAINING%20CENTER%2C%20estoy%20interesado%20en%20crear%20mi%20p%C3%A1gina%20web%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-base font-medium">Desarrollado por</span>
              <img 
                src={marca} 
                alt="1FLY" 
                className="h-8 w-auto object-contain"
              />
            </a>
            
            {/* Copyright and links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p>© 2026 SOUT Training Center. Todos los derechos reservados.</p>
              <div className="hidden md:block text-secondary-foreground/40">|</div>
              <div className="flex items-center gap-6">
                <Link to="/politica-de-privacidad" className="hover:text-primary transition-colors duration-300">
                  Política de Privacidad
                </Link>
                <Link to="/terminos-de-uso" className="hover:text-primary transition-colors duration-300">
                  Términos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
