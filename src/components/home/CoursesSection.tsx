import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, ChevronRight } from "lucide-react";
import drivingTraining from "@/assets/manejo.png";
import firstAidTraining from "@/assets/rcp.png";
import fireTraining from "@/assets/extintores.png";

const courses = [
  {
    id: 1,
    title: "Manejo Defensivo NSC",
    description:
      "Programa certificado por el National Safety Council (NSC) de Estados Unidos. Reduce accidentes vehiculares hasta un 19%.",
    duration: "6-8 horas",
    audience: "Conductores profesionales",
    modality: "Presencial y Virtual",
    image: drivingTraining,
    certification: "NSC USA",
    featured: true,
  },
  {
    id: 2,
    title: "Primeros Auxilios - RCP - DEA",
    description:
      "Capacitación en técnicas de primeros auxilios, reanimación cardiopulmonar y uso de desfibrilador externo automático.",
    duration: "8 horas",
    audience: "Todo personal",
    modality: "Presencial y Virtual",
    image: firstAidTraining,
    certification: "OSHA/NSC",
    featured: true,
  },
  {
    id: 3,
    title: "Uso y Manejo de Extintores",
    description:
      "Entrenamiento práctico en prevención y combate de incendios. Uso correcto de extintores según tipo de fuego.",
    duration: "4 horas",
    audience: "Brigadistas y personal",
    modality: "Presencial",
    image: fireTraining,
    certification: "Certificado",
    featured: true,
  },
];

const CoursesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nuestros Programas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cursos de{" "}
            <span className="text-primary">Capacitación Especializada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Programas certificados internacionalmente diseñados para formar profesionales 
            competentes en seguridad vial, manejo defensivo y prevención de riesgos.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                
                {/* Certification Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-heading font-bold">
                  {course.certification}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{course.audience}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/51977959001?text=${encodeURIComponent(
                      `Hola, estoy interesado en el curso: ${course.title}\n\nDuración: ${course.duration}\nCertificación: ${course.certification}\nModalidad: ${course.modality}\n\n¿Podrían brindarme más información?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="default" className="w-full">
                      Iniciar
                    </Button>
                  </a>
                  <Link to="/contacto" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Contacto
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/cursos">
            <Button variant="hero" size="lg">
              Ver Todos los Cursos
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
