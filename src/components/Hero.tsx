import React from 'react';
import heroImg from '../assets/images/hero/app-na-areia.webp';
import { scrollToPlanos } from '../utils/utm';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background subtle coastal atmosphere glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FFC60B]/10 via-[#14110B]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14110B] leading-[1.1] max-w-3xl mx-auto text-balance">
        <span className="destaque">+420</span> treinos de vôlei para evoluir em{' '}
        <span className="underline decoration-[#FFC60B] decoration-[4px] underline-offset-6 text-[#14110B]">
          15 dias
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        Com vídeo de cada movimento, do primeiro toque à impulsão do ataque, organizados por nível num aplicativo.
      </p>

      {/* Foto do app na quadra de areia */}
      <div className="my-8 sm:my-10 max-w-[420px] sm:max-w-[480px] mx-auto">
        <img
          src={heroImg}
          width={800}
          height={800}
          alt="Celular com o app Código da Areia aberto na lista de treinos com bola, numa quadra de vôlei de praia"
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto aspect-square rounded-3xl object-cover shadow-2xl block"
        />
      </div>

      {/* Primary CTA Button (Coral Fluorescente de Alta Conversão) */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C99A00]"
        >
          QUERO OS +420 TREINOS NO MEU CELULAR
        </button>
      </div>

      {/* Badges / Selos lado a lado */}
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
