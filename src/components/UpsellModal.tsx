import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const checkout15Url = buildUrlWithParams(LINKS.CHECKOUT_15);
  const checkout10Url = buildUrlWithParams(LINKS.CHECKOUT_10);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white border-3 border-[#FF9F1C] p-6 sm:p-8 shadow-2xl text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar (X) no canto - mantém a pessoa na página */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar pop-up e permanecer na página"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Selo */}
        <div className="inline-block px-3.5 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] text-xs font-black uppercase tracking-wide">
          ⚠️ ESPERA, OLHA ISSO ANTES
        </div>

        {/* Título */}
        <h3 className="text-xl sm:text-2xl font-black text-[#0E4B75] font-heading mt-3 uppercase text-balance leading-tight">
          Troque o PDF pelo APP por só R$ 5 a mais
        </h3>

        {/* Texto */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-balance font-medium">
          Em vez de 100 exercícios em PDF, você leva o app com os 240, do iniciante ao avançado, e os 5 bônus.
        </p>

        {/* Preço */}
        <div className="my-4 p-3.5 rounded-2xl bg-[#F7F4EE] border border-[#E2DBC9] inline-block w-full">
          <span className="text-xs text-slate-500 font-bold block">
            Plano Completo de <span className="line-through text-slate-400">R$ 24</span> por apenas:
          </span>
          <div className="flex items-baseline justify-center gap-1.5 mt-0.5">
            <span className="text-3xl sm:text-4xl font-black text-[#FF4A3F] font-heading">
              R$ 15
            </span>
            <span className="text-xs text-slate-600 font-bold">pagamento único</span>
          </div>
        </div>

        {/* Lista resumida com tudo o que o plano de 24 tem */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F0] border border-[#E2DBC9] text-left space-y-2 mb-5">
          <div className="text-[11px] font-black uppercase tracking-wider text-[#0E4B75] pb-1 border-b border-[#E2DBC9]">
            Tudo o que você recebe nesta oferta especial:
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
            <span className="text-emerald-600 font-bold shrink-0">✅</span>
            <span><strong>App no Celular:</strong> todos os 240 exercícios da areia (do iniciante ao avançado)</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
            <span className="text-emerald-600 font-bold shrink-0">✅</span>
            <span><strong>Diagramas e Filtros:</strong> escolha por fundamento, nível e número de alunos</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-[#D97706] font-bold">
            <span className="shrink-0">🎁</span>
            <span><strong>Todos os 5 Bônus inclusos:</strong> Planejamento, 30 Aulas, Turma Mista, 12 Semanas e Ficha de Evolução (R$ 305 grátis)</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
            <span className="text-emerald-600 font-bold shrink-0">✅</span>
            <span><strong>Acesso Vitalício:</strong> novos treinos entram no app + 7 dias de garantia</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-700 font-bold">
            <span className="shrink-0">💬</span>
            <span><strong>Suporte Direto:</strong> atendimento exclusivo no WhatsApp</span>
          </div>
        </div>

        {/* Botão principal (grande, cor de destaque: Coral) */}
        <a
          href={checkout15Url}
          className="block w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta uppercase border-b-4 border-[#C92A20] cursor-pointer"
        >
          SIM, QUERO OS 240 POR R$ 15
        </a>

        {/* Link de texto pequeno, sem cara de botão */}
        <div className="mt-4">
          <a
            href={checkout10Url}
            className="text-[11px] sm:text-xs text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer font-medium"
          >
            Não, quero só o básico de R$ 10
          </a>
        </div>
      </div>
    </div>
  );
};
