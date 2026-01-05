import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    course: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje Enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      course: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />
          <div className="section-container relative">
            <div className="max-w-3xl">
              <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Contáctenos
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Estamos Aquí para{" "}
                <span className="text-primary">Ayudarte</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80">
                ¿Tienes preguntas sobre nuestros cursos? ¿Necesitas una cotización 
                personalizada? Contáctanos y te responderemos en menos de 24 horas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Información de Contacto
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">
                        Dirección
                      </h4>
                      <p className="text-muted-foreground">
                        Av. Alameda del Corregidor 1769<br />
                        La Molina, Lima, Perú
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        RUC: 20605873872
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">
                        Teléfonos
                      </h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+51977959001" className="hover:text-primary transition-colors">
                          +51 977 959 001
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+51932191033" className="hover:text-primary transition-colors">
                          +51 932 191 033
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+51966424257" className="hover:text-primary transition-colors">
                          +51 966 424 257
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">
                        Correos Electrónicos
                      </h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:capacitaciones@soutrainingcenter.com" className="hover:text-primary transition-colors">
                          capacitaciones@soutrainingcenter.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:administracion@soutrainingcenter.com" className="hover:text-primary transition-colors">
                          administracion@soutrainingcenter.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">
                        Horario de Atención
                      </h4>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Sábados: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com/SOUTTrainingCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/51977959001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>

                {/* Map */}
                <div className="mt-10 rounded-2xl overflow-hidden h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0377851694086!2d-76.9301!3d-12.0744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzI3LjgiUyA3NsKwNTUnNDguNCJX!5e0!3m2!1sen!2spe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de SOUT Training Center"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                  Solicitar Cotización
                </h3>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y te contactaremos en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <Input
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo Electrónico *
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+51 999 999 999"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Curso de Interés
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecciona un curso</option>
                      <option value="manejo-defensivo">Manejo Defensivo NSC</option>
                      <option value="4x4">Manejo 4x4 Minería</option>
                      <option value="primeros-auxilios">Primeros Auxilios - RCP</option>
                      <option value="extintores">Uso de Extintores</option>
                      <option value="fatiga">Fatiga y Somnolencia</option>
                      <option value="instructores">Formación de Instructores</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      placeholder="Cuéntanos sobre tus necesidades de capacitación, cantidad de participantes, fechas preferidas..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
