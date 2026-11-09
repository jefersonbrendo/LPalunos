import React, { useMemo } from 'react';

export const TopBanner: React.FC = () => {
  // Gera automaticamente a data de hoje no formato dd/mm/aaaa
  const todayFormatted = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  return (
    <aside
      aria-label="Aviso de Lançamento"
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF9F1C] via-[#F58F00] to-[#FF9F1C] text-slate-950 py-2 px-3 text-center shadow-md font-bold text-xs sm:text-sm tracking-wide border-b border-[#E07D00]/30"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 leading-snug font-extrabold">
        <span>CONDIÇÃO DE LANÇAMENTO VÁLIDA SÓ ATÉ HOJE ({todayFormatted})</span>
      </div>
    </aside>
  );
};
