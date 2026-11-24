import { useEffect, useRef } from 'react';

/**
 * Faixa infinita que anda sozinha para o lado (carrossel do entregável).
 * O trilho precisa ter 3 cópias da sequência: a do meio é a "real", as das pontas
 * cobrem o deslocamento. Quando passa de uma cópia inteira, o deslocamento volta uma
 * cópia sem que nada mude na tela, então o carrossel nunca "reinicia".
 * Segurar pausa; arrastar move para os lados; soltar continua de onde parou.
 */
export function useFaixaInfinita(VELOCIDADE = 32) {
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
  }, [VELOCIDADE]);

  return { trilhoRef, areaRef };
}
