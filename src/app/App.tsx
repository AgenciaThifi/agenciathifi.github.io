import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import ClientsCarousel from '@/app/components/ClientsCarousel';
import AboutUs from '@/app/components/AboutUs';
import OurDifferential from '@/app/components/OurDifferential';
import SocialProof from '@/app/components/SocialProof';
import HowItWorks from '@/app/components/HowItWorks';
import Services from '@/app/components/Services';
import Team from '@/app/components/Team';
import Footer from '@/app/components/Footer';
import FloatingChatbot from '@/app/components/FloatingChatbot';
import PetAvatar from '@/app/components/PetAvatar';

export default function App() {
  // Altere para true se quiser mostrar a seção de Time
  const showTeamSection = false;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <AboutUs />
      <OurDifferential />
      <SocialProof />
      <HowItWorks />
      <Services />
      <Team show={showTeamSection} />
      <Footer />
      <FloatingChatbot />
    </div>
  );
}