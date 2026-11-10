import React, { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';

const VIDEO_SRC = 'https://i.imgur.com/GfgesKg.mp4';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Preview mudo: o vídeo só começa a baixar depois que a página terminou de
  // carregar (não compete com texto, imagens e scripts no PageSpeed).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      video.muted = true;
      video.src = VIDEO_SRC;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };
    const schedule = () => {
      const idle = (window as any).requestIdleCallback as
        | ((cb: () => void, opts?: { timeout: number }) => void)
        | undefined;
      if (idle) idle(start, { timeout: 3000 });
      else setTimeout(start, 1500);
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener('load', schedule);
    };
  }, []);

  // Quando o lead clica na tela: volta ao começo (0s), desmuta e toca com áudio
  const handleStartWithSound = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    try {
      video.pause();
    } catch {
      // Ignora erro de pausa se já estiver pausado
    }

    video.currentTime = 0; // Volta ao começo
    video.muted = false;   // Ativa o áudio
    video.volume = 1;
    video.loop = false;
    
    try {
      await video.play();
    } catch {
      // Trata com segurança caso a promise seja cancelada
    }
    setIsPlayingAudio(true);
  };

  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background subtle coastal atmosphere glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FFC60B]/10 via-[#14110B]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#14110B] leading-[1.1] max-w-3xl mx-auto text-balance">
        <span className="destaque">+420</span> treinos de vôlei de praia{' '}
        <span className="underline decoration-[#FFC60B] decoration-[4px] underline-offset-6 text-[#14110B]">
          sem depender de professor
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        Com vídeo de cada movimento, do primeiro toque à impulsão do ataque, organizados por nível num aplicativo.
      </p>

      {/* Vídeo demonstrativo do aplicativo (Imgur a/7zDDHGV) */}
      <div className="my-8 sm:my-10 max-w-[280px] sm:max-w-[320px] mx-auto">
        <div className="relative rounded-[36px] p-2 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl border-4 border-slate-700/80 overflow-hidden group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFC60B]/25 via-[#14110B]/20 to-[#E23D2E]/20 rounded-[48px] blur-xl opacity-70 pointer-events-none -z-10" />
          
          {/* Imagem do topo (provisória, em branco). Troque o bloco abaixo por
              <img src="..." alt="..." className="w-full h-auto aspect-[9/16] rounded-[28px] object-cover block" /> */}
          <div
            role="img"
            aria-label="Imagem do aplicativo"
            className="w-full aspect-[9/16] rounded-[28px] bg-white block"
          />
        </div>
      </div>


      {/* Primary CTA Button (Coral Fluorescente de Alta Conversão) */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C99A00]"
        >
          QUERO OS +420 TREINOS NO MEU CELULAR
        </button>
      </div>

      {/* Badges / Selos lado a lado */}
      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
        <span className="flex items-center gap-1.5 text-[#14110B]">
          <span className="text-emerald-600 font-black">✓</span> ACESSO VITALÍCIO
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-[#14110B]">
          <span className="text-emerald-600 font-black">✓</span> FUNCIONA OFFLINE
        </span>
      </div>
    </section>
  );
};
