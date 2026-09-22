import React from 'react';
import { MapPin, CreditCard, Sparkles, TrendingUp, ShieldCheck, HeartHandshake } from 'lucide-react';
import { DIFFERENTIALS, FORMS_LINKS } from '../data/properties';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Por que comprar conosco?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 mt-4">
            A Experiência Completa na Zona Leste
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Segurança jurídica, as melhores construtoras e assessoria completa do primeiro contato até a entrega das chaves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
                  {getIcon(diff.iconName)}
                </div>
                <h3 className="text-xl font-bold font-serif-display text-stone-900 mb-3">
                  {diff.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with 3 buttons */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-serif-display text-stone-900">
                Atendimento Personalizado & Sem Compromisso
              </h4>
              <p className="text-sm text-stone-600 mt-1">
                Receba o book digital completo com fotos das áreas comuns, plantas decoradas e simulação exata de fluxo de pagamento.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0 w-full lg:w-auto">
            <a
              id="diff-btn-tatuape"
              href={FORMS_LINKS.tatuape}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial text-center px-4 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              Tenho Interesse: Tatuapé
            </a>
            <a
              id="diff-btn-mooca"
              href={FORMS_LINKS.mooca}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial text-center px-4 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs shadow-sm transition-colors"
            >
              Tenho Interesse: Mooca
            </a>
            <a
              id="diff-btn-vila-ema"
              href={FORMS_LINKS.vilaEma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial text-center px-4 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs shadow-sm transition-colors"
            >
              Tenho Interesse: Vila Ema
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
