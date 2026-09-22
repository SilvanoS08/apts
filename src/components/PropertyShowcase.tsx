import React, { useState } from 'react';
import { ExternalLink, Bed, Bath, Car, Maximize2, MapPin, Sparkles, Filter } from 'lucide-react';
import { PROPERTIES, FORMS_LINKS } from '../data/properties';
import { PropertyItem } from '../types';

export const PropertyShowcase: React.FC = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesNeighborhood =
      selectedNeighborhood === 'all' || property.neighborhoodId === selectedNeighborhood;
    const matchesStatus =
      selectedStatus === 'all' || property.status === selectedStatus;
    return matchesNeighborhood && matchesStatus;
  });

  return (
    <section id="empreendimentos" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              Catálogo Selecionado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 mt-4">
              Empreendimentos em Destaque
            </h2>
            <p className="mt-3 text-stone-600 text-base max-w-xl">
              Plantas inteligentes com acabamentos nobres, varanda com churrasqueira e infraestrutura de lazer incomparável.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200">
              <button
                id="filter-all"
                onClick={() => setSelectedNeighborhood('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedNeighborhood === 'all'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todos os Bairros
              </button>
              <button
                id="filter-tatuape"
                onClick={() => setSelectedNeighborhood('tatuape')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedNeighborhood === 'tatuape'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tatuapé
              </button>
              <button
                id="filter-mooca"
                onClick={() => setSelectedNeighborhood('mooca')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedNeighborhood === 'mooca'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Mooca
              </button>
              <button
                id="filter-vila-ema"
                onClick={() => setSelectedNeighborhood('vila-ema')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedNeighborhood === 'vila-ema'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Vila Ema
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              id={property.id}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-stone-900/85 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-wider">
                      {property.status}
                    </span>
                    {property.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-600/90 backdrop-blur-md text-white text-xs font-medium">
                        {property.tag}
                      </span>
                    )}
                  </div>

                  {/* Neighborhood Pin Badge */}
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-1.5 text-xs font-semibold drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{property.neighborhoodName} • {property.addressSummary}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif-display text-stone-900 group-hover:text-amber-700 transition-colors">
                    {property.name}
                  </h3>

                  {/* Pricing info */}
                  <div className="mt-3 pb-4 border-b border-stone-200">
                    <div className="text-xs text-stone-500 uppercase font-medium">A partir de</div>
                    <div className="text-2xl font-bold text-stone-900">{property.priceFrom}</div>
                    {property.estimatedInstallment && (
                      <div className="text-xs text-amber-700 font-semibold mt-0.5">
                        {property.estimatedInstallment}
                      </div>
                    )}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-b border-stone-200 text-xs text-stone-600">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{property.sizeRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{property.suites}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{property.parkingSpots}</span>
                    </div>
                  </div>

                  {/* Features highlights */}
                  <div className="mt-4 space-y-1.5">
                    {property.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-stone-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Tenho Interesse with specific Google Form link */}
              <div className="p-6 pt-0">
                <a
                  id={`prop-btn-${property.id}`}
                  href={property.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 group/btn"
                >
                  <span>Tenho Interesse</span>
                  <ExternalLink className="w-4 h-4 text-amber-400 group-hover/btn:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global callout banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display">
              Procurando outra metragem ou localização específica?
            </h3>
            <p className="text-sm text-stone-400 mt-1 max-w-xl">
              Nossa equipe de consultores possui acesso à carteira completa de unidades off-market e lançamentos secretos em Tatuapé, Mooca e Vila Ema.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              id="showcase-cta-tatuape"
              href={FORMS_LINKS.tatuape}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs tracking-wide transition-colors flex items-center gap-1.5"
            >
              <span>Interesse no Tatuapé</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              id="showcase-cta-mooca"
              href={FORMS_LINKS.mooca}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-400 font-semibold text-xs tracking-wide transition-colors flex items-center gap-1.5 border border-stone-700"
            >
              <span>Interesse na Mooca</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              id="showcase-cta-vila-ema"
              href={FORMS_LINKS.vilaEma}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-400 font-semibold text-xs tracking-wide transition-colors flex items-center gap-1.5 border border-stone-700"
            >
              <span>Interesse na Vila Ema</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
