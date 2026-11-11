import React, { useEffect, useRef } from 'react';
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
  { id: 1, src: tela1, alt: 'Tela inicial do app Código da Areia, com +420 treinos na areia e em casa' },
  { id: 2, src: tela2, alt: 'Lista de exercícios de aquecimento, organizada por nível' },
  { id: 3, src: tela3, alt: 'Exercício aberto com a aba Como fazer: objetivo, como montar e passo a passo' },
  { id: 4, src: tela4, alt: 'Exercício de tática com o desenho da quadra, tempo, jogadores e material' },
  { id: 5, src: tela5, alt: 'Busca de exercícios com filtro por nível' },
  { id: 6, src: tela6, alt: 'Categoria Sozinho/Dupla com rotinas para treinar sem professor' },
  { id: 7, src: tela7, alt: 'Lista de exercícios salvos' },
];

// Três cópias da sequência: a do meio é a "real", as das pontas cobrem o
// deslocamento. Quando passa de uma cópia inteira, o deslocamento volta uma
// cópia sem que nada mude na tela, então o carrossel nunca "reinicia".
const FAIXA = [...SLIDES, ...SLIDES, ...SLIDES];
const VELOCIDADE = 32; // px por segundo

export const AppPreviewCarousel: React.FC = () => {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const estado = useRef({
    offset: 0,
    largura: 0, // largura de uma cópia da sequência
    segurando: false,
    inicioX: 0,
    inicioOffset: 0,
    visivel: true,
  });

  useEffect(() => {
    const trilho = trilhoRef.current;
    const area = areaRef.current;
    if (!trilho || !area) return;
    const e = estado.current;
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const medir = () => {
      const nova = trilho.scrollWidth / 3;
      if (!nova) return;
      // mantém a posição relativa ao trocar o tamanho da tela
      const proporcao = e.largura ? e.offset / e.largura : -1;
      e.largura = nova;
      e.offset = proporcao * nova;
      aplicar();
    };
    // offset fica sempre entre -2 cópias e -1 cópia (exclusive)
    const normalizar = () => {
      if (!e.largura) return;
      while (e.offset <= -2 * e.largura) e.offset += e.largura;
      while (e.offset > -e.largura) e.offset -= e.largura;
    };
    const aplicar = () => {
      normalizar();
      trilho.style.transform = `translate3d(${e.offset}px,0,0)`;
    };

    let ultimo = performance.now();
    let raf = 0;
    const quadro = (agora: number) => {
      const dt = Math.min(0.05, (agora - ultimo) / 1000);
      ultimo = agora;
      if (!e.segurando && e.visivel && !reduzir) {
        e.offset -= VELOCIDADE * dt;
        aplicar();
      }
      raf = requestAnimationFrame(quadro);
    };

    // Segurar pausa; arrastar move para os lados; soltar continua de onde parou.
    const baixar = (ev: PointerEvent) => {
      e.segurando = true;
      e.inicioX = ev.clientX;
      e.inicioOffset = e.offset;
      area.setPointerCapture(ev.pointerId);
    };
    const mover = (ev: PointerEvent) => {
      if (!e.segurando) return;
      e.offset = e.inicioOffset + (ev.clientX - e.inicioX);
      aplicar();
      e.inicioOffset = e.offset;
      e.inicioX = ev.clientX;
    };
    const soltar = () => {
      e.segurando = false;
      ultimo = performance.now();
    };

    area.addEventListener('pointerdown', baixar);
    area.addEventListener('pointermove', mover);
    area.addEventListener('pointerup', soltar);
    area.addEventListener('pointercancel', soltar);
    area.addEventListener('lostpointercapture', soltar);

    // Só anima quando a seção está na tela (economiza bateria e CPU).
    const obs = new IntersectionObserver(([en]) => {
      e.visivel = en.isIntersecting;
      ultimo = performance.now();
    });
    obs.observe(area);

    const ro = new ResizeObserver(medir);
    ro.observe(trilho);
    medir();
    raf = requestAnimationFrame(quadro);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      ro.disconnect();
      area.removeEventListener('pointerdown', baixar);
      area.removeEventListener('pointermove', mover);
      area.removeEventListener('pointerup', soltar);
      area.removeEventListener('pointercancel', soltar);
      area.removeEventListener('lostpointercapture', soltar);
    };
  }, []);

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
              <div className="relative rounded-[32px] sm:rounded-[36px] border-[5px] border-slate-800 bg-slate-950 shadow-xl overflow-hidden aspect-[9/17.5]">
                <img
                  src={s.src}
                  width={640}
                  height={1316}
                  alt={i >= SLIDES.length && i < SLIDES.length * 2 ? s.alt : ''}
                  loading={i < SLIDES.length + 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none"
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
