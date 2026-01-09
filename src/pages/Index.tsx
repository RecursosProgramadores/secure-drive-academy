import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import ServicesSection from "@/components/home/ServicesSection";
import HistorySection from "@/components/home/HistorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ClientsMarquee from "@/components/home/ClientsMarquee";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <ServicesSection />
        <HistorySection />
        <TestimonialsSection />
        <CTASection />
        <ClientsMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
