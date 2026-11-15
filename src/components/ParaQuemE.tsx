import React from 'react';
import { scrollToPlanos } from '../utils/utm';
import fotoIniciante from '../assets/images/perfis/mikasa-iniciante.webp';
import fotoGalera from '../assets/images/perfis/mikasa-galera.webp';
import fotoTreinoCasa from '../assets/images/perfis/mikasa-treino-casa.webp';
import fotoIntermediario from '../assets/images/perfis/mikasa-intermediario.webp';
import fotoProfessor from '../assets/images/perfis/mikasa-professor.webp';

/**
 * "Para quem é": blocos em grade (alternando escuro e claro) para a pessoa
 * se reconhecer num dos perfis.
 */
const PERFIS = [
  {
    foto: fotoIniciante,
    alt: 'Iniciante treinando os fundamentos do vôlei de praia na areia',
    titulo: 'Está começando',
    texto: 'e quer aprender os fundamentos do jeito certo, desde o primeiro toque.',
  },
  {
    foto: fotoGalera,
    alt: 'Amigos jogando vôlei de praia em dupla na quadra de areia',
    titulo: 'Joga com a galera',
    texto: 'e quer parar de ser o alvo do saque e o elo fraco da dupla.',
  },
  {
    foto: fotoTreinoCasa,
    alt: 'Praticante treinando controle de bola de vôlei em casa na parede',
    titulo: 'Não tem quadra nem parceiro todo dia',
    texto: 'e quer continuar treinando em casa, até na parede.',
  },
  {
    foto: fotoIntermediario,
    alt: 'Jogador intermediário executando ataque no vôlei de praia na rede',
    titulo: 'Já joga, mas travou',
    texto: 'e quer sair do mesmo treino de sempre, com desafios do seu nível.',
  },
  {
    foto: fotoProfessor,
    alt: 'Professor de vôlei de praia orientando turma de alunos na quadra de areia',
    titulo: 'Dá aula',
    texto: 'e quer treino pronto, escolhido pelo número de pessoas e pelo nível da turma.',
  },
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
            <li key={p.titulo} className={i === PERFIS.length - 1 ? 'col-span-2' : ''}>
              {/* O card inteiro é tocável e leva aos planos (as pessoas já tocavam nele esperando isso) */}
              <button
                type="button"
                onClick={scrollToPlanos}
                aria-label={`${p.titulo}: ver os planos`}
                className={`w-full h-full text-left rounded-3xl p-4 sm:p-6 flex flex-col gap-2 cursor-pointer transition-transform active:scale-[0.98] hover:-translate-y-0.5 ${
                  escuro ? 'bg-[#14110B] text-white' : 'bg-white text-[#14110B] border border-[#E6DCC4]'
                }`}
              >
                <img
                  src={p.foto}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0 shadow-sm"
                />
                <strong className={`text-base sm:text-xl font-black uppercase leading-tight ${escuro ? 'text-[#FFC60B]' : ''}`}>
                  {p.titulo}
                </strong>
                <span className={`text-xs sm:text-sm leading-relaxed ${escuro ? 'text-white/75' : 'text-slate-600'}`}>
                  {p.texto}
                </span>
                <span className={`mt-auto pt-1 text-xs font-black uppercase tracking-wide ${escuro ? 'text-[#FFC60B]' : 'text-[#B87500]'}`}>
                  Ver planos →
                </span>
              </button>
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
