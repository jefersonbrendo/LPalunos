import React from 'react';
import { Repeat, Eye, Crosshair, SlidersHorizontal, Users, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';
import imgRepetir from '../assets/images/features/beneficio-repetir.webp';
import imgEntender from '../assets/images/features/beneficio-entender.webp';

/**
 * "O que muda no seu vôlei de praia": benefícios (o que muda para a pessoa),
 * cada um com a feature que prova o benefício em letra menor.
 * As features completas ficam listadas no card de preço.
 */
interface BeneficioItem {
  icon: LucideIcon;
  /** Ícone 3D (webp). Quando existe, substitui o ícone de linha. */
  image?: string;
  beneficio: string;
  prova: string;
}

const BENEFICIOS: BeneficioItem[] = [
  {
    icon: Repeat,
    image: imgRepetir,
    beneficio: 'Você para de repetir o mesmo treino toda semana',
    prova: '240 exercícios em 15 categorias, do aquecimento ao jogo reduzido.',
  },
  {
    icon: Eye,
    image: imgEntender,
    beneficio: 'Você entende o exercício antes de entrar na areia',
    prova: 'O diagrama animado mostra onde cada um fica e para onde vai a bola.',
  },
  {
    icon: Crosshair,
    beneficio: 'Você corrige o erro na hora, sem precisar de alguém olhando',
    prova: 'Cada exercício traz o erro mais comum e os pontos de atenção.',
  },
  {
    icon: SlidersHorizontal,
    beneficio: 'Você treina no seu nível, sem travar e sem se entediar',
    prova: 'Do iniciante ao avançado, com versão mais fácil e mais difícil de cada exercício.',
  },
  {
    icon: Users,
    beneficio: 'Você nunca fica sem treino, sozinho ou com a galera',
    prova: 'Cada exercício mostra para quantas pessoas serve, inclusive sozinho ou em dupla.',
  },
  {
    icon: Smartphone,
    beneficio: 'Você chega na quadra sabendo exatamente o que fazer',
    prova: 'Tudo no celular, com acesso na hora e vitalício.',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase text-balance">
          O QUE MUDA NO SEU <span className="text-[#FF9F1C]">VÔLEI DE PRAIA</span>
        </h2>
        {/* Subtitle */}
        <p className="mt-2.5 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Para quem joga, para quem está começando e para quem dá aula.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BENEFICIOS.map(({ icon: Icone, image, beneficio, prova }) => (
          <div
            key={beneficio}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2DBC9] hover:border-[#FF9F1C] hover:shadow-md transition-all duration-200 shadow-sm flex gap-4 items-start"
          >
            {image ? (
              <img
                src={image}
                width={192}
                height={192}
                alt=""
                loading="lazy"
                decoding="async"
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 object-contain -mt-1"
              />
            ) : (
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FF9F1C]/15 text-[#E07D00] flex items-center justify-center">
                <Icone className="w-6 h-6" strokeWidth={2.4} aria-hidden="true" />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0E4B75] font-heading leading-snug">
                {beneficio}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                {prova}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 max-w-md mx-auto text-center">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
        >
          QUERO TREINAR COM O APP
        </button>
      </div>
    </section>
  );
};
