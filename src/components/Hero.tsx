import React from 'react';
import { ExternalLink, MapPin, Sparkles, ShieldCheck, Key, TrendingUp, Check } from 'lucide-react';
import { FORMS_LINKS } from '../data/properties';

interface HeroProps {
  onOpenInterestModal: (neighborhood?: 'tatuape' | 'mooca' | 'vila-ema') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterestModal }) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
          alt="Apartamentos Modernos em São Paulo"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Lançamentos & Prontos para Morar na Zona Leste
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight text-white leading-tight sm:leading-none">
            Apartamentos Exclusivos no <span className="text-amber-400 italic">Tatuapé</span>,{' '}
            <span className="text-amber-400 italic">Mooca</span> e{' '}
            <span className="text-amber-400 italic">Vila Ema</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Descubra plantas inteligentes de 1 a 3 dormitórios, varanda gourmet e lazer de resort completo nas três regiões mais valorizadas e charmosas de São Paulo.
          </p>
        </div>

        {/* 3 Neighborhoods Direct "Tenho Interesse" Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card Tatuapé */}
          <div className="group relative bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700 hover:border-amber-500/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Alto Padrão
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Metrô & CERET
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                Tatuapé
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Sofisticação e gastronomia refinada nas Ruas Itapura e Emílio Mallet. Plantas de 2 e 3 dormitórios com lazer de clube.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-400 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Próximo aos shoppings e CERET
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Varanda gourmet com churrasqueira
                </li>
              </ul>
            </div>

            <a
              id="hero-btn-tatuape"
              href={FORMS_LINKS.tatuape}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all duration-200"
            >
              <span>Tenho Interesse no Tatuapé</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card Mooca */}
          <div className="group relative bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700 hover:border-amber-500/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Tradição & Charme
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Paes de Barros
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                Mooca
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Aconchego, segurança e a verdadeira essência de São Paulo. Ao lado de cantinas consagradas, Clube Juventus e Mooca Plaza.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-400 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Bairro familiar com excelente segurança
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Opções prontas e em construção
                </li>
              </ul>
            </div>

            <a
              id="hero-btn-mooca"
              href={FORMS_LINKS.mooca}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all duration-200"
            >
              <span>Tenho Interesse na Mooca</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card Vila Ema */}
          <div className="group relative bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 border border-stone-700 hover:border-amber-500/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Crescimento Rápido
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Monotrilho Prata
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                Vila Ema
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                O melhor custo por m² da Zona Leste. Condomínios com estrutura de resort, mobilidade imediata e entrada facilitada.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-400 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> A poucos passos de estações do Monotrilho
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Entrada facilitada e parcelas que cabem no bolso
                </li>
              </ul>
            </div>

            <a
              id="hero-btn-vila-ema"
              href={FORMS_LINKS.vilaEma}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all duration-200"
            >
              <span>Tenho Interesse na Vila Ema</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Trust & Guarantee Strip */}
        <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-amber-400 text-2xl sm:text-3xl font-bold font-serif-display">+18</span>
            <span className="text-xs sm:text-sm text-stone-400 mt-0.5">Opções de Plantas</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-amber-400 text-2xl sm:text-3xl font-bold font-serif-display">1 a 3</span>
            <span className="text-xs sm:text-sm text-stone-400 mt-0.5">Dormitórios c/ Suíte</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-amber-400 text-2xl sm:text-3xl font-bold font-serif-display">FGTS</span>
            <span className="text-xs sm:text-sm text-stone-400 mt-0.5">Aceito na Entrada</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-amber-400 text-2xl sm:text-3xl font-bold font-serif-display">100%</span>
            <span className="text-xs sm:text-sm text-stone-400 mt-0.5">Assessoria de Crédito</span>
          </div>
        </div>
      </div>
    </section>
  );
};
