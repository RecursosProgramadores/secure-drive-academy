import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anayka Cruzate",
    role: "Jefa de Seguridad",
    company: "Explomin",
    content:
      "Las capacitaciones de SOUT Training Center han sido fundamentales para reducir los incidentes viales en nuestra operación. El enfoque práctico y la metodología NSC marcan la diferencia.",
    rating: 5,
  },
  {
    id: 2,
    name: "Neyruth Huamani Taipe",
    role: "Coordinador SSOMA",
    company: "Volcan Compañía Minera",
    content:
      "Excelente equipo de instructores con amplia experiencia en el sector minero. Los cursos de manejo 4x4 han mejorado significativamente las competencias de nuestros operadores.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Ausenco",
    content:
      "La calidad del entrenamiento y las certificaciones internacionales que otorga SOUT nos dan la confianza de que nuestro personal está preparado para operar de manera segura.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Lo Que Dicen{" "}
            <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Empresas líderes confían en SOUT Training Center para la capacitación 
            de sus equipos en seguridad vial y manejo defensivo.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-tr-full" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-xl text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="font-heading font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
