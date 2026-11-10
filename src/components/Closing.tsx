import React from 'react';
import { scrollToPlanos } from '../utils/utm';

export const Closing: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-[#EDE5D2]/60 text-center border-t border-[#E6DCC4]">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Título */}
        <h2 className="text-3xl sm:text-5xl font-black text-[#14110B] tracking-tight uppercase font-heading text-balance">
          SEU PRÓXIMO TREINO <span className="destaque">JÁ PODE ESTAR PRONTO</span>
        </h2>

        {/* Texto */}
        <p className="text-base sm:text-xl text-slate-700 font-semibold">
          +420 treinos de vôlei de praia no seu celular, para treinar na areia e em casa.
        </p>

        {/* Botão */}
        <div className="pt-4 max-w-md mx-auto">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#E23D2E] via-[#D63426] to-[#E23D2E] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-2xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#A8261B]"
          >
            QUERO MEUS TREINOS AGORA
          </button>
        </div>

        {/* Abaixo */}
        <div className="pt-2 text-xs sm:text-sm font-bold text-slate-600">
          Acesso imediato • 7 dias de garantia
        </div>
      </div>
    </section>
  );
};
