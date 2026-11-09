import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { AppPreviewCarousel } from './components/AppPreviewCarousel';
import { TrainerTestimonials } from './components/TrainerTestimonials';
import { Features } from './components/Features';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';

export default function App() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F172A] flex flex-col font-sans selection:bg-[#FF9F1C] selection:text-white">
      {/* 1. FAIXA FIXA NO TOPO */}
      <TopBanner />

      {/* Espaçador para compensar a faixa fixa */}
      <div className="h-9 sm:h-10" />

      {/* 2. TOPO (HERO) */}
      <Hero />

      {/* 3. PRÉVIA DO APP */}
      <AppPreviewCarousel />

      {/* 3.1 DEPOIMENTOS DE TREINADORES (prints reais) */}
      <TrainerTestimonials />

      {/* 4. TUDO QUE VOCÊ VAI RECEBER */}
      <Features />

      {/* 5. BÔNUS */}
      <Bonuses />

      {/* 6. PLANOS (id="planos") */}
      <Pricing onOpenUpsell={() => setIsUpsellModalOpen(true)} />

      {/* 7. DEPOIMENTOS (oculto com display:none conforme solicitado) */}
      <Testimonials />

      {/* 8. GARANTIA */}
      <Guarantee />

      {/* 9. PERGUNTAS FREQUENTES */}
      <Faq />

      {/* 10. FECHAMENTO */}
      <Closing />

      {/* RODAPÉ */}
      <Footer />

      {/* 11. POP-UP (UPSELL DO PLANO BÁSICO) */}
      <UpsellModal
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
      />
    </div>
  );
}
