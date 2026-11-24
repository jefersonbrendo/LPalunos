import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroImpulsao } from './components/HeroImpulsao';
import { ImpulsaoConteudo } from './components/ImpulsaoConteudo';
import { ProvaImpulsao, DoresImpulsao, JornadaImpulsao } from './components/ImpulsaoSecoes';
import { ParaQuemImpulsao, BonusImpulsao, OfertaImpulsao, FAQ_IMPULSAO } from './components/ImpulsaoOferta';
import { TrainerTestimonials } from './components/TrainerTestimonials';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';

export default function PaginaImpulsao() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F0E1] text-[#14110B] flex flex-col font-sans selection:bg-[#FFC60B] selection:text-[#14110B]">
      {/* 1. FAIXA FIXA NO TOPO */}
      <TopBanner />

      {/* Espaçador para compensar a faixa fixa */}
      <div className="h-9 sm:h-10" />

      {/* 2. TOPO (HERO) */}
      <HeroImpulsao />

      {/* 3. PROVA DEPOIS DO TOPO */}
      <ProvaImpulsao />

      {/* 4. DORES DE QUADRA */}
      <DoresImpulsao />

      {/* 5. JORNADA (DESAFIO 21 DIAS) */}
      <JornadaImpulsao />

      {/* 6. CONTEÚDO NO APP */}
      <ImpulsaoConteudo />

      {/* 7. PARA QUEM É */}
      <ParaQuemImpulsao />

      {/* 8. BÔNUS */}
      <BonusImpulsao />

      {/* 9. PLANOS E OFERTA */}
      <OfertaImpulsao onOpenUpsell={() => setIsUpsellModalOpen(true)} />

      {/* 10. MAIS DEPOIMENTOS DE QUEM TREINA */}
      <TrainerTestimonials
        comCta
        titulo={<>MAIS GENTE <span className="destaque">TREINANDO COM O APP</span></>}
      />

      {/* 11. GARANTIA */}
      <Guarantee />

      {/* 12. PERGUNTAS FREQUENTES */}
      <Faq itens={FAQ_IMPULSAO} />

      {/* 13. FECHAMENTO */}
      <Closing variante="impulsao" />

      {/* RODAPÉ */}
      <Footer />

      {/* 14. POP-UP (UPSELL DO PLANO BÁSICO) */}
      <UpsellModal
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
        impulsao
      />
    </div>
  );
}
