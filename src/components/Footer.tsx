
import React, { useMemo } from 'react';

export const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-10 px-4 bg-[#EAE4D5] border-t border-[#DDD4C0] text-center text-xs text-slate-600 space-y-3">
      <div className="max-w-3xl mx-auto space-y-2">

        {/* Logo Branding */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <img src="/favicon.svg" alt="Logo Código da Areia" className="w-12 h-12 drop-shadow-md transition-transform hover:scale-105" />
          <span className="font-extrabold text-base text-[#0E4B75] uppercase tracking-wider">Código da Areia</span>
        </div>

        {/* Políticas */}
        <p className="text-slate-600 font-medium">
          <a href="#termos" className="hover:text-[#0E4B75] transition-colors underline">Política de Privacidade</a>
          {' • '}
          <a href="#termos" className="hover:text-[#0E4B75] transition-colors underline">Termos de Uso</a>
        </p>

        {/* Copyright */}
        <p className="text-slate-600 font-medium">
          © {currentYear} Código da Areia. Todos os direitos reservados.
        </p>

        {/* Aviso Legal */}
        <p className="text-[11px] text-slate-500 max-w-lg mx-auto pt-1 leading-normal font-medium">
          Aviso: os resultados dependem da aplicação de cada profissional.
        </p>
      </div>
    </footer>
  );
};
