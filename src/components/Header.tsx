import React, { useState } from 'react';
import { Building2, Menu, X, ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { FORMS_LINKS } from '../data/properties';

interface HeaderProps {
  onOpenInterestModal: (neighborhood?: 'tatuape' | 'mooca' | 'vila-ema') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInterestModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-stone-900 text-amber-500 flex items-center justify-center shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display font-bold text-lg sm:text-xl text-stone-900 tracking-tight leading-none">
                ZL Prime <span className="text-amber-600 font-sans font-semibold text-sm">Residencial</span>
              </span>
              <span className="text-[11px] text-stone-500 font-medium tracking-wide uppercase mt-1">
                Tatuapé • Mooca • Vila Ema
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#bairros" className="hover:text-amber-600 transition-colors">
              Bairros
            </a>
            <a href="#empreendimentos" className="hover:text-amber-600 transition-colors">
              Empreendimentos
            </a>
            <a href="#simulador" className="hover:text-amber-600 transition-colors">
              Simulador
            </a>
            <a href="#diferenciais" className="hover:text-amber-600 transition-colors">
              Diferenciais
            </a>
            <a href="#faq" className="hover:text-amber-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Desktop Action with Dropdown for 3 Forms */}
          <div className="hidden lg:flex items-center gap-3 relative">
            <div className="relative">
              <button
                id="header-tenho-interesse-dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 250)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white font-semibold text-sm hover:bg-amber-700 shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Tenho Interesse</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold text-stone-400">
                    Escolha a sua região:
                  </div>
                  <a
                    id="header-link-tatuape"
                    href={FORMS_LINKS.tatuape}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors"
                  >
                    <span>Apartamentos no Tatuapé</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                  <a
                    id="header-link-mooca"
                    href={FORMS_LINKS.mooca}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors"
                  >
                    <span>Apartamentos na Mooca</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                  <a
                    id="header-link-vila-ema"
                    href={FORMS_LINKS.vilaEma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors"
                  >
                    <span>Apartamentos na Vila Ema</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                  <div className="border-t border-stone-100 my-1"></div>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenInterestModal();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-amber-700 hover:bg-amber-50 font-semibold"
                  >
                    Ver comparativo de regiões
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-mobile-interest-btn"
              onClick={() => onOpenInterestModal()}
              className="px-3 py-2 rounded-lg bg-amber-600 text-white text-xs font-semibold shadow-xs"
            >
              Tenho Interesse
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-4 space-y-3 animate-in fade-in duration-150">
            <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700 px-2">
              <a
                href="#bairros"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-100"
              >
                Bairros (Tatuapé, Mooca e Vila Ema)
              </a>
              <a
                href="#empreendimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-100"
              >
                Empreendimentos em Destaque
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-100"
              >
                Simulador de Financiamento
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-100"
              >
                Vantagens da Zona Leste
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-100"
              >
                Perguntas Frequentes
              </a>
            </div>

            <div className="pt-3 border-t border-stone-200 px-2 space-y-2">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider px-3">
                Formulários de Interesse:
              </div>
              <a
                href={FORMS_LINKS.tatuape}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold"
              >
                <span>Tenho Interesse no Tatuapé</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={FORMS_LINKS.mooca}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold"
              >
                <span>Tenho Interesse na Mooca</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={FORMS_LINKS.vilaEma}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold"
              >
                <span>Tenho Interesse na Vila Ema</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
