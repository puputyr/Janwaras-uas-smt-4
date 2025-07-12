import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import PasarNguterSection from "@/components/PasarNguterSection"
import SymptomChecker from "@/components/SymptomChecker"
import JamuRecommendations from "@/components/JamuRecommendations"
import RacikSendiriSection from "@/components/RacikSendiriSection"
import Login from "@/components/reg"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Login />
      <Header />
      <HeroSection />
      <PasarNguterSection />
      <SymptomChecker />
      <JamuRecommendations />
      <RacikSendiriSection />
    </div>
  );
};

export default Index;
