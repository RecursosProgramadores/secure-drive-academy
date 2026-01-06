import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-training.jpg";
import drivingImage from "@/assets/driving-training.jpg";
import firstAidImage from "@/assets/first-aid-training.jpg";
import logo2 from "@/assets/nsc-menu.png";

const slides = [
  {
    id: 1,
    title: "Cursos y Certificaciones",
    subtitle: "Programas especializados con certificación internacional avalada",
    backgroundImage: drivingImage,
    features: [
      { text: "Certificación NSC USA" },
      { text: "Instructores Certificados" },
      { text: "Material Actualizado" },
      { text: "Modalidad Presencial y Virtual" }
    ]
  },
  {
    id: 2,
    title: "Estamos Acreditados",
    subtitle: "Respaldados por instituciones de reconocimiento internacional",
    backgroundImage: heroImage,
    showLogo: true,
    accreditations: [
      
    ]
  },
  {
    id: 3,
    title: "Lo Que Ofrecemos",
    subtitle: "Soluciones integrales para tu desarrollo profesional y empresarial",
    backgroundImage: firstAidImage,
    offerings: [
      {
        title: "Capacitación",
        description: "Programas de formación especializada en manejo defensivo y seguridad vial"
      },
      {
        title: "Certificación",
        description: "Validación internacional de competencias profesionales"
      },
      {
        title: "Consultoría",
        description: "Asesoría especializada para implementación de sistemas de seguridad"
      },
      {
        title: "Soporte",
        description: "Acompañamiento continuo post-certificación y actualización"
      }
    ]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  const currentBackgroundImage = currentSlideData.backgroundImage;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - Change with slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.backgroundImage}
            alt={slide.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Carousel Content */}
      <div className="relative section-container py-32 md:py-40 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Slides Container */}
          <div className="relative min-h-[500px] flex items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                {/* Slide 1: Cursos y Certificaciones */}
                {slide.id === 1 && (
                  <div className="text-center space-y-8 animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-4">
                      <span className="text-sm font-medium text-primary-foreground">
                        Centro Autorizado NSC USA
                      </span>
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
                      {slide.features?.map((feature, idx) => {
                        return (
                          <div 
                            key={idx}
                            className="group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-white/40 hover:border-accent/60"
                          >
                            {/* Decorative gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Content */}
                            <div className="relative z-10">
                              <p className="text-lg font-bold text-gray-900 leading-snug text-center">
                                {feature.text}
                              </p>
                            </div>
                            
                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
                  </div>
                )}

                {/* Slide 2: Estamos Acreditados */}
                {slide.id === 2 && (
                  <div className="text-center space-y-10 animate-fade-up">
                    
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>

                    {/* Logo Container - Optimized for all devices */}
                    <div className="flex items-center justify-center py-6 md:py-8">
                      <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        
                        {/* Logo with background */}
                        <div className="relative bg-[#30323e] rounded-2xl p-6 md:p-8 shadow-2xl group-hover:shadow-accent/20 transition-all duration-500">
                          <img 
                            src={logo2} 
                            alt="Logo Institución Acreditadora" 
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <Link to="/nosotros">
                        <Button variant="hero" size="xl">
                          Conocer Más
                        </Button>
                      </Link>
                      <Link to="/contacto">
                        <Button variant="heroOutline" size="xl">
                          Solicitar Información
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Slide 3: Lo Que Ofrecemos */}
                {slide.id === 3 && (
                  <div className="text-center space-y-8 animate-fade-up">

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
                      {slide.offerings?.map((offering, idx) => (
                        <div 
                          key={idx}
                          className="group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-white/40 hover:border-accent/60"
                        >
                          {/* Decorative gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                              {offering.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {offering.description}
                            </p>
                          </div>
                          
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <Link to="/servicios">
                        <Button variant="hero" size="xl" className="group">
                          Ver Servicios
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link to="/contacto">
                        <Button variant="heroOutline" size="xl">
                          Contactar Ahora
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full p-3 hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full p-3 hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentSlide
                    ? "w-12 h-3 bg-accent"
                    : "w-3 h-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
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
