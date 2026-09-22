import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { FAQS, FORMS_LINKS } from '../data/properties';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 mt-4">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-stone-600 text-base">
            Tudo o que você precisa saber antes de registrar seu interesse e dar o próximo passo para o seu novo apartamento.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 bg-stone-50/50"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA underneath FAQ */}
        <div className="mt-12 text-center p-8 bg-stone-100 rounded-2xl border border-stone-200">
          <h4 className="text-lg font-bold text-stone-900">
            Ainda tem dúvidas? Fale diretamente com nossa assessoria:
          </h4>
          <p className="text-sm text-stone-600 mt-1 mb-5">
            Preencha o formulário rápido de interesse da sua região para receber atendimento exclusivo por WhatsApp ou telefone:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              id="faq-cta-tatuape"
              href={FORMS_LINKS.tatuape}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors"
            >
              <span>Tenho Interesse: Tatuapé</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              id="faq-cta-mooca"
              href={FORMS_LINKS.mooca}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-bold transition-colors"
            >
              <span>Tenho Interesse: Mooca</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              id="faq-cta-vila-ema"
              href={FORMS_LINKS.vilaEma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-bold transition-colors"
            >
              <span>Tenho Interesse: Vila Ema</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
