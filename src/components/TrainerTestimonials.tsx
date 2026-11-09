import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import depoimento1 from '../assets/images/depoimentos/depoimento-1.webp';
import depoimento2 from '../assets/images/depoimentos/depoimento-2.webp';
import depoimento3 from '../assets/images/depoimentos/depoimento-3.webp';
import depoimento4 from '../assets/images/depoimentos/depoimento-4.webp';

/**
 * DEPOIMENTOS DE TREINADORES (prints reais de WhatsApp)
 *
 * Para adicionar um print: coloque o arquivo (webp) em src/assets/images/depoimentos/,
 * importe aqui em cima e inclua um novo item na lista DEPOIMENTOS
 * (w e h são a largura e a altura reais da imagem).
 */
interface Depoimento {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    src: depoimento1,
    alt: 'Conversa de WhatsApp em que um treinador agradece pelo material, diz que ficou mais fácil planejar os treinos e que já aplicou com a turma na areia',
    w: 800,
    h: 820,
  },
  {
    src: depoimento2,
    alt: 'Conversa de WhatsApp em que um professor de projeto social elogia a qualidade e a praticidade do material e diz que sentiu diferença nas crianças com os treinos',
    w: 800,
    h: 1135,
  },
  {
    src: depoimento3,
    alt: 'Conversa de WhatsApp em que um treinador de vôlei de praia agradece pelo material organizado e fácil de acessar, inclusive na quadra de areia',
    w: 800,
    h: 1329,
  },
  {
    src: depoimento4,
    alt: 'Conversa de WhatsApp em que um treinador diz que comprou o material, achou tudo organizado exercício por exercício e já aplicou no treino da turma',
    w: 800,
    h: 1276,
  },
];

export const TrainerTestimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = DEPOIMENTOS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const item = DEPOIMENTOS[index];
  const next = DEPOIMENTOS[(index + 1) % total];

  return (
    <section id="treinadores" className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase text-balance">
        TREINADORES QUE JÁ UTILIZARAM E APROVARAM
      </h2>

      <div className="mt-8 mx-auto w-full max-w-[400px]">
        {/* Todos os cards têm a mesma altura; o print fica centralizado dentro */}
        <figure
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="h-[540px] sm:h-[600px] flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-[#E2DBC9] shadow-sm"
        >
          <img
            key={index}
            src={item.src}
            width={item.w}
            height={item.h}
            alt={item.alt}
            decoding="async"
            className="block w-full h-full object-contain"
          />
        </figure>
        <link rel="preload" as="image" href={next.src} />

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="p-2.5 rounded-full bg-white border border-[#E2DBC9] shadow-sm text-[#0E4B75] active:scale-95 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {DEPOIMENTOS.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-5 bg-[#FF4A3F]' : 'w-2 bg-[#E2DBC9]'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="p-2.5 rounded-full bg-white border border-[#E2DBC9] shadow-sm text-[#0E4B75] active:scale-95 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
