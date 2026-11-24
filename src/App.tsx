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
import { HeroImpulsao } from './components/HeroImpulsao';
import { ImpulsaoConteudo } from './components/ImpulsaoConteudo';
import { ProvaImpulsao, DoresImpulsao, JornadaImpulsao } from './components/ImpulsaoSecoes';
import { FAQ_IMPULSAO } from './components/Faq';

/** variante 'impulsao' = página /impulsao, para quem chega pelos criativos de impulsão. */
export default function App({ variante }: { variante?: 'impulsao' } = {}) {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const impulsao = variante === 'impulsao';

  return (
    <div className="min-h-screen bg-[#F6F0E1] text-[#14110B] flex flex-col font-sans selection:bg-[#FFC60B] selection:text-[#14110B]">
      {/* 1. FAIXA FIXA NO TOPO */}
      <TopBanner />

      {/* Espaçador para compensar a faixa fixa */}
      <div className="h-9 sm:h-10" />

      {/* 2. TOPO (HERO) */}
      {impulsao ? (
        <>
          <HeroImpulsao />
          {/* Estrutura das páginas de impulsão validadas: prova → dores → jornada → como recebe */}
          <ProvaImpulsao />
          <DoresImpulsao />
          <JornadaImpulsao />
          <ImpulsaoConteudo />
        </>
      ) : (
        <Hero />
      )}

      {/* 3. PRÉVIA DO APP */}
      <AppPreviewCarousel />

      {/* 3.1 PARA QUEM É */}
      <ParaQuemE />

      {/* 3.1 DEPOIMENTOS (prints reais). Na /impulsao eles vão para depois dos planos. */}
      {!impulsao && <TrainerTestimonials />}

      {/* 4. TUDO QUE VOCÊ VAI RECEBER */}
      <Features />



      {/* 5. BÔNUS */}
      <Bonuses />

      {/* 6. PLANOS (id="planos") */}
      <Pricing onOpenUpsell={() => setIsUpsellModalOpen(true)} />

      {/* 6.1 PROVA DEPOIS DO PREÇO, com botão de volta para os planos (só na /impulsao) */}
      {impulsao && (
        <TrainerTestimonials
          comCta
          titulo={<>MAIS GENTE <span className="destaque">TREINANDO COM O APP</span></>}
        />
      )}

      {/* 7. DEPOIMENTOS (oculto com display:none conforme solicitado) */}
      <Testimonials />

      {/* 8. GARANTIA */}
      <Guarantee />

      {/* 9. PERGUNTAS FREQUENTES */}
      <Faq extras={impulsao ? FAQ_IMPULSAO : undefined} />

      {/* 10. FECHAMENTO */}
      <Closing variante={variante} />

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
