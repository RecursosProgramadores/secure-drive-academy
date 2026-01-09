import { Button } from "@/components/ui/button";
import { 
  Car, 
  Shield, 
  Heart, 
  Flame, 
  GraduationCap, 
  Mountain, 
  Factory, 
  Truck,
  ChevronRight,
  CheckCircle,
  MapPin,
  Zap,
  Wheat,
  Building2,
  Store
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Manejo Defensivo",
    description: "Programas certificados NSC USA para formar conductores responsables y reducir accidentes viales hasta en un 19%.",
    icon: Car,
    features: [
      "Certificación internacional NSC",
      "Modalidad presencial y virtual",
      "Instructores experimentados",
      "Material multimedia interactivo"
    ],
    color: "primary"
  },
  {
    id: 2,
    title: "Seguridad Vial",
    description: "Campañas y programas integrales de seguridad vial adaptados a las necesidades específicas de cada organización.",
    icon: Shield,
    features: [
      "Diagnóstico de riesgos viales",
      "Campañas de concientización",
      "Evaluación de competencias",
      "Seguimiento y métricas"
    ],
    color: "accent"
  },
  {
    id: 3,
    title: "Primeros Auxilios",
    description: "Capacitación en técnicas de primeros auxilios, RCP y uso de DEA bajo estándares OSHA y NSC.",
    icon: Heart,
    features: [
      "Certificación OSHA/NSC",
      "Prácticas con simuladores",
      "Escenarios reales",
      "Recertificación anual"
    ],
    color: "red"
  },
  {
    id: 4,
    title: "Prevención de Incendios",
    description: "Entrenamiento práctico en uso de extintores, evacuación y prevención de incendios industriales.",
    icon: Flame,
    features: [
      "Prácticas con fuego real",
      "Tipos de extintores",
      "Planes de evacuación",
      "Formación de brigadas"
    ],
    color: "orange"
  },
  {
    id: 5,
    title: "Formación de Instructores",
    description: "Desarrolla instructores internos certificados NSC para multiplicar la capacitación en tu organización.",
    icon: GraduationCap,
    features: [
      "Metodología NSC",
      "Técnicas pedagógicas",
      "Material de capacitación",
      "Certificación NSC USA"
    ],
    color: "purple"
  },
  {
    id: 6,
    title: "Prácticas de Manejo 4x4 Modelo Mina",
    description: "Entrenamiento especializado en conducción 4x4 en condiciones de operación minera. Disponible todos los días en Lima.",
    icon: MapPin,
    features: [
      "Circuito modelo mina",
      "Vehículos 4x4 especializados",
      "Instructores certificados",
      "Disponible todos los días en Lima"
    ],
    color: "green"
  }
];

const sectors = [
  {
    id: 1,
    title: "Minería",
    description: "Superficie, subterránea y exploración. Manejo de vehículos pesados, 4x4 y equipos especializados.",
    icon: Mountain
  },
  {
    id: 2,
    title: "Industria",
    description: "Manufactura, petróleo, gas y construcción. Seguridad integral y prevención de riesgos.",
    icon: Factory
  },
  {
    id: 3,
    title: "Transporte",
    description: "Transporte de carga, pasajeros y materiales peligrosos. Conductores profesionales certificados.",
    icon: Truck
  },
  {
    id: 4,
    title: "Energía",
    description: "Generación eléctrica, hidroeléctricas y energías renovables. Seguridad operacional y manejo de riesgos.",
    icon: Zap
  },
  {
    id: 5,
    title: "Agrícola",
    description: "Agroindustria y agroexportación. Manejo seguro de maquinaria agrícola y transporte de productos.",
    icon: Wheat
  },
  {
    id: 6,
    title: "Educación",
    description: "Instituciones educativas y universidades. Programas de seguridad vial y primeros auxilios.",
    icon: Building2
  },
  {
    id: 7,
    title: "Comercio",
    description: "Retail, distribución y logística. Capacitación en seguridad operacional y prevención de riesgos.",
    icon: Store
  }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; icon: string; badge: string }> = {
    primary: { bg: "bg-primary/5", icon: "text-primary", badge: "bg-primary" },
    accent: { bg: "bg-accent/5", icon: "text-accent", badge: "bg-accent" },
    red: { bg: "bg-red-500/5", icon: "text-red-500", badge: "bg-red-500" },
    orange: { bg: "bg-orange-500/5", icon: "text-orange-500", badge: "bg-orange-500" },
    purple: { bg: "bg-purple-500/5", icon: "text-purple-500", badge: "bg-purple-500" },
    green: { bg: "bg-green-500/5", icon: "text-green-500", badge: "bg-green-500" }
  };
  return colors[color] || colors.primary;
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          <span className="inline-block font-heading text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Soluciones Integrales en{" "}
            <span className="text-primary">Seguridad</span> y Capacitación
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Ofrecemos programas de capacitación personalizados para los sectores minero, 
            industrial y de transporte, con certificaciones internacionales y metodologías probadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={service.id}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/51977959001?text=${encodeURIComponent(
                    `Hola, estoy interesado en el servicio: *${service.title}*\n\n📋 Descripción:\n${service.description}\n\n✅ Características:\n${service.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n¿Podrían brindarme más información y cotización?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full group/btn">
                    Más Información
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Sectors Section */}
        <div className="bg-background rounded-3xl p-6 md:p-8 lg:p-12 border border-border">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Sectores que Atendemos
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Experiencia especializada en los sectores más exigentes del país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              
              return (
                <div
                  key={sector.id}
                  className="text-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {sector.title}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {sector.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
