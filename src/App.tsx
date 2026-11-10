import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { AppPreviewCarousel } from './components/AppPreviewCarousel';
import { TrainerTestimonials } from './components/TrainerTestimonials';
import { Features } from './components/Features';
import { ParaQuemE } from './components/ParaQuemE';
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
    <div className="min-h-screen bg-[#F6F0E1] text-[#14110B] flex flex-col font-sans selection:bg-[#FFC60B] selection:text-[#14110B]">
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

      {/* 4.1 PARA QUEM É */}
      <ParaQuemE variante="faixa" />

      {/* 4.2 PARA QUEM É: opção B (teste, escolher uma das duas) */}
      <ParaQuemE variante="blocos" />

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
