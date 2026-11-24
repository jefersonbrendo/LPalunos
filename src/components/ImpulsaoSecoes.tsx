import React from 'react';
import { DEPOIMENTOS, TrainerTestimonials, type Depoimento } from './TrainerTestimonials';
import { scrollToPlanos } from '../utils/utm';

/**
 * Seções exclusivas da página /impulsao, na ordem das páginas de impulsão validadas:
 * prova logo abaixo do topo → dores de quadra → jornada até o salto mais alto.
 */

/* ---------- 1. PROVA LOGO ABAIXO DO TOPO (carrossel, igual ao da landing principal) ---------- */
const PROVA_TOPO: Depoimento[] = [
  {
    src: '/assets/aistudio/560304279_18390628129131754_7658984777542539434_n_2245e9dc.jpg',
    alt: 'Vitoria Ferreira jogando vôlei',
    legenda: 'Vitoria Ferreira, 1,64 de altura, começou há 2 meses',
    w: 640,
    h: 1138,
    foto: true,
  },
  {
    src: '/assets/aistudio/345e0c5a-cb66-4e6d-b198-060ee0f66bed_0ed160f6.jpg',
    alt: 'Arthur Lima jogando vôlei de praia',
    legenda: 'Arthur Lima, 1,78 de altura, começou há 1 mês',
    w: 1080,
    h: 1440,
    foto: true,
  },
  ...DEPOIMENTOS.slice(0, 2),
];

export const ProvaImpulsao: React.FC = () => (
  <TrainerTestimonials
    id="prova-impulsao"
    rotulo="Resultados"
    itens={PROVA_TOPO}
    titulo={<>QUEM JÁ ESTÁ <span className="destaque">TREINANDO IMPULSÃO</span></>}
  />
);

/* ---------- 2. DORES DE QUADRA ---------- */
const DORES = [
  { emoji: '🧱', titulo: 'Você sobe, mas a bola fica no bloqueio', texto: 'Ataca bem, só que a mão do bloqueador chega antes.' },
  { emoji: '📉', titulo: 'O ataque sai de baixo para cima', texto: 'Sem altura, a bola vai fraca, na rede ou na mão de quem defende.' },
  { emoji: '⏱️', titulo: 'Chega atrasado no bloqueio', texto: 'Quando o pé sai do chão, a bola já passou.' },
  { emoji: '🦵', titulo: 'No fim do set a perna não sobe mais', texto: 'O primeiro salto é bom; do meio do jogo para frente, não.' },
];

export const DoresImpulsao: React.FC = () => (
  <section className="py-12 sm:py-16 px-4 bg-[#EDE5D2]/60 border-y border-[#E6DCC4]">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        Você sente isso <span className="destaque">no jogo?</span>
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {DORES.map((d) => (
          <div key={d.titulo} className="flex items-start gap-3 rounded-2xl bg-white border border-[#E6DCC4] p-4 sm:p-5 shadow-2xs">
            <span className="text-2xl leading-none shrink-0" aria-hidden="true">{d.emoji}</span>
            <div>
              <h3 className="font-black text-[#14110B] text-base leading-snug">{d.titulo}</h3>
              <p className="mt-1 text-sm text-slate-700 font-medium leading-relaxed">{d.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-base sm:text-lg font-semibold text-[#14110B] leading-relaxed max-w-2xl mx-auto text-balance">
        Não é só altura nem vontade. <span className="destaque">Impulsão se treina fora do jogo</span>, com perna explosiva e passada certa, e dá para fazer em casa.
      </p>
    </div>
  </section>
);

/* ---------- 3. JORNADA ATÉ O SALTO MAIS ALTO ---------- */
const ETAPAS = [
  { etapa: 'Dia 1', titulo: 'Marque seu alcance', texto: 'Antes de começar, você marca na parede até onde alcança no salto.' },
  { etapa: 'Nível iniciante', titulo: 'Base do salto', texto: 'Começa pelos saltos mais simples, como o salto no lugar, para pegar o movimento certo.' },
  { etapa: 'Intermediário e avançado', titulo: 'Perna explosiva e passada', texto: 'Sobe para saltos mais difíceis, como o agrupado e o salto com meia-volta, e treina a aproximação de ataque.' },
  { etapa: 'Dia 21', titulo: 'Meça de novo', texto: 'Marca o alcance outra vez e compara com o primeiro dia. A sua evolução, na sua medida.' },
];

export const JornadaImpulsao: React.FC = () => (
  <section className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
    <span className="block text-center text-xs font-black uppercase tracking-wider text-[#E23D2E]">Desafio Impulsão 21 Dias</span>
    <h2 className="mt-1 text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
      O caminho até o seu <span className="destaque">salto mais alto</span>
    </h2>

    <ol className="mt-10 relative border-l-4 border-[#FFC60B] ml-4 sm:ml-8 space-y-8">
      {ETAPAS.map((e, i) => (
        <li key={e.etapa} className="relative pl-8">
          <span className="absolute -left-[22px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#14110B] text-[#FFC60B] font-black text-sm shadow-md">
            {i + 1}
          </span>
          <span className="text-[11px] font-black uppercase tracking-wider text-[#E23D2E]">{e.etapa}</span>
          <h3 className="text-xl sm:text-2xl font-black text-[#14110B] leading-tight">{e.titulo}</h3>
          <p className="mt-1 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{e.texto}</p>
        </li>
      ))}
    </ol>

    <div className="mt-10 max-w-md mx-auto">
      <button
        onClick={scrollToPlanos}
        className="w-full py-4 px-6 rounded-2xl bg-[#FFC60B] text-[#14110B] font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer uppercase border-b-4 border-[#C99A00]"
      >
        QUERO COMEÇAR O DESAFIO
      </button>
    </div>
  </section>
);
