import React, { useState, useId } from 'react';
import { Calculator, ExternalLink, ShieldCheck, Check, DollarSign, HelpCircle } from 'lucide-react';
import { FORMS_LINKS } from '../data/properties';

export const FinancingSimulator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(550000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [years, setYears] = useState<number>(30);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<'tatuape' | 'mooca' | 'vila-ema'>('tatuape');

  const priceInputId = useId();
  const downPaymentInputId = useId();
  const yearsInputId = useId();

  // Calculations
  const downPaymentValue = (propertyPrice * downPaymentPercent) / 100;
  const financedAmount = propertyPrice - downPaymentValue;
  const totalMonths = years * 12;
  
  // Approximate SAC monthly interest (~9.5% per annum -> ~0.76% per month)
  const monthlyRate = 0.0076;
  const initialAmortization = financedAmount / totalMonths;
  const initialInterest = financedAmount * monthlyRate;
  const estimatedFirstInstallment = initialAmortization + initialInterest;

  const currentFormUrl = FORMS_LINKS[selectedNeighborhood === 'tatuape' ? 'tatuape' : selectedNeighborhood === 'mooca' ? 'mooca' : 'vilaEma'];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-stone-900 text-white relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Planejamento Financeiro Descomplicado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-white">
            Simulador de Financiamento Imobiliário
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            Estime as parcelas do seu apartamento no Tatuapé, Mooca ou Vila Ema. Utilize seu FGTS e parcele a entrada durante as obras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-2xl p-6 sm:p-8 border border-stone-700 shadow-xl">
            <h3 className="text-xl font-bold font-serif-display text-white mb-6 flex items-center gap-2">
              <span>Parâmetros da Simulação</span>
            </h3>

            {/* Neighborhood selection for the form */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
                1. Região de Preferência
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedNeighborhood('tatuape')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    selectedNeighborhood === 'tatuape'
                      ? 'bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-stone-700/80 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  Tatuapé
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedNeighborhood('mooca')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    selectedNeighborhood === 'mooca'
                      ? 'bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-stone-700/80 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  Mooca
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedNeighborhood('vila-ema')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    selectedNeighborhood === 'vila-ema'
                      ? 'bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-stone-700/80 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  Vila Ema
                </button>
              </div>
            </div>

            {/* Property Price Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={priceInputId} className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  2. Valor Estimado do Imóvel
                </label>
                <span className="text-lg font-bold text-amber-400">{formatCurrency(propertyPrice)}</span>
              </div>
              <input
                id={priceInputId}
                type="range"
                min="350000"
                max="1600000"
                step="25000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>R$ 350 mil</span>
                <span>R$ 1 milhão</span>
                <span>R$ 1.6 milhão</span>
              </div>
            </div>

            {/* Down Payment % Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={downPaymentInputId} className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  3. Entrada Sugerida ({downPaymentPercent}%)
                </label>
                <span className="text-base font-bold text-stone-200">{formatCurrency(downPaymentValue)}</span>
              </div>
              <input
                id={downPaymentInputId}
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>10% (mínimo obras)</span>
                <span>20% (bancos)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Years Slider */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={yearsInputId} className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  4. Prazo do Financiamento
                </label>
                <span className="text-base font-bold text-stone-200">{years} Anos ({totalMonths} meses)</span>
              </div>
              <input
                id={yearsInputId}
                type="range"
                min="10"
                max="35"
                step="5"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>10 anos</span>
                <span>20 anos</span>
                <span>35 anos</span>
              </div>
            </div>

            <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-700/60 text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Simulação estimada baseada no sistema SAC e taxas médias praticadas pelas instituições financeiras.</span>
            </div>
          </div>

          {/* Result Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-stone-800 to-stone-850 rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                Resultado Estimado
              </div>

              <div className="mb-6">
                <div className="text-xs text-stone-400 uppercase font-medium">Parcela Inicial Estimada (após habite-se)</div>
                <div className="text-3xl sm:text-4xl font-bold font-serif-display text-amber-400 mt-1">
                  {formatCurrency(estimatedFirstInstallment)}
                  <span className="text-xs font-sans text-stone-300 font-normal"> /mês</span>
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  *Parcelas decrescentes no sistema SAC
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-b border-stone-700 text-sm">
                <div className="flex justify-between text-stone-300">
                  <span>Valor do Imóvel:</span>
                  <span className="font-semibold text-white">{formatCurrency(propertyPrice)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Entrada ({downPaymentPercent}%):</span>
                  <span className="font-semibold text-amber-400">{formatCurrency(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Valor a Financiar:</span>
                  <span className="font-semibold text-white">{formatCurrency(financedAmount)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Uso do FGTS:</span>
                  <span className="font-semibold text-emerald-400">Permitido</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Entrada parcelada no período de obras</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Aprovação de crédito gratuita e sem burocracia</span>
                </div>
              </div>
            </div>

            {/* Direct Button to Google Forms */}
            <div className="mt-8 pt-4">
              <a
                id="simulator-tenho-interesse-btn"
                href={currentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all duration-200"
              >
                <span>Tenho Interesse - Simular Minha Proposta</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2">
                Direciona para o formulário oficial de {selectedNeighborhood === 'tatuape' ? 'Tatuapé' : selectedNeighborhood === 'mooca' ? 'Mooca' : 'Vila Ema'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
