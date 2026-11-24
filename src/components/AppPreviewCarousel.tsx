import React from 'react';
import { useFaixaInfinita } from '../hooks/useFaixaInfinita';
import tela1 from '../assets/images/app/tela-1-inicio.webp';
import tela2 from '../assets/images/app/tela-2-em-casa.webp';
import tela3 from '../assets/images/app/tela-3-com-bola.webp';
import tela4 from '../assets/images/app/tela-4-movimento.webp';
import tela5 from '../assets/images/app/tela-5-saque-areia.webp';
import tela6 from '../assets/images/app/tela-6-impulsao.webp';
import tela7 from '../assets/images/app/tela-7-buscar.webp';
import tela8 from '../assets/images/app/tela-8-levantamento-areia.webp';
import tela9 from '../assets/images/app/tela-9-saque-diagrama.webp';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
}

// Todas as telas são exibidas dentro da mesma moldura de celular (mesmo tamanho).
const SLIDES: SlideItem[] = [
  { id: 1, src: tela1, alt: 'Tela inicial do app Código da Areia: treino do dia, semana de treinos e treinos prontos' },
  { id: 2, src: tela2, alt: 'Treinos em casa: com bola, impulsão, força, agilidade, coordenação e mobilidade' },
  { id: 3, src: tela3, alt: 'Lista de treinos com bola na parede, com nível, séries e filtro de material' },
  { id: 4, src: tela4, alt: 'Exercício aberto com a animação do movimento, a região que trabalha e a trajetória da bola' },
  { id: 5, src: tela5, alt: 'Treinos de saque na quadra de areia, com filtro por nível e número de pessoas' },
  { id: 8, src: tela8, alt: 'Exercício de levantamento na areia com o diagrama animado da quadra, a zona alvo e a trajetória da bola' },
  { id: 9, src: tela9, alt: 'Exercício de saque na areia com o diagrama mostrando as zonas alvo na diagonal e na paralela' },
  { id: 6, src: tela6, alt: 'Treinos de impulsão do nível avançado para fazer em casa' },
  { id: 7, src: tela7, alt: 'Busca de treinos no app' },
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
