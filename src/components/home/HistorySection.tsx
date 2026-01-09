import heroImage from "@/assets/historial.jpeg";
import nscLogo from "@/assets/nsc-menu.png";
import marcaLogo from "@/assets/ccl.png";
import saegLogo from "@/assets/hodelpe.jpg";

const HistorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              SOUT S.A.C. (SOUT TRAINING CENTER)
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Somos un centro de entrenamiento, dedicada a la capacitación y certificación de operadores y conductores de equipos, en temas relacionados al Manejo Defensivo y Seguridad y Salud en el Trabajo.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ayudamos a empresas a reducir estadísticas de accidentes viales, diseñando estrategias y capacitaciones específicas de Manejo Defensivo, Certificadas por el NSC, acorde a las condiciones y factores reales de trabajo, en operaciones mineras, petroleras e industria en general.
              Contamos con profesionales, especialistas en Manejo Defensivo, Seguridad y Salud en el Trabajo y Primeros Auxilios. Orientamos la formación de conductores y operadores a Gestionar las 3 condiciones de manejo: el Conductor Como Persona, El equipo o vehículo como herramienta de trabajo e interactuar con las condiciones que nos rodean.
            </p>
            <div className="flex gap-6 md:gap-8 items-center">
              <img src={nscLogo} alt="NSC USA" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
              <img src={saegLogo} alt="Hodelpe" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
              <img src={marcaLogo} alt="CCL" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
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
