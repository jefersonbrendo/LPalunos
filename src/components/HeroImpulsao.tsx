import React from 'react';
import fotoHero from '../assets/images/impulsao/impulsao-hero-areia.webp';
import { scrollToPlanos } from '../utils/utm';

const CHECKS = [
  'Treinos em casa e também na academia',
  'Do iniciante ao avançado, no seu ritmo',
  'Treino pronto de cerca de 20 minutos',
];

/** Topo da página /impulsao: público, número, prazo e preço logo na primeira tela. */
export const HeroImpulsao: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FFC60B]/15 via-[#14110B]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#14110B] text-[#FFC60B] text-xs font-black uppercase tracking-wider mb-4 shadow-md">
        🏐 Para quem joga vôlei
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14110B] leading-[1.1] max-w-3xl mx-auto text-balance">
        <span className="destaque">Aumente seu alcance</span> no salto{' '}
        <span className="underline decoration-[#FFC60B] decoration-[4px] underline-offset-6">em 21 dias</span>
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        Exercícios de salto com vídeo de cada movimento e treino pronto para ataque e bloqueio, tudo no app.
      </p>

      <div className="my-8 sm:my-10 mx-auto max-w-md">
        <img
          src={fotoHero}
          width={800}
          height={800}
          alt="Celular na mão, numa quadra de areia, com a tela de impulsão do app Código da Areia"
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto aspect-square rounded-3xl object-cover shadow-2xl block"
        />
      </div>

      <ul className="mb-6 mx-auto max-w-sm space-y-2 text-left text-sm sm:text-base font-semibold text-[#14110B]">
        {CHECKS.map((c) => (
          <li key={c} className="flex items-start gap-2">
            <span className="text-emerald-600 font-black shrink-0">✓</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C99A00]"
        >
          QUERO TREINAR MINHA IMPULSÃO
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
        <span className="flex items-center gap-1.5 text-[#14110B]">
          <span className="text-emerald-600 font-black">✓</span> ACESSO VITALÍCIO
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-[#14110B]">
          <span className="text-emerald-600 font-black">✓</span> FUNCIONA OFFLINE
        </span>
      </div>
    </section>
  );
};
