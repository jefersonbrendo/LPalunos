import React from 'react';
import { scrollToPlanos } from '../utils/utm';

/**
 * "Para quem é": a pessoa se reconhece num dos perfis. O bloco "não é para"
 * deixa claro que os treinos são de areia (evita compra de quem joga quadra).
 */
const PERFIS = [
  { emoji: '🌱', titulo: 'Está começando', texto: 'e quer aprender os fundamentos do jeito certo, desde o primeiro toque.' },
  { emoji: '🏐', titulo: 'Joga com a galera', texto: 'e quer parar de ser o alvo do saque e o elo fraco da dupla.' },
  { emoji: '🏠', titulo: 'Não tem quadra nem parceiro todo dia', texto: 'e quer continuar treinando em casa, até na parede.' },
  { emoji: '🔥', titulo: 'Já joga, mas travou', texto: 'e quer sair do mesmo treino de sempre, com desafios do seu nível.' },
  { emoji: '📋', titulo: 'Dá aula', texto: 'e quer treino pronto, escolhido pelo número de pessoas e pelo nível da turma.' },
];

const NAO_E = [
  'Quem procura treino de vôlei de quadra: aqui tudo é pensado para a areia.',
  'Quem quer acompanhamento individual, com alguém corrigindo ao vivo.',
];

export const ParaQuemE: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
          PARA QUEM <span className="destaque">É O APP</span>
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Se você se encaixa em pelo menos um desses, o app foi feito para você.
        </p>
      </div>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {PERFIS.map((p) => (
          <li
            key={p.titulo}
            className="flex items-start gap-3.5 rounded-2xl bg-white border border-[#E6DCC4] p-4 sm:p-5 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="shrink-0 w-12 h-12 rounded-xl bg-[#FFF3C4] text-2xl flex items-center justify-center"
            >
              {p.emoji}
            </span>
            <p className="min-w-0 text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong className="block mb-1 text-lg sm:text-xl font-black text-[#14110B] leading-tight"><span className="destaque">{p.titulo}</span></strong>
              {p.texto}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-dashed border-[#D9CDB0] bg-[#EDE5D2]/60 p-4 sm:p-5">
        <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">Não é para</div>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
          {NAO_E.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 max-w-md mx-auto text-center">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer uppercase border-b-4 border-[#C99A00]"
        >
          É PRA MIM, QUERO COMEÇAR
        </button>
      </div>
    </section>
  );
};
