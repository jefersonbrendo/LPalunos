import React from 'react';
import telaNiveis from '../assets/images/app/nova-4-impulsao.webp';
import telaTreino from '../assets/images/impulsao/impulsao-treino-pronto.webp';
import telaExercicio from '../assets/images/impulsao/impulsao-exercicio.webp';
import capaDesafio from '../assets/images/bonus-aluno-04.webp';
import { scrollToPlanos } from '../utils/utm';

interface Bloco {
  etiqueta: string;
  titulo: string;
  texto: string;
  imagem: string;
  alt: string;
  capa?: boolean;
}

const BLOCOS: Bloco[] = [
  {
    etiqueta: 'No app',
    titulo: 'Exercícios de impulsão',
    texto: 'Do salto no lugar ao salto agrupado, separados em iniciante, intermediário e avançado. Você começa no seu nível e vai subindo.',
    imagem: telaNiveis,
    alt: 'Exercícios de impulsão no app filtrados por nível e material: agachamento com salto, salto lateral, salto de bloqueio',
  },
  {
    etiqueta: 'No app',
    titulo: 'Cada exercício de impulsão com o passo a passo',
    texto: 'A animação mostra a posição inicial, a passada e o salto, a região que trabalha e tem câmera lenta para você copiar o movimento.',
    imagem: telaExercicio,
    alt: 'Exercício Saltos no lugar aberto no app, com o vídeo do movimento e a etapa do passo a passo',
  },
  {
    etiqueta: 'No app',
    titulo: 'Treino pronto: impulsão para ataque e bloqueio',
    texto: 'Aproximação de três passos e salto para atacar e bloquear. Cerca de 20 minutos, em casa, com uma parede. É só apertar começar.',
    imagem: telaTreino,
    alt: 'Treino pronto Impulsão para ataque e bloqueio no app, com a lista de exercícios',
  },
  {
    etiqueta: 'No app',
    titulo: 'Desafio Impulsão 21 Dias',
    texto: 'São 21 dias treinando perna explosiva e passada certa, na sequência. No fim você mede seu alcance na parede e compara com o primeiro dia.',
    imagem: capaDesafio,
    alt: 'Capa do Desafio Impulsão 21 Dias',
    capa: true,
  },
];

/** Seção logo abaixo do topo da página /impulsao: mostra o que tem de impulsão antes do app completo. */
export const ImpulsaoConteudo: React.FC = () => {
  return (
    <>
      <section className="py-12 sm:py-16 px-4 bg-[#14110B] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="block text-xs font-black uppercase tracking-wider text-[#FFC60B]">Como você recebe no app</span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
              Tudo de impulsão <span className="text-[#FFC60B]">num lugar só</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#CFC6B2] max-w-xl mx-auto leading-relaxed font-medium">
              Para parar de atacar de baixo para cima e chegar mais alto no bloqueio, com exercícios que você faz sem academia.
            </p>
          </div>

          <div className="mt-10 space-y-10 sm:space-y-14">
            {BLOCOS.map((b, i) => (
              <div
                key={b.titulo}
                className={`flex flex-col items-center gap-6 sm:gap-10 ${i % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
              >
                <div className="shrink-0 w-[200px] sm:w-[220px]">
                  {b.capa ? (
                    <img src={b.imagem} width={300} height={402} alt={b.alt} loading="lazy" decoding="async" className="block w-full h-auto rounded-2xl shadow-2xl" />
                  ) : (
                    <div className="rounded-[34px] bg-[#2A251B] p-[8px] shadow-2xl">
                      <img src={b.imagem} width={540} height={1130} alt={b.alt} loading="lazy" decoding="async" className="block w-full h-auto rounded-[27px]" />
                    </div>
                  )}
                </div>
                <div className="text-center sm:text-left max-w-md">
                  <span className={`inline-block text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${b.capa ? 'bg-[#E23D2E] text-white' : 'bg-[#FFC60B] text-[#14110B]'}`}>
                    {b.etiqueta}
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-black leading-tight">{b.titulo}</h3>
                  <p className="mt-2 text-sm sm:text-base text-[#CFC6B2] leading-relaxed">{b.texto}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-md mx-auto">
            <button
              onClick={scrollToPlanos}
              className="w-full py-4 px-6 rounded-2xl bg-[#FFC60B] text-[#14110B] font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer uppercase border-b-4 border-[#C99A00]"
            >
              QUERO OS TREINOS DE IMPULSÃO
            </button>
          </div>
        </div>
      </section>

    </>
  );
};
