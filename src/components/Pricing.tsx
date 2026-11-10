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
        <h2 className="text-3xl sm:text-5xl font-black text-[#14110B] tracking-tight uppercase">
          ESCOLHA <span className="destaque">SEU ACESSO</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
          Pagamento único • Acesso imediato
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
        
        {/* ================= CARD BÁSICO ================= */}
        <div className="order-2 md:order-1 rounded-3xl bg-white border border-[#E6DCC4] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <span className="inline-block mb-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              📄 VERSÃO PDF
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Acesso Essencial
            </div>
            <h3 className="text-2xl font-black text-[#14110B] font-heading mt-1">
              BÁSICO
            </h3>

            {/* Price */}
            <div className="mt-4 pb-4 border-b border-slate-200">
              <span className="text-xs text-slate-400 line-through block font-medium">
                De R$ 47
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-slate-600">por</span>
                <span className="text-3xl sm:text-4xl font-black text-[#14110B] font-heading">
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
                <span>Exercícios separados por fundamento</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Acesso vitalício + garantia de 7 dias</span>
              </li>

              {/* Disabled / Strikethrough items */}
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>App no celular com +420 treinos</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Ataque, bloqueio, defesa e levantamento</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Nível avançado</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>195 treinos para fazer em casa</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 line-through">
                <span className="text-rose-400 font-bold shrink-0">❌</span>
                <span>Treinos para fazer sozinho, em dupla ou com a galera</span>
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
              className="w-full py-4 px-6 rounded-2xl bg-[#14110B] hover:bg-[#2A251A] text-white font-bold text-sm sm:text-base tracking-wide transition-all active:scale-[0.98] cursor-pointer shadow-md"
            >
              COMEÇAR COM O BÁSICO
            </button>

            {/* Destaque abaixo do card básico */}
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-[#B87500] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A] inline-block">
                +R$ 14 e leve o APP com +420 treinos + 5 bônus
              </span>
            </div>
          </div>
        </div>

        {/* ================= CARD COMPLETO ================= */}
        <div className="order-1 md:order-2 rounded-3xl bg-white border-3 border-[#FFC60B] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(255,198,11,0.22)] relative md:-translate-y-2">
          
          {/* Selo no topo */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#FFC60B] via-[#F5A300] to-[#FFC60B] text-slate-950 text-xs sm:text-sm font-black uppercase px-4 py-1 rounded-full shadow-md border border-[#F5A300]/40 flex items-center gap-1 whitespace-nowrap">
              ⭐ MAIS ESCOLHIDO
            </span>
          </div>

          <div>
            <span className="inline-block mt-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-[#FFF3C4] text-[#14110B] border border-[#FFC60B]">
              📲 VERSÃO APP
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B87500] mt-2">
              Experiência Total
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#14110B] font-heading mt-0.5">
              CÓDIGO DA AREIA COMPLETO
            </h3>

            {/* Preço */}
            <div className="mt-4 pb-4 border-b border-amber-200">
              <span className="text-xs text-slate-400 line-through block font-medium">
                De R$ 97
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-[#14110B]">por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-[#E23D2E] font-heading">
                  R$ 24
                </span>
                <span className="text-xs text-slate-600 font-medium">à vista</span>
              </div>
            </div>

            {/* Features list */}
            <ul className="mt-6 space-y-2 text-xs sm:text-sm text-left">
              <li className="flex items-start gap-2 text-slate-950 font-bold">
                <span className="text-[#FFC60B] font-bold shrink-0">✅</span>
                <span>App no celular com +420 treinos de vôlei de praia</span>
              </li>
              <li className="flex items-start gap-2 text-slate-950 font-bold">
                <span className="text-[#FFC60B] font-bold shrink-0">✅</span>
                <span>240 treinos na areia, do primeiro toque à impulsão do ataque</span>
              </li>
              <li className="flex items-start gap-2 text-slate-950 font-bold">
                <span className="text-[#FFC60B] font-bold shrink-0">✅</span>
                <span>+200 treinos para fazer em casa, sem precisar de quadra</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Treinos de saque, recepção, levantamento, ataque, bloqueio e defesa</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Vídeo do movimento em cada exercício</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Erro mais comum e pontos de atenção em cada treino</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Do iniciante ao avançado, com versão mais fácil e mais difícil</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Para treinar sozinho, em dupla ou com a galera</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Funciona offline, direto na areia</span>
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-bold shrink-0">✅</span>
                <span>Treinos novos entram direto no app</span>
              </li>
              <li className="flex items-start gap-2 text-[#B87500] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 1: Plano de Evolução em 30 Dias (R$ 67)</span>
              </li>
              <li className="flex items-start gap-2 text-[#B87500] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 2: Treinos Prontos para Seguir (R$ 47)</span>
              </li>
              <li className="flex items-start gap-2 text-[#B87500] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 3: Treino em Casa, +195 exercícios (R$ 37)</span>
              </li>
              <li className="flex items-start gap-2 text-[#B87500] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 4: Jogos para Treinar com a Galera (R$ 27)</span>
              </li>
              <li className="flex items-start gap-2 text-[#B87500] font-bold">
                <span className="shrink-0">🎁</span>
                <span>Bônus 5: Tracker de Evolução Semanal Integrado (R$ 27)</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-700 font-bold">
                <span className="shrink-0">💬</span>
                <span>Suporte direto no WhatsApp</span>
              </li>
              <li className="flex items-start gap-2 text-[#14110B] font-black">
                <span className="shrink-0">⚡</span>
                <span>Acesso vitalício + garantia de 7 dias</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            {/* Botão de compra direto para LINK_CHECKOUT_24 */}
            <a
              href={checkout24Url}
              className="block w-full text-center py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta uppercase border-b-4 border-[#C99A00]"
            >
              QUERO OS +420 TREINOS
            </a>

            {/* Abaixo do botão: Economia real de R$ 205 */}
            <div className="mt-2.5 text-center text-xs font-black text-emerald-800 bg-emerald-50 py-1 px-3 rounded-full border border-emerald-200">
              Economia real de R$ 205
            </div>

            <div className="mt-3 text-center text-xs text-slate-500 font-medium space-y-1">
              <div className="flex items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1 text-slate-600">
                  <span>🔒</span> Compra segura
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 text-slate-600">
                  <span>🛡️</span> Privacidade
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 flex items-center justify-center pt-0.5">
                Acesso enviado por e-mail e whatsapp após a compra
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
