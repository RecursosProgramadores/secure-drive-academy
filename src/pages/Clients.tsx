import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Star, Quote } from "lucide-react";
import ausencoLogo from "@/assets/ausenco.jpg";
import fluorLogo from "@/assets/fluor.jpg";
import saegLogo from "@/assets/saeg.jpg";

const clients = [
  { name: "Ausenco", logo: ausencoLogo },
  { name: "Reliable Controls", logo: null },
  { name: "Planvital", logo: null },
  { name: "SFO Drilling", logo: null },
  { name: "Aurifera Tres Cruces", logo: null },
  { name: "G&G Perforaciones", logo: null },
  { name: "Salus Laboris", logo: null },
  { name: "Grupo Mejia", logo: null },
  { name: "G&C", logo: null },
  { name: "SAEG Security", logo: saegLogo },
  { name: "GEvandina Exploraciones", logo: null },
  { name: "Linra", logo: null },
  { name: "Qefa", logo: null },
  { name: "Core Tech", logo: null },
  { name: "Cultinor", logo: null },
  { name: "Cobra", logo: null },
  { name: "Fluor", logo: fluorLogo },
  { name: "ALS", logo: null },
  { name: "Engie", logo: null },
  { name: "Cenel", logo: null },
  { name: "Valor Sostenible", logo: null },
  { name: "Volcan", logo: null },
  { name: "A&M", logo: null },
  { name: "Explomin", logo: null },
];

const testimonials = [
  {
    id: 1,
    name: "Anayka Cruzate",
    role: "Jefa de Seguridad",
    company: "Explomin",
    content:
      "Las capacitaciones de SOUT Training Center han sido fundamentales para reducir los incidentes viales en nuestra operación minera. El enfoque práctico y la metodología NSC marcan la diferencia. Altamente recomendados.",
    rating: 5,
  },
  {
    id: 2,
    name: "Neyruth Huamani Taipe",
    role: "Coordinador SSOMA",
    company: "Volcan Compañía Minera",
    content:
      "Excelente equipo de instructores con amplia experiencia en el sector minero. Los cursos de manejo 4x4 han mejorado significativamente las competencias de nuestros operadores. La inversión vale cada sol.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Ausenco",
    content:
      "La calidad del entrenamiento y las certificaciones internacionales que otorga SOUT nos dan la confianza de que nuestro personal está preparado para operar de manera segura en cualquier condición.",
    rating: 5,
  },
  {
    id: 4,
    name: "María Elena Quispe",
    role: "Superintendente HSE",
    company: "Fluor",
    content:
      "Hemos trabajado con SOUT Training Center por más de 5 años. Su compromiso con la excelencia y la actualización constante de sus programas los hace nuestro socio preferido en capacitación.",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent/10" />
          <div className="section-container relative">
            <div className="max-w-3xl">
              <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Nuestros Clientes
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Empresas que{" "}
                <span className="text-primary">Confían</span> en Nosotros
              </h1>
              <p className="text-xl text-secondary-foreground/80">
                Más de 500 empresas de los sectores minero, industrial y de transporte 
                han capacitado a sus equipos con SOUT Training Center.
              </p>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestros Clientes Corporativos
              </h2>
              <p className="text-muted-foreground">
                Empresas líderes en minería, industria y transporte que han elegido 
                nuestros programas de capacitación certificados.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[140px] hover:shadow-xl hover:border-primary border-2 border-gray-100 transition-all duration-300 group"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-auto object-contain max-h-20 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="font-heading font-bold text-sm text-center text-gray-600 group-hover:text-primary transition-colors duration-300">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Testimonios
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lo Que Dicen de Nosotros
              </h2>
              <p className="text-muted-foreground">
                La satisfacción de nuestros clientes es nuestra mayor recompensa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} - {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Empresas Capacitadas" },
                { value: "10,000+", label: "Profesionales Formados" },
                { value: "98%", label: "Satisfacción del Cliente" },
                { value: "19%", label: "Reducción de Accidentes" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
