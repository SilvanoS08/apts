import React from 'react';
import { ExternalLink, MapPin, Train, TreePine, Utensils, CheckCircle2 } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/properties';

export const NeighborhoodsSection: React.FC = () => {
  return (
    <section id="bairros" className="py-20 sm:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Regiões Privilegiadas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 mt-4">
            Conheça os 3 Polos Mais Desejados da Zona Leste
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Cada região possui identidade própria, excelente mobilidade urbana e alto índice de valorização imobiliária. Escolha o que melhor se adapta à sua família.
          </p>
        </div>

        <div className="space-y-16">
          {NEIGHBORHOODS.map((neighborhood, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={neighborhood.id}
                id={`bairro-${neighborhood.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] ${isReverse ? 'lg:order-2' : ''}`}>
                    <img
                      src={neighborhood.image}
                      alt={`Apartamentos no bairro ${neighborhood.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-400 text-xs font-semibold uppercase tracking-wider inline-block mb-2">
                        {neighborhood.tagline}
                      </span>
                      <h3 className="text-3xl font-bold font-serif-display">
                        {neighborhood.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${isReverse ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
                        <MapPin className="w-4 h-4" /> Zona Leste • São Paulo
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-bold font-serif-display text-stone-900">
                        {neighborhood.subtitle}
                      </h4>

                      <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                        {neighborhood.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-6 space-y-2.5">
                        <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">
                          Principais Pontos Fortes:
                        </span>
                        {neighborhood.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-stone-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metro & Transportation Badges */}
                      <div className="mt-6 flex flex-wrap gap-2 items-center">
                        <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                          <Train className="w-3.5 h-3.5 text-amber-600" /> Estações próximas:
                        </span>
                        {neighborhood.metroStations.map((station, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200"
                          >
                            {station}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Direct CTA Button */}
                    <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        {neighborhood.stats.slice(0, 2).map((stat, stIdx) => (
                          <div key={stIdx}>
                            <div className="text-base font-bold text-stone-900">{stat.value}</div>
                            <div className="text-[11px] text-stone-500 uppercase">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <a
                        id={`bairro-cta-${neighborhood.id}`}
                        href={neighborhood.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>{neighborhood.formLabel}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
