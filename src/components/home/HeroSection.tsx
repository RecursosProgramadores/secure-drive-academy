import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grupo de trabajadores mineros en capacitación de manejo defensivo con vehículos 4x4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Content */}
      <div className="relative section-container py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Centro Autorizado NSC USA
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Formamos Conductores{" "}
            <span className="text-primary">Responsables,</span>{" "}
            <span className="text-accent">Seguros</span> y Eficientes
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-up animation-delay-200">
            Capacitaciones especializadas en manejo defensivo, seguridad vial y prevención 
            de riesgos para los sectores minero, industrial y de transporte. 
            <span className="text-accent font-semibold"> Reduce accidentes hasta un 19%</span> con 
            nuestros programas certificados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animation-delay-300">
            <Link to="/cursos">
              <Button variant="hero" size="xl" className="group">
                Ver Cursos
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="heroOutline" size="xl">
                Solicitar Cotización
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up animation-delay-400">
            {[
              { value: "10+", label: "Años de Experiencia" },
              { value: "NSC", label: "Certificación USA" },
              { value: "500+", label: "Empresas Capacitadas" },
              { value: "19%", label: "Reducción Accidentes" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center md:text-left p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="font-heading text-2xl md:text-3xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
