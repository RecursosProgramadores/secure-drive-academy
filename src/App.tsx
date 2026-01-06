import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import FloatingContactButtons from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-de-uso" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingContactButtons />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
