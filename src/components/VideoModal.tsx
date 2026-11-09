import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { LINKS } from '../config/links';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fechar vídeo"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-3 pr-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Play className="w-3.5 h-3.5 fill-current" /> Demonstração Rápida
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading mt-0.5">
            Veja o Código da Areia Funcionando (1 min)
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            [link do vídeo: LINK_VIDEO]
          </p>
        </div>

        {/* Video Player or Embed */}
        <div className="relative aspect-video w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
          {LINKS.VIDEO && LINKS.VIDEO.includes('http') ? (
            <iframe
              src={LINKS.VIDEO}
              title="Demonstração do App Código da Areia"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40">
                <Play className="w-8 h-8 ml-1 fill-current" />
              </div>
              <p className="text-sm text-slate-300 font-medium">
                Vídeo de demonstração do app funcionando na areia.
              </p>
              <span className="inline-block text-xs text-amber-400 bg-amber-950/60 px-3 py-1 rounded border border-amber-700/50 font-mono">
                Substitua o LINK_VIDEO em src/config/links.ts
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400">
          <span>Pronto para usar na sua próxima aula</span>
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('planos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors"
          >
            QUERO O MEU ACESSO
          </button>
        </div>
      </div>
    </div>
  );
};
