import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <div className="rounded-3xl bg-white border border-[#E2DBC9] p-6 sm:p-10 shadow-lg relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F1C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
          {/* Selo grande */}
          <div className="shrink-0 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#E07D00] via-[#FF9F1C] to-[#FFB74D] text-slate-950 p-2 shadow-xl border-4 border-white ring-4 ring-[#FF9F1C]/30">
            <ShieldCheck className="w-10 h-10 sm:w-14 sm:h-14 stroke-[2.2]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-tight text-center leading-tight mt-0.5">
              GARANTIA<br />7 DIAS
            </span>
          </div>

          {/* Texto principal */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E4B75] font-heading uppercase">
              TESTE NA AREIA POR 7 DIAS
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Aplique os exercícios nas suas aulas durante 7 dias. Se não servir para a sua turma, devolvemos 100% do valor. Sem burocracia e sem perguntas.
            </p>
          </div>
        </div>

        {/* Bloco ao lado/abaixo: Pagamento 100% seguro */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left bg-[#F7F4EE] p-4 rounded-2xl border border-[#E2DBC9]">
          <div className="w-10 h-10 rounded-full bg-[#0E4B75] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-[#0E4B75] flex items-center justify-center sm:justify-start gap-1.5">
              <span>🔒 Pagamento 100% seguro</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
              Seus dados ficam protegidos do início ao fim da compra.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
