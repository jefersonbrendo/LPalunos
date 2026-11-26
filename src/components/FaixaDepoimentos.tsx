import React from 'react';
import type { Depoimento } from './TrainerTestimonials';
import { useFaixaInfinita } from '../hooks/useFaixaInfinita';
import { scrollToPlanos } from '../utils/utm';

interface Props {
  id: string;
  itens: Depoimento[];
  titulo: React.ReactNode;
  /** Etiqueta pequena acima do título (ex.: "Resultados"). */
  rotulo?: string;
  /** Mostra um botão para os planos embaixo da faixa. */
  comCta?: boolean;
}

/** Depoimentos numa faixa que anda sozinha para o lado, igual ao carrossel das telas do app. */
export const FaixaDepoimentos: React.FC<Props> = ({ id, itens, titulo, rotulo, comCta }) => {
  const { trilhoRef, areaRef } = useFaixaInfinita(32);
  const n = itens.length;
  // Três cópias da sequência (ver useFaixaInfinita).
  const faixa = [...itens, ...itens, ...itens];

  return (
    <section id={id} className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        {rotulo && <span className="block text-xs font-black uppercase tracking-wider text-[#E23D2E]">{rotulo}</span>}
        <h2 className={`${rotulo ? 'mt-1 ' : ''}text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance`}>
          {titulo}
        </h2>
      </div>

      {/* Carrossel infinito: segure para pausar, arraste para os lados */}
      <div
        ref={areaRef}
        className="mt-8 relative cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: 'pan-y' }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de quem treina com o app. Segure para pausar e arraste para os lados."
      >
        <div ref={trilhoRef} className="flex gap-4 sm:gap-6 w-max py-2 will-change-transform">
          {faixa.map((d, i) => {
            const real = i >= n && i < n * 2;
            return (
              <figure key={`${d.src}-${i}`} className="shrink-0 w-[220px] sm:w-[250px] flex flex-col" aria-hidden={real ? undefined : true}>
                <div className="h-[380px] sm:h-[430px] rounded-2xl overflow-hidden bg-[#14110B] border border-[#E6DCC4] shadow-md">
                  <img
                    src={d.src}
                    width={d.w}
                    height={d.h}
                    alt={real ? d.alt : ''}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    draggable={false}
                    className={`block w-full h-full pointer-events-none ${d.foto ? 'object-cover' : 'object-contain'}`}
                  />
                </div>
                <figcaption className="mt-3 text-center text-xs sm:text-sm font-black text-[#14110B] leading-snug">
                  <span className="bg-[#FFC60B] px-1.5 py-0.5 rounded-md box-decoration-clone">{d.legenda}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500 px-4">Segure para pausar · arraste para os lados</p>

      {comCta && (
        <div className="mt-8 px-4 max-w-[400px] mx-auto">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 px-6 rounded-2xl bg-[#FFC60B] text-[#14110B] font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer uppercase border-b-4 border-[#C99A00]"
          >
            QUERO COMEÇAR MEUS TREINOS
          </button>
        </div>
      )}
    </section>
  );
};
