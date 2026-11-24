import React from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroImpulsao } from './components/HeroImpulsao';
import { ProvaImpulsao, DoresImpulsao, JornadaImpulsao } from './components/ImpulsaoSecoes';
import { ImpulsaoConteudo } from './components/ImpulsaoConteudo';
import { ParaQuemImpulsao, BonusImpulsao, OfertaImpulsao, FAQ_IMPULSAO } from './components/ImpulsaoOferta';
import { Guarantee } from './components/Guarantee';
import { TrainerTestimonials } from './components/TrainerTestimonials';
import { Faq } from './components/Faq';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

/**
 * Página /impulsao: landing própria para os criativos de impulsão.
 * Ordem modelada nas páginas de impulsão validadas (Salte Mais, Programa Jump, Plano Futevôlei):
 * topo → prova → dores → caminho → como recebe → para quem é → bônus → garantia → oferta única
 * → mais prova com botão → FAQ de impulsão → fechamento.
 */
export default function PaginaImpulsao() {
  return (
    <div className="min-h-screen bg-[#F6F0E1] text-[#14110B] flex flex-col font-sans selection:bg-[#FFC60B] selection:text-[#14110B]">
      <TopBanner />
      <div className="h-9 sm:h-10" />

      <HeroImpulsao />
      <ProvaImpulsao />
      <DoresImpulsao />
      <JornadaImpulsao />
      <ImpulsaoConteudo />
      <ParaQuemImpulsao />
      <BonusImpulsao />
      <Guarantee />
      <OfertaImpulsao />
      <TrainerTestimonials comCta titulo={<>MAIS GENTE <span className="destaque">TREINANDO COM O APP</span></>} />
      <Faq itens={FAQ_IMPULSAO} />
      <Closing variante="impulsao" />
      <Footer />
    </div>
  );
}
