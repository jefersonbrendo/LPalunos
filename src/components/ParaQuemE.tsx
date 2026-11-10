import React from 'react';
import { scrollToPlanos } from '../utils/utm';

/**
 * "Para quem é": a pessoa se reconhece num dos perfis. O bloco "não é para"
 * deixa claro que os treinos são de areia (evita compra de quem joga quadra).
 * variante "faixa": faixa escura com checklist; "blocos": grade de blocos.
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

const Botao: React.FC = () => (
  <div className="mt-8 max-w-md mx-auto text-center">
    <button
      onClick={scrollToPlanos}
      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer uppercase border-b-4 border-[#C99A00]"
    >
      É PRA MIM, QUERO COMEÇAR
    </button>
  </div>
);

export const ParaQuemE: React.FC<{ variante?: 'faixa' | 'blocos' }> = ({ variante = 'faixa' }) => {
  if (variante === 'blocos') {
    return (
      <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
          ESSE APP É PRA <span className="destaque">VOCÊ QUE…</span>
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {PERFIS.map((p, i) => (
            <li
              key={p.titulo}
              className={`rounded-3xl p-4 sm:p-6 flex flex-col gap-2 ${
                i % 3 === 0 ? 'bg-[#14110B] text-white' : 'bg-white text-[#14110B] border border-[#E6DCC4]'
              } ${i === PERFIS.length - 1 ? 'col-span-2' : ''}`}
            >
              <span aria-hidden="true" className="text-3xl sm:text-4xl">{p.emoji}</span>
              <strong className={`text-base sm:text-xl font-black uppercase leading-tight ${i % 3 === 0 ? 'text-[#FFC60B]' : ''}`}>
                {p.titulo}
              </strong>
              <span className={`text-xs sm:text-sm leading-relaxed ${i % 3 === 0 ? 'text-white/75' : 'text-slate-600'}`}>
                {p.texto}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-center text-xs sm:text-sm text-slate-500">
          <strong className="text-slate-600">Não é para</strong> quem procura vôlei de quadra (tudo aqui é pensado para a areia) nem
          para quem quer alguém corrigindo ao vivo.
        </p>

        <Botao />
      </section>
    );
  }

  return (
    <section className="bg-[#0B2A44] text-white">
      <div className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-black tracking-tight uppercase text-balance">
          ESSE APP É PRA <span className="text-[#FFC60B]">VOCÊ QUE…</span>
        </h2>

        <ul className="mt-8 divide-y divide-white/10">
          {PERFIS.map((p) => (
            <li key={p.titulo} className="flex items-start gap-4 py-4 sm:py-5">
              <span
                aria-hidden="true"
                className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#FFC60B] text-[#14110B] font-black flex items-center justify-center"
              >
                ✓
              </span>
              <p className="min-w-0">
                <strong className="block text-xl sm:text-2xl font-black uppercase leading-tight text-[#FFC60B]">
                  {p.titulo}
                </strong>
                <span className="mt-1 block text-sm sm:text-base text-white/75 leading-relaxed">{p.texto}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
          <div className="text-[11px] font-black uppercase tracking-wider text-white/50">Não é para</div>
          <ul className="mt-2 space-y-1.5 text-sm text-white/70">
            {NAO_E.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-[#E23D2E] font-bold shrink-0">✕</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <Botao />
      </div>
    </section>
  );
};
