import React from 'react';
import { scrollToPlanos } from '../utils/utm';

/**
 * "Para quem é": blocos em grade (alternando escuro e claro) para a pessoa
 * se reconhecer num dos perfis.
 */
const PERFIS = [
  { emoji: '🌱', titulo: 'Está começando', texto: 'e quer aprender os fundamentos do jeito certo, desde o primeiro toque.' },
  { emoji: '🏐', titulo: 'Joga com a galera', texto: 'e quer parar de ser o alvo do saque e o elo fraco da dupla.' },
  { emoji: '🏠', titulo: 'Não tem quadra nem parceiro todo dia', texto: 'e quer continuar treinando em casa, até na parede.' },
  { emoji: '🔥', titulo: 'Já joga, mas travou', texto: 'e quer sair do mesmo treino de sempre, com desafios do seu nível.' },
  { emoji: '📋', titulo: 'Dá aula', texto: 'e quer treino pronto, escolhido pelo número de pessoas e pelo nível da turma.' },
];

export const ParaQuemE: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        ESSE APP É PRA <span className="destaque">VOCÊ QUE…</span>
      </h2>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
        {PERFIS.map((p, i) => {
          const escuro = i % 3 === 0;
          return (
            <li
              key={p.titulo}
              className={`rounded-3xl p-4 sm:p-6 flex flex-col gap-2 ${
                escuro ? 'bg-[#14110B] text-white' : 'bg-white text-[#14110B] border border-[#E6DCC4]'
              } ${i === PERFIS.length - 1 ? 'col-span-2' : ''}`}
            >
              <span aria-hidden="true" className="text-3xl sm:text-4xl">{p.emoji}</span>
              <strong className={`text-base sm:text-xl font-black uppercase leading-tight ${escuro ? 'text-[#FFC60B]' : ''}`}>
                {p.titulo}
              </strong>
              <span className={`text-xs sm:text-sm leading-relaxed ${escuro ? 'text-white/75' : 'text-slate-600'}`}>
                {p.texto}
              </span>
            </li>
          );
        })}
      </ul>

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
