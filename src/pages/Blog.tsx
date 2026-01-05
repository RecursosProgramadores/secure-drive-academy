import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ChevronRight, Clock } from "lucide-react";
import drivingTraining from "@/assets/driving-training.jpg";
import firstAidTraining from "@/assets/first-aid-training.jpg";
import fireTraining from "@/assets/fire-training.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Cómo Reducir la Fatiga en Conductores Mineros",
    excerpt:
      "La fatiga es uno de los principales factores de accidentes viales en el sector minero. Aprende estrategias efectivas para prevenir la somnolencia al volante.",
    image: drivingTraining,
    author: "Pedro Munive",
    date: "15 Dic 2025",
    readTime: "5 min",
    category: "Seguridad Vial",
  },
  {
    id: 2,
    title: "5 Técnicas de Primeros Auxilios que Todo Trabajador Debe Conocer",
    excerpt:
      "En situaciones de emergencia, conocer las técnicas básicas de primeros auxilios puede marcar la diferencia entre la vida y la muerte.",
    image: firstAidTraining,
    author: "Equipo SOUT",
    date: "10 Dic 2025",
    readTime: "7 min",
    category: "Primeros Auxilios",
  },
  {
    id: 3,
    title: "La Importancia del Manejo Defensivo en la Industria",
    excerpt:
      "El manejo defensivo no es solo una habilidad, es una filosofía de conducción que puede reducir accidentes hasta en un 19%.",
    image: drivingTraining,
    author: "Pedro Munive",
    date: "5 Dic 2025",
    readTime: "6 min",
    category: "Manejo Defensivo",
  },
  {
    id: 4,
    title: "Guía Completa: Uso Correcto de Extintores en la Industria",
    excerpt:
      "Saber elegir y usar el extintor adecuado según el tipo de fuego es fundamental para la seguridad de cualquier instalación industrial.",
    image: fireTraining,
    author: "Equipo SOUT",
    date: "1 Dic 2025",
    readTime: "8 min",
    category: "Prevención de Incendios",
  },
];

const Blog = () => {
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
                Blog
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Consejos y{" "}
                <span className="text-primary">Noticias</span> de Seguridad
              </h1>
              <p className="text-xl text-secondary-foreground/80">
                Artículos, guías y recursos sobre seguridad vial, manejo defensivo 
                y prevención de riesgos para profesionales del sector.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`grid ${index === 0 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index === 0 ? "h-72 md:h-full" : "h-56"}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-bold">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className={`font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 ${
                        index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                      }`}>
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Button variant="outline" className="group/btn">
                        Leer Más
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 text-center border border-border">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Suscríbete a Nuestro Newsletter
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Recibe consejos de seguridad, noticias del sector y ofertas exclusivas 
                directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero">Suscribirse</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
