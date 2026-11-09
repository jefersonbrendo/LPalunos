import React from 'react';
import mockupImage from '../assets/images/mockup_app_manchete.webp';

interface AppMockupProps {
  activeScreen?: 'exercise' | 'filters' | 'categories';
  caption?: string;
}

export const AppMockup: React.FC<AppMockupProps> = ({ 
  activeScreen = 'exercise',
  caption
}) => {
  // Quando for a tela principal de exercício (ou o print do app solicitado pelo usuário)
  if (activeScreen === 'exercise') {
    return (
      <div className="relative mx-auto w-full max-w-[243px] sm:max-w-[274px]">
        {/* Outer ambient glow */}
        <div className="absolute -inset-3 bg-gradient-to-tr from-[#FF9F1C]/30 via-[#0E4B75]/25 to-[#FF4A3F]/20 rounded-[48px] blur-xl opacity-80 pointer-events-none"></div>

        {/* Celular da imagem enviada, recortado do fundo branco (sem moldura extra) */}
        <img
          src={mockupImage}
          width={667}
          height={1322}
          alt="App Código da Areia - Exercício MAN-INI-4 Manchete Cruzada com Deslocamento em V"
          className="relative w-full h-auto block drop-shadow-[0_20px_25px_rgba(15,23,42,0.35)]"
          loading="eager"
        />


        {caption && (
          <p className="mt-2 text-xs font-semibold text-slate-700 text-center">
            {caption}
          </p>
        )}
      </div>
    );
  }

  // Telas interativas para o carrossel (filtros e categorias)
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[315px]">
      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF9F1C]/25 via-[#0E4B75]/20 to-[#FF4A3F]/15 rounded-[48px] blur-xl opacity-70"></div>

      {/* Phone outer frame */}
      <div className="relative rounded-[40px] sm:rounded-[44px] border-[5px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden aspect-[9/18.5] flex flex-col text-slate-100">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
        </div>

        {/* Status bar */}
        <div className="pt-3 px-6 pb-1 flex justify-between items-center text-[11px] text-slate-300 font-medium z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-4 h-2 border border-slate-300 rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className="px-4 py-2 border-b border-slate-800/80 bg-[#0B1526] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#FF9F1C] text-base">🏐</span>
            <div>
              <div className="text-xs font-bold text-[#FF9F1C] font-heading tracking-wide uppercase">Código da Areia</div>
              <div className="text-[10px] text-slate-400 leading-none">240 Exercícios Prontos</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0E4B75] text-cyan-200 border border-cyan-400/30">
            PRO
          </span>
        </div>

        {/* Screen Content based on state */}
        <div className="flex-1 overflow-y-auto p-3 text-left space-y-2.5 bg-gradient-to-b from-[#0B1324] via-[#0E1A32] to-[#0A1222]">
          {activeScreen === 'filters' && (
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">Filtros Rápidos</div>
              <div className="space-y-1.5">
                <span className="text-[10px] text-[#FF9F1C] font-semibold">Tamanho da Turma</span>
                <div className="grid grid-cols-4 gap-1">
                  {['2 Alunos', '4 Alunos', '6 Alunos', '8+'].map((t, idx) => (
                    <div key={t} className={`text-center py-1 rounded text-[10px] font-semibold border ${idx === 1 ? 'bg-[#FF9F1C] text-slate-950 border-[#FF9F1C]' : 'bg-slate-900 text-slate-300 border-slate-800'}`}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] text-cyan-400 font-semibold">Nível de Habilidade</span>
                <div className="grid grid-cols-3 gap-1">
                  {['Iniciante', 'Intermediário', 'Avançado'].map((lvl, idx) => (
                    <div key={lvl} className={`text-center py-1 rounded text-[10px] font-semibold border ${idx === 0 ? 'bg-[#0E4B75] text-cyan-100 border-cyan-400' : 'bg-slate-900 text-slate-300 border-slate-800'}`}>
                      {lvl}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-300 font-semibold">Fundamentos Selecionados</span>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#FF9F1C]/20 text-[#FF9F1C] border border-[#FF9F1C]/50">🏐 Manchete & Passe</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300">Toque</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300">Saque</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300">Ataque</span>
                </div>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400">Exibindo <strong>40 exercícios</strong> encontrados</span>
              </div>
            </div>
          )}

          {activeScreen === 'categories' && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">Fundamentos do Vôlei</div>
              {[
                { name: 'Manchete & Passe', count: '40 exercícios', code: 'MAN', color: 'border-[#FF9F1C]/50 text-[#FF9F1C]' },
                { name: 'Toque & Levantamento', count: '35 exercícios', code: 'TOQ', color: 'border-cyan-400/50 text-cyan-400' },
                { name: 'Saque na Areia', count: '30 exercícios', code: 'SAQ', color: 'border-emerald-400/50 text-emerald-400' },
                { name: 'Ataque (Cortada e Largada)', count: '35 exercícios', code: 'ATQ', color: 'border-[#FF4A3F]/50 text-[#FF4A3F]' },
                { name: 'Bloqueio & Leitura', count: '25 exercícios', code: 'BLQ', color: 'border-sky-400/50 text-sky-400' },
                { name: 'Defesa & Transição', count: '35 exercícios', code: 'DEF', color: 'border-indigo-400/50 text-indigo-400' },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div>
                    <div className="text-xs font-semibold text-white">{item.name}</div>
                    <div className="text-[10px] text-slate-400">{item.count}</div>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 border ${item.color}`}>
                    {item.code}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Home indicator bar */}
        <div className="py-1.5 bg-slate-950 flex justify-center items-center">
          <div className="w-24 h-1 bg-slate-600 rounded-full"></div>
        </div>
      </div>


      {caption && (
        <p className="mt-2 text-xs font-semibold text-slate-700 text-center">
          {caption}
        </p>
      )}
    </div>
  );
};
