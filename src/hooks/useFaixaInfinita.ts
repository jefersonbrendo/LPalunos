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
    visivel: false,
  });

  useEffect(() => {
    const trilho = trilhoRef.current;
    const area = areaRef.current;
    if (!trilho || !area) return;
    const e = estado.current;
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const medir = (larguraTotal?: number) => {
      const nova = (larguraTotal ?? trilho.offsetWidth) / 3;
      if (!nova) return;
      // mantém a posição relativa ao trocar o tamanho da tela
      const proporcao = e.largura ? e.offset / e.largura : -1;
      e.largura = nova;
      e.offset = proporcao * nova;
      requestAnimationFrame(aplicar);
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
    const pararRaf = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const quadro = (agora: number) => {
      raf = 0;
      if (!e.visivel || reduzir || document.hidden) return;
      const dt = Math.min(0.05, (agora - ultimo) / 1000);
      ultimo = agora;
      if (!e.segurando) {
        e.offset -= VELOCIDADE * dt;
        aplicar();
      }
      raf = requestAnimationFrame(quadro);
    };
    const iniciarRaf = () => {
      if (raf || !e.visivel || reduzir || document.hidden) return;
      ultimo = performance.now();
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

    // Só roda requestAnimationFrame quando a seção está na tela e a aba está ativa (zero CPU ociosa).
    const obs = new IntersectionObserver(
      ([en]) => {
        e.visivel = en.isIntersecting;
        if (e.visivel) iniciarRaf();
        else pararRaf();
      },
      { rootMargin: '120px 0px' },
    );
    obs.observe(area);

    const aoMudarAba = () => {
      if (document.hidden) pararRaf();
      else iniciarRaf();
    };
    document.addEventListener('visibilitychange', aoMudarAba);

    const ro = new ResizeObserver(([entry]) => {
      if (entry) medir(entry.contentRect.width);
    });
    ro.observe(trilho);

    return () => {
      pararRaf();
      obs.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', aoMudarAba);
      area.removeEventListener('pointerdown', baixar);
      area.removeEventListener('pointermove', mover);
      area.removeEventListener('pointerup', soltar);
      area.removeEventListener('pointercancel', soltar);
      area.removeEventListener('lostpointercapture', soltar);
    };
  }, [VELOCIDADE]);

  return { trilhoRef, areaRef };
}
