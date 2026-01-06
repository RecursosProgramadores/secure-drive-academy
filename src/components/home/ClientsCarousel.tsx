import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Importar logos de referencia (agregar más según se vayan creando)
import logo2 from "@/assets/logo2.jpg";
import ausencoLogo from "@/assets/ausenco.jpg";
import fluorLogo from "@/assets/fluor.jpg";
import saegLogo from "@/assets/saeg.jpg";

const clients = [
  { name: "Ausenco", logo: ausencoLogo },
  { name: "Reliable Controls", logo: fluorLogo },
  { name: "Planvital", logo: saegLogo },
  { name: "SFO Drilling", logo: logo2 },
  { name: "Aurifera Tres Cruces", logo: logo2 },
  { name: "G&G Perforaciones", logo: logo2 },
  { name: "Salus Laboris", logo: logo2 },
  { name: "Grupo Mejia", logo: logo2 },
  { name: "G&C", logo: logo2 },
  { name: "SAEG Security", logo: saegLogo },
  { name: "GEvandina Exploraciones", logo: logo2 },
  { name: "Linra", logo: logo2 },
  { name: "Qefa", logo: logo2 },
  { name: "Core Tech", logo: logo2 },
  { name: "Cultinor", logo: logo2 },
  { name: "Cobra", logo: logo2 },
  { name: "Fluor", logo: fluorLogo },
  { name: "ALS", logo: logo2 },
  { name: "Engie", logo: logo2 },
  { name: "Cenel", logo: logo2 },
  { name: "Valor Sostenible", logo: logo2 },
  { name: "Volcan", logo: logo2 },
  { name: "A&M", logo: logo2 },
  { name: "Explomin", logo: logo2 },
  { name: "Anddes", logo: logo2 },
  { name: "Impala", logo: logo2 },
  { name: "Stracon", logo: logo2 },
  { name: "Consorcio Minero", logo: logo2 }
];

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const getCurrentClients = () => {
    const start = currentIndex * itemsPerPage;
    return clients.slice(start, start + itemsPerPage);
  };

  return (
    <section 
      className="py-16 bg-background border-t border-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nuestros Clientes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que <span className="text-primary">Confían</span> en Nosotros
          </h2>
          <p className="text-muted-foreground">
            Más de 500 empresas líderes en los sectores minero, industrial y de transporte
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 min-h-[200px] items-center">
            {getCurrentClients().map((client, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex items-center justify-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background border border-border rounded-full p-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
            aria-label="Previous clients"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background border border-border rounded-full p-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
            aria-label="Next clients"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ClientsCarousel;
