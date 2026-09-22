import React from 'react';
import { X, ExternalLink, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { FORMS_LINKS, NEIGHBORHOODS } from '../data/properties';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNeighborhood?: 'tatuape' | 'mooca' | 'vila-ema' | null;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  defaultNeighborhood = null,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="interest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="interest-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 sm:p-7 relative">
          <button
            id="close-interest-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <CheckCircle className="w-3.5 h-3.5" /> Atendimento Exclusivo
          </div>
          <h3 className="text-2xl font-bold font-serif-display text-white">
            Qual bairro você tem interesse?
          </h3>
          <p className="text-stone-300 text-sm mt-1">
            Selecione a região desejada para preencher o formulário oficial e receber plantas, tabela de preços e condições de pagamento:
          </p>
        </div>

        {/* Options */}
        <div className="p-6 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
          {NEIGHBORHOODS.map((item) => {
            const isSelected = defaultNeighborhood === item.id;
            return (
              <a
                key={item.id}
                id={`modal-option-${item.id}`}
                href={item.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-500/20 shadow-sm'
                    : 'border-stone-200 hover:border-amber-500 hover:bg-stone-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium">
                        Zona Leste
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center gap-2 self-end sm:self-center px-4 py-2 rounded-lg bg-amber-600 text-white font-semibold text-sm group-hover:bg-amber-700 transition-colors shrink-0">
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}

          {/* Quick link hint */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
            <p>
              Ao clicar, você será direcionado para o Google Forms oficial da região selecionada. Seus dados serão mantidos em sigilo e você receberá o book digital completo sem compromisso.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
          <span>Tatuapé • Mooca • Vila Ema</span>
          <button
            onClick={onClose}
            className="text-stone-700 hover:text-stone-900 font-medium underline"
          >
            Continuar navegando no site
          </button>
        </div>
      </div>
    </div>
  );
};
