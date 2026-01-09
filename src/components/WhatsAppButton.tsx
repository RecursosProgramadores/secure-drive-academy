import { Phone } from "lucide-react";
import whatsappIcon from "@/assets/wstp.svg";

const FloatingContactButtons = () => {
  const whatsappNumber = "51977959001";
  const phoneNumber = "+51977959001";
  const message = "Hola, me interesa conocer más sobre sus cursos de capacitación.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Phone Button - Left Side */}
      <div className="fixed bottom-6 left-6 z-50 group">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
          aria-label="Llamar ahora"
        >
          <Phone className="w-7 h-7" />
        </a>
        {/* Tooltip */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-xl">
            Llamar ahora
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button - Right Side */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
          aria-label="Contactar por WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
        </a>
        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-xl">
            ¿Necesitas ayuda?
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingContactButtons;
