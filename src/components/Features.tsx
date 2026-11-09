import React from 'react';
import { scrollToPlanos } from '../utils/utm';
import iconAreia from '../assets/images/features/feature-areia.webp';
import iconCodigo from '../assets/images/features/feature-codigo.webp';
import iconEvolucao from '../assets/images/features/feature-evolucao.webp';
import iconCelular from '../assets/images/features/feature-celular.webp';
import iconAula from '../assets/images/features/feature-aula.webp';

interface FeatureItem {
  icon: string;
  /** Ícone 3D (webp). Quando existe, substitui o emoji do card. */
  image?: string;
  title: string;
  description: string;
  accent: string;
  bg?: string;
  badge?: string;
  fullWidth?: boolean;
}

const FEATURES: FeatureItem[] = [
  {
    icon: '🏐',
    image: iconAreia,
    title: '240 exercícios feitos para a areia',
    description: 'Nada de treino de quadra adaptado. Cada exercício foi pensado para areia, vento e turma pequena.',
    accent: 'border-[#E2DBC9] hover:border-[#FF9F1C] hover:shadow-md',
  },
  {
    icon: '🔢',
    image: iconCodigo,
    title: 'O Código da Areia',
    description: 'Nível, fundamento e número de alunos em cada exercício. Você acha o certo em segundos.',
    accent: 'border-[#E2DBC9] hover:border-[#0E4B75] hover:shadow-md',
  },
  {
    icon: '📋',
    image: iconAula,
    title: 'Aula pronta para dar',
    description: 'Escolha o nível e o tamanho da turma e veja na hora os exercícios certos para a aula do dia. Você chega na arena sabendo o que vai aplicar.',
    accent: 'border-2 border-[#0284C7]/60 hover:border-[#0284C7] shadow-md ring-1 ring-[#0284C7]/20',
    bg: 'bg-gradient-to-br from-white via-cyan-50/30 to-amber-50/20',
    badge: 'NOVIDADE',
  },
  {
    icon: '📈',
    image: iconEvolucao,
    title: 'Do iniciante ao avançado',
    description: 'Para a turma que ainda erra a manchete e para quem já quer treinar side-out e transição.',
    accent: 'border-[#E2DBC9] hover:border-[#05D179] hover:shadow-md',
  },
  {
    icon: '📲',
    image: iconCelular,
    title: 'Direto no seu celular',
    description: 'Acesso liberado na hora. Você abre na arena e aplica.',
    accent: 'border-[#E2DBC9] hover:border-[#0284C7] hover:shadow-md',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase">
          TUDO QUE VOCÊ VAI RECEBER
        </h2>
        {/* Subtitle */}
        <p className="mt-2.5 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          240 exercícios prontos para você parar de improvisar e chegar na arena com a aula na mão.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FEATURES.map((feat) => (
          <div
            key={feat.title}
            className={`group p-6 rounded-2xl ${feat.bg || 'bg-white'} border ${feat.accent} transition-all duration-200 shadow-sm relative overflow-hidden flex flex-col justify-between`}
          >
            {feat.badge && (
              <span className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider bg-[#0284C7] text-white px-2 py-0.5 rounded-full shadow-2xs">
                {feat.badge}
              </span>
            )}
            <div>
              {feat.image ? (
                <img
                  src={feat.image}
                  width={176}
                  height={176}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 sm:w-24 sm:h-24 mb-2 -ml-1 object-contain"
                />
              ) : (
                <div className="text-3xl sm:text-4xl mb-3">{feat.icon}</div>
              )}
              <h3 className="text-base sm:text-lg font-extrabold text-[#0E4B75] font-heading flex items-center gap-1.5">
                <span>{feat.image ? feat.title : `${feat.icon} ${feat.title}`}</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {feat.description}
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
          QUERO MONTAR MINHAS AULAS PELO APP
        </button>
      </div>
    </section>
  );
};
