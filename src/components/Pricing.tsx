import React from 'react';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

interface PricingProps {
  onOpenUpsell: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenUpsell }) => {
  const checkout24Url = buildUrlWithParams(LINKS.CHECKOUT_24);

  return (
    <section id="planos" className="py-14 sm:py-20 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-[#0E4B75] tracking-tight uppercase">
          ESCOLHA SEU ACESSO
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
          Pagamento único • Acesso imediato
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
        
        {/* ================= CARD BÁSICO ================= */}
        <div className="order-2 md:order-1 rounded-3xl bg-white border border-[#E2DBC9] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <span className="inline-block mb-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              📄 VERSÃO PDF
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Acesso Essencial
            </div>
            <h3 className="text-2xl font-black text-[#0E4B75] font-heading mt-1">
              BÁSICO
            </h3>

            {/* Price */}
            <div className="mt-4 pb-4 border-b border-slate-200">
              <span className="text-xs text-slate-400 line-through block font-medium">
                De R$ 47
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-slate-600">por</span>
                <span className="text-3xl sm:text-4xl font-black text-[#0E4B75] font-heading">
                  R$ 10
                </span>
                <span className="text-[11px] text-slate-500 font-medium">à vista</span>
              </div>
            </div>

            {/* Features list */}
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-left">
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>+100 exercícios em PDF: 40 de manchete, 35 de toque e 30 de saque</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Código da Areia em cada exercício</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Acesso vitalício + garantia de 7 dias</span>
              </li>

              {/* Disabled / Strikethrough items */}
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>App no celular, com filtro por nível e número de alunos</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Ataque, bloqueio, defesa e side-out</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Nível avançado</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Jogos reduzidos e aquecimentos</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Bônus exclusivos</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            {/* Botão abre o Pop-up (Seção 11) */}
            <button
              onClick={onOpenUpsell}
              className="w-full py-4 px-6 rounded-2xl bg-[#0E4B75] hover:bg-[#093554] text-white font-bold text-sm sm:text-base tracking-wide transition-all active:scale-[0.98] cursor-pointer shadow-md"
            >
              COMEÇAR COM O BÁSICO
            </button>

            {/* Destaque abaixo do card básico */}
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-[#C27803] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A] inline-block">
                +R$ 14 e leve o APP com os 240 exercícios + 5 bônus
              </span>
            </div>
          </div>
        </div>

        {/* ================= CARD COMPLETO ================= */}
        <div className="order-1 md:order-2 rounded-3xl bg-white border-3 border-[#FF9F1C] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(255,159,28,0.22)] relative md:-translate-y-2">
          
          {/* Selo no topo */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#FF9F1C] via-[#F58F00] to-[#FF9F1C] text-slate-950 text-xs sm:text-sm font-black uppercase px-4 py-1 rounded-full shadow-md border border-[#E07D00]/40 flex items-center gap-1 whitespace-nowrap">
              ⭐ MELHOR OFERTA
            </span>
          </div>

          <div>
            <span className="inline-block mt-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">
              📲 VERSÃO APP
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF9F1C] mt-2">
              Experiência Total
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0E4B75] font-heading mt-0.5">
              MÉTODO CÓDIGO DA AREIA COMPLETO
            </h3>

            {/* Preço */}
            <div className="mt-4 pb-4 border-b border-amber-200">
              <span className="text-xs text-slate-400 line-through block font-medium">
                De R$ 97
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-[#0E4B75]">por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-[#FF4A3F] font-heading">
                  R$ 24
                </span>
                <span className="text-xs text-slate-600 font-medium">à vista</span>
              </div>
            </div>

            {/* Features list */}
            <ul className="mt-6 space-y-2 text-xs sm:text-sm text-left">
              <li className="flex items-start gap-2 text-slate-950 font-bold">
                <span className="text-[#FF9F1C] font-bold shrink-0">✅</span>
                <span>App no celular: escolha o exercício pelo nível e pelo número de alunos</span>
              </li>
              <li className="flex items-start gap-2 text-slate-950 font-bold">
                <span className="text-[#FF9F1C] font-bold shrink-0">✅</span>
                <span>240 exercícios de vôlei de praia prontos para aplicar</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Feitos para a areia, sem adaptação de treino de quadra</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Código da Areia em cada exercício: nível, fundamento e nº de alunos</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Do iniciante ao avançado</span>
              </li>

              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Exercícios novos entram direto no app</span>
              </li>
              <li className="flex items-start gap-2 text-[#D97706] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 1: Planejamento Semanal da Areia (R$ 67)</span>
              </li>
              <li className="flex items-start gap-2 text-[#D97706] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 2: 30 Aulas Montadas de 1 hora (R$ 47)</span>
              </li>
              <li className="flex items-start gap-2 text-[#D97706] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 3: Guia Turma Mista e Aula Particular (R$ 37)</span>
              </li>
              <li className="flex items-start gap-2 text-[#D97706] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 4: Plano de Evolução de 12 Semanas (R$ 97)</span>
              </li>
              <li className="flex items-start gap-2 text-[#D97706] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 5: Ficha de Evolução do Aluno (R$ 57)</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-700 font-bold">
                <span className="shrink-0">💬</span>
                <span>Suporte direto no WhatsApp</span>
              </li>
              <li className="flex items-start gap-2 text-[#0E4B75] font-black">
                <span className="shrink-0">⚡</span>
                <span>Acesso vitalício + garantia de 7 dias</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            {/* Botão de compra direto para LINK_CHECKOUT_24 */}
            <a
              href={checkout24Url}
              className="block w-full text-center py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta uppercase border-b-4 border-[#C92A20]"
            >
              QUERO OS 240 EXERCÍCIOS
            </a>

            {/* Abaixo do botão: Economia real de R$ 305 */}
            <div className="mt-2.5 text-center text-xs font-black text-emerald-800 bg-emerald-50 py-1 px-3 rounded-full border border-emerald-200">
              Economia real de R$ 305
            </div>

            <div className="mt-2 text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5">
              <span>🔒 Compra 100% segura • 7 dias de garantia</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
