import { Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PasarNguterSection from "@/components/PasarNguterSection";
import SymptomChecker from "@/components/SymptomChecker";
import JamuRecommendations from "@/components/JamuRecommendations";
import RacikSendiriSection from "@/components/RacikSendiriSection";
import Login from "@/components/reg";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => (
<div className="min-h-screen bg-background">
  <Login />
</div>
);

const BerandaPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <PasarNguterSection />
  </div>
);

const RekomendasiPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <SymptomChecker />
  </div>
);

const JamMarketPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <JamuRecommendations />
  </div>
);

const RacikDewePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <RacikSendiriSection />
  </div>
);
const Index = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/beranda" element={<BerandaPage />} />
      <Route path="/rekomendasi" element={<RekomendasiPage />} />
      <Route path="/jammarket" element={<JamMarketPage />} />
      <Route path="/racikdewe" element={<RacikDewePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
