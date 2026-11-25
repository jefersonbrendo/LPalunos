import React from 'react';
import { useFaixaInfinita } from '../hooks/useFaixaInfinita';
import tela1 from '../assets/images/app/nova-1-inicio-niveis.webp';
import tela2 from '../assets/images/app/nova-2-fundamentos-areia.webp';
import tela3 from '../assets/images/app/nova-3-fundamentos-quadra.webp';
import tela4 from '../assets/images/app/nova-4-impulsao.webp';
import tela5 from '../assets/images/app/nova-5-movimento.webp';
import tela6 from '../assets/images/app/nova-6-passo-a-passo.webp';
import tela7 from '../assets/images/app/nova-7-bulgaro-movimento.webp';
import tela8 from '../assets/images/app/nova-8-bulgaro-passo-a-passo.webp';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
}

// Todas as telas são exibidas dentro da mesma moldura de celular (mesmo tamanho).
const SLIDES: SlideItem[] = [
  { id: 1, src: tela1, alt: 'Tela inicial do app: escolha do nível e treinos em casa com bola, impulsão, força e agilidade' },
  { id: 2, src: tela2, alt: 'Fundamentos do vôlei de areia: saque, recepção, levantamento, ataque, bloqueio e defesa' },
  { id: 3, src: tela3, alt: 'Fundamentos do vôlei de quadra: saque, recepção, levantamento, ataque, bloqueio e defesa' },
  { id: 4, src: tela4, alt: 'Exercícios de impulsão filtrados por nível e material, com séries e região que trabalha' },
  { id: 5, src: tela5, alt: 'Exercício aberto com a animação do movimento, a etapa atual, a região que trabalha e a trajetória' },
  { id: 6, src: tela6, alt: 'Passo a passo do exercício com as etapas ilustradas, o objetivo e o ritmo' },
  { id: 7, src: tela7, alt: 'Agachamento búlgaro com halteres aberto no app, com a animação do movimento e a etapa atual' },
  { id: 8, src: tela8, alt: 'Agachamento búlgaro: regiões que trabalha, objetivo e passo a passo com as etapas ilustradas' },
];

// Três cópias da sequência (ver useFaixaInfinita).
const FAIXA = [...SLIDES, ...SLIDES, ...SLIDES];
const VELOCIDADE = 32; // px por segundo

export const AppPreviewCarousel: React.FC = () => {
  const { trilhoRef, areaRef } = useFaixaInfinita(VELOCIDADE);

  return (
    <section className="py-12 sm:py-16 bg-[#EDE5D2]/70 border-y border-[#E6DCC4] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase">
          VEJA COMO É <span className="destaque">FÁCIL DE USAR</span>
        </h2>

        {/* Text */}
        <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Escolha o que quer treinar, abra o exercício e siga o passo a passo com a animação do movimento. Tudo em poucos toques.
        </p>
      </div>

      {/* Carrossel infinito: segure para pausar, arraste para os lados */}
      <div
        ref={areaRef}
        className="mt-8 relative cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: 'pan-y' }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Telas do aplicativo. Segure para pausar e arraste para os lados."
      >
        <div ref={trilhoRef} className="flex gap-4 sm:gap-6 w-max py-4 will-change-transform">
          {FAIXA.map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="relative shrink-0 w-[190px] sm:w-[230px]"
              aria-hidden={i < SLIDES.length || i >= SLIDES.length * 2 ? true : undefined}
            >
              <div className="relative rounded-[32px] sm:rounded-[36px] border-[5px] border-slate-800 bg-slate-950 shadow-xl overflow-hidden aspect-[640/1338]">
                <img
                  src={s.src}
                  width={640}
                  height={1338}
                  alt={i >= SLIDES.length && i < SLIDES.length * 2 ? s.alt : ''}
                  // a 1ª cópia carrega já (para o carrossel não aparecer vazio ao girar), mas com prioridade
                  // baixa, para não disputar banda com a imagem do topo; as cópias seguintes são lazy
                  loading={i < SLIDES.length ? 'eager' : 'lazy'}
                  fetchPriority="low"
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500 px-4">Segure para pausar · arraste para os lados</p>
    </section>
  );
};
