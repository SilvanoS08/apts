import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronUp, MapPin } from 'lucide-react';
import { FORMS_LINKS } from '../data/properties';

interface FloatingCtaBarProps {
  onOpenInterestModal: (neighborhood?: 'tatuape' | 'mooca' | 'vila-ema') => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({ onOpenInterestModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      id="floating-cta-bar"
      aria-label="Ações rápidas de interesse"
      className="fixed bottom-0 inset-x-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 text-white p-3 sm:p-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="hidden md:flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-stone-300">
            Plantas e condições exclusivas disponíveis para envio imediato:
          </span>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            id="floating-btn-modal"
            onClick={() => onOpenInterestModal()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors shrink-0"
          >
            <span>Ver Todos</span>
          </button>

          <a
            id="floating-link-tatuape"
            href={FORMS_LINKS.tatuape}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            <span>Tatuapé</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            id="floating-link-mooca"
            href={FORMS_LINKS.mooca}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            <span>Mooca</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            id="floating-link-vila-ema"
            href={FORMS_LINKS.vilaEma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            <span>Vila Ema</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
};
