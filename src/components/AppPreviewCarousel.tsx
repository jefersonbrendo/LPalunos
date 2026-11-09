import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tela1 from '../assets/images/app/tela-1-inicio.webp';
import tela2 from '../assets/images/app/tela-2-aquecimento.webp';
import tela3 from '../assets/images/app/tela-3-como-fazer.webp';
import tela4 from '../assets/images/app/tela-4-tatica.webp';
import tela5 from '../assets/images/app/tela-5-buscar.webp';
import tela6 from '../assets/images/app/tela-6-sozinho-dupla.webp';
import tela7 from '../assets/images/app/tela-7-salvos.webp';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
}

// Todas as telas são exibidas dentro da mesma moldura de celular (mesmo tamanho).
const SLIDES: SlideItem[] = [
  { id: 1, src: tela1, alt: 'Tela inicial do app Código da Areia, com 240 exercícios para treinar na areia' },
  { id: 2, src: tela2, alt: 'Lista de exercícios de aquecimento, organizada por nível' },
  { id: 3, src: tela3, alt: 'Exercício aberto com a aba Como fazer: objetivo, como montar e passo a passo' },
  { id: 4, src: tela4, alt: 'Exercício de tática com o desenho da quadra, tempo, jogadores e material' },
  { id: 5, src: tela5, alt: 'Busca de exercícios com filtro por nível' },
  { id: 6, src: tela6, alt: 'Categoria Sozinho/Dupla com rotinas para treinar sem professor' },
  { id: 7, src: tela7, alt: 'Lista de exercícios salvos' },
];

export const AppPreviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Pré-carrega a tela anterior e a próxima para a troca ser instantânea
  useEffect(() => {
    const vizinhas = [
      SLIDES[(currentIndex + 1) % SLIDES.length],
      SLIDES[(currentIndex - 1 + SLIDES.length) % SLIDES.length],
    ];
    vizinhas.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Deslizar com o dedo no celular
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) nextSlide();
    else prevSlide();
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#EFE9DC]/70 border-y border-[#E2DBC9]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase">
          VEJA O APP POR DENTRO
        </h2>

        {/* Text */}
        <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Cada exercício tem o seu código. Você sabe na hora o nível, o fundamento e para quantos alunos ele serve.
        </p>

        {/* Carousel Container */}
        <div className="mt-8 relative max-w-md mx-auto">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0E4B75] border border-[#E2DBC9] shadow-sm transition-colors cursor-pointer"
              aria-label="Tela anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-7 bg-[#FF9F1C]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para tela ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0E4B75] border border-[#E2DBC9] shadow-sm transition-colors cursor-pointer"
              aria-label="Próxima tela"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Celular com a tela ativa (mesmo tamanho para todas as telas) */}
          <div
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[315px]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF9F1C]/25 via-[#0E4B75]/20 to-[#FF4A3F]/15 rounded-[48px] blur-xl opacity-70" />
            <div className="relative rounded-[40px] sm:rounded-[44px] border-[5px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden aspect-[9/17.5]">
              <img
                key={SLIDES[currentIndex].id}
                src={SLIDES[currentIndex].src}
                width={640}
                height={1316}
                alt={SLIDES[currentIndex].alt}
                loading={currentIndex === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="absolute inset-0 w-full h-full object-fill select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
