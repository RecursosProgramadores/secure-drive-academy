import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/noosotros.png";

const HistorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SOUT Training Center fue fundado por profesionales con amplia experiencia 
              en el sector de seguridad vial y manejo defensivo, en respuesta a las 
              crecientes necesidades de capacitación especializada para los sectores 
              de alto riesgo en Perú.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desde nuestros inicios, nos hemos comprometido con la excelencia, 
              obteniendo certificaciones internacionales del National Safety Council 
              (NSC) de Estados Unidos y homologaciones de Hodelpe, convirtiéndonos 
              en un referente nacional en capacitación de seguridad vial.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-heading font-semibold text-sm">NSC USA</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-heading font-semibold text-sm">Hodelpe</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-heading font-semibold text-sm">CCL</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Equipo de trabajo SOUT"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="font-heading text-4xl font-black">10+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
