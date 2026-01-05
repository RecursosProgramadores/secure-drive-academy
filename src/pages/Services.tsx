import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Car,
  Heart,
  Flame,
  GraduationCap,
  Shield,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const services = [
  {
    icon: Car,
    title: "Manejo Defensivo",
    description:
      "Programas certificados NSC USA para formar conductores responsables y reducir accidentes viales hasta en un 19%.",
    features: [
      "Certificación internacional NSC",
      "Modalidad presencial y virtual",
      "Instructores experimentados",
      "Material multimedia interactivo",
    ],
  },
  {
    icon: Shield,
    title: "Seguridad Vial",
    description:
      "Campañas y programas integrales de seguridad vial adaptados a las necesidades específicas de cada organización.",
    features: [
      "Diagnóstico de riesgos viales",
      "Campañas de concientización",
      "Evaluación de competencias",
      "Seguimiento y métricas",
    ],
  },
  {
    icon: Heart,
    title: "Primeros Auxilios",
    description:
      "Capacitación en técnicas de primeros auxilios, RCP y uso de DEA bajo estándares OSHA y NSC.",
    features: [
      "Certificación OSHA/NSC",
      "Prácticas con simuladores",
      "Escenarios reales",
      "Recertificación anual",
    ],
  },
  {
    icon: Flame,
    title: "Prevención de Incendios",
    description:
      "Entrenamiento práctico en uso de extintores, evacuación y prevención de incendios industriales.",
    features: [
      "Prácticas con fuego real",
      "Tipos de extintores",
      "Planes de evacuación",
      "Formación de brigadas",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formación de Instructores",
    description:
      "Desarrolla instructores internos certificados NSC para multiplicar la capacitación en tu organización.",
    features: [
      "Metodología NSC",
      "Técnicas pedagógicas",
      "Material de capacitación",
      "Certificación NSC USA",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Servicios de capacitación SOUT"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
          </div>
          <div className="section-container relative">
            <div className="max-w-3xl">
              <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Nuestros Servicios
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Soluciones Integrales en{" "}
                <span className="text-primary">Seguridad</span> y Capacitación
              </h1>
              <p className="text-xl text-secondary-foreground/80">
                Ofrecemos programas de capacitación personalizados para los sectores 
                minero, industrial y de transporte, con certificaciones internacionales 
                y metodologías probadas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-lg card-hover border border-border relative overflow-hidden"
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary/10" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/contacto">
                    <Button variant="outline" className="w-full group/btn">
                      Más Información
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sectores que Atendemos
              </h2>
              <p className="text-muted-foreground">
                Experiencia especializada en los sectores más exigentes del país.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Minería",
                  description:
                    "Superficie, subterránea y exploración. Manejo de vehículos pesados, 4x4 y equipos especializados.",
                  color: "primary",
                },
                {
                  title: "Industria",
                  description:
                    "Manufactura, petróleo, gas y construcción. Seguridad integral y prevención de riesgos.",
                  color: "accent",
                },
                {
                  title: "Transporte",
                  description:
                    "Transporte de carga, pasajeros y materiales peligrosos. Conductores profesionales certificados.",
                  color: "primary",
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-8 text-center border border-border hover:-translate-y-2 transition-transform duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      sector.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <Shield
                      className={`w-8 h-8 ${
                        sector.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              ¿Necesitas un Programa Personalizado?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Diseñamos soluciones de capacitación a medida según las necesidades 
              específicas de tu organización. Contáctanos para una evaluación gratuita.
            </p>
            <Link to="/contacto">
              <Button variant="heroOutline" size="xl">
                Solicitar Evaluación Gratuita
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
