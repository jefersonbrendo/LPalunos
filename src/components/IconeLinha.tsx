import React from 'react';

/** Ícones de linha simples (24x24) usados nas listas da página de impulsão, no lugar de emojis. */
const PATHS = {
  bola: <><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18M3.5 9.5c5 0 9 2 11.5 6.5M8 20c0-6 3-10 8-12" /></>,
  onda: <path d="M2 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />,
  quadra: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M12 5v14M3 12h4M17 12h4" /></>,
  casa: <path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" />,
  peso: <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />,
  regua: <><rect x="3" y="8" width="18" height="8" rx="1.5" /><path d="M7 8v3M11 8v4M15 8v3M19 8v3" /></>,
  muro: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 4v5.3M12 9.3v5.3M6 9.3v5.3M18 9.3v5.3M9 14.6V20M15 14.6V20" /></>,
  relogio: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M9 2h6" /></>,
  alvo: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  bateria: <><rect x="2" y="7" width="17" height="10" rx="2" /><path d="M22 11v2M6 10v4" /></>,
} as const;

export type NomeIcone = keyof typeof PATHS;

export const IconeLinha: React.FC<{ nome: NomeIcone; escuro?: boolean }> = ({ nome, escuro }) => (
  <span
    className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center ${escuro ? 'bg-[#14110B] text-[#FFC60B]' : 'bg-[#FFC60B] text-[#14110B]'}`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {PATHS[nome]}
    </svg>
  </span>
);
