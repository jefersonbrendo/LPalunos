import React from 'react';
import { scrollToPlanos } from '../utils/utm';
import bonus01 from '../assets/images/bonus-01-planejamento.webp';
import bonus02 from '../assets/images/bonus-02-aulas.webp';
import bonus03 from '../assets/images/bonus-03-turma-mista.webp';
import bonus04 from '../assets/images/bonus-04-evolucao.webp';
import bonus05 from '../assets/images/bonus-05-ficha.webp';

interface BonusItem {
  numberString: string;
  name: string;
  desc: string;
  originalPrice: string;
  isNew?: boolean;
  icon: string;
  image?: string;
  shortName: string;
}

const BONUSES: BonusItem[] = [
  {
    numberString: '01',
    name: 'Planejamento Semanal da Areia',
    shortName: 'Planejamento semanal',
    desc: 'Saiba qual fundamento trabalhar em cada dia da semana, separado por nível da turma.',
    originalPrice: 'R$ 67',
    icon: '📅',
    image: bonus01,
  },
  {
    numberString: '02',
    name: 'Aulas Montadas: 30 aulas de 1 hora',
    shortName: '30 aulas montadas',
    desc: 'Do aquecimento ao jogo final, na sequência certa. É só abrir e seguir.',
    originalPrice: 'R$ 47',
    icon: '📋',
    image: bonus02,
  },
  {
    numberString: '03',
    name: 'Turma Mista e Aula Particular',
    shortName: 'Turma mista e particular',
    desc: 'Ajuste cada exercício ao nível e ao número de alunos, de 1 aluno até a turma cheia.',
    originalPrice: 'R$ 37',
    icon: '👥',
    image: bonus03,
  },
  {
    numberString: '04',
    name: 'Plano de Evolução de 12 Semanas',
    shortName: 'Plano de 12 semanas',
    desc: 'Um caminho pronto para levar a turma do fundamento ao jogo, semana a semana.',
    originalPrice: 'R$ 97',
    isNew: true,
    icon: '🚀',
    image: bonus04,
  },
  {
    numberString: '05',
    name: 'Ficha de Evolução do Aluno',
    shortName: 'Ficha de evolução',
    desc: 'Avalie cada aluno por fundamento e mostre para ele o quanto já melhorou.',
    originalPrice: 'R$ 57',
    isNew: true,
    icon: '📈',
    image: bonus05,
  },
];

export const Bonuses: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 px-4 bg-[#0B2A44] overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-[#FF9F1C]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Selo */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FF9F1C] text-[#0B2A44] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
          ⭐ BÔNUS EXCLUSIVOS
        </div>

        {/* Título */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
          LEVE HOJE <span className="text-[#FFC145]">+ 5 BÔNUS</span> GRÁTIS
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-medium">
          Tudo o que fecha a sua rotina de professor, do planejamento da semana à evolução de cada aluno.
        </p>

        {/* Lista de bônus */}
        <div className="mt-8 space-y-3 text-left">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.numberString}
              className="relative flex items-stretch gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#FFC145]/60 transition-colors"
            >
              {/* Bloco do número / capa */}
              {bonus.image ? (
                <div className="shrink-0 w-[72px] sm:w-[88px] rounded-xl overflow-hidden shadow-lg bg-[#FFC145]">
                  <img
                    src={bonus.image}
                    width={300}
                    height={435}
                    alt={`Capa do bônus ${bonus.numberString}: ${bonus.name}`}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-full object-cover object-center"
                  />
                </div>
              ) : (
              <div className="shrink-0 w-[72px] sm:w-[88px] rounded-xl bg-gradient-to-br from-[#FFC145] to-[#FF9F1C] flex flex-col items-center justify-center text-[#0B2A44] shadow-lg">
                <span className="text-2xl sm:text-3xl leading-none">{bonus.icon}</span>
                <span className="mt-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                  Bônus {bonus.numberString}
                </span>
              </div>
              )}

              {/* Texto */}
              <div className="flex-1 min-w-0 py-0.5">
                {bonus.isNew && (
                  <span className="inline-block mb-1 text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white px-2 py-0.5 rounded-full">
                    Novo
                  </span>
                )}
                <h3 className="text-[15px] sm:text-lg font-extrabold text-white leading-snug">
                  {bonus.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {bonus.desc}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 line-through">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wide bg-emerald-400 text-[#0B2A44] px-2 py-0.5 rounded-md">
                    Hoje grátis
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total em formato de "comprovante" */}
        <div className="mt-8 rounded-2xl bg-white text-left shadow-xl overflow-hidden">
          <div className="px-5 pt-5 pb-3 space-y-1.5 text-sm">
            {BONUSES.map((bonus) => (
              <div key={bonus.numberString} className="flex justify-between gap-3 text-slate-600">
                <span className="truncate">Bônus {bonus.numberString} · {bonus.shortName}</span>
                <span className="shrink-0 font-semibold">{bonus.originalPrice}</span>
              </div>
            ))}
          </div>
          <div className="mx-5 border-t-2 border-dashed border-slate-200" />
          <div className="px-5 py-4 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0E4B75]">
              Valor total dos bônus
            </span>
            <span className="text-right">
              <span className="block text-sm font-bold text-slate-400 line-through">R$ 305</span>
              <span className="block text-2xl sm:text-3xl font-black text-emerald-600 leading-none">R$ 0,00</span>
            </span>
          </div>
        </div>

        {/* Botão */}
        <div className="mt-6 space-y-2">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
          >
            QUERO OS 5 BÔNUS JUNTO
          </button>
          <div className="text-xs sm:text-sm font-bold text-slate-300 flex items-center justify-center gap-4 pt-1">
            <span>⚡ Acesso imediato</span>
            <span className="text-slate-500">|</span>
            <span>♾️ Vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
};
