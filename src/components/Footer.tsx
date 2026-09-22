import React from 'react';
import { Building2, ExternalLink, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { FORMS_LINKS, NEIGHBORHOODS } from '../data/properties';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-serif-display font-bold text-xl text-white">
                ZL Prime <span className="text-amber-400 font-sans font-medium text-xs">Residencial</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Especialistas em vendas de apartamentos residenciais nas regiões mais valorizadas da Zona Leste: Tatuapé, Mooca e Vila Ema.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Intermediação credenciada e segura</span>
            </div>
          </div>

          {/* Quick links to Google Forms */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Formulários de Interesse
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  id="footer-link-tatuape"
                  href={FORMS_LINKS.tatuape}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tenho Interesse no Tatuapé</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-link-mooca"
                  href={FORMS_LINKS.mooca}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tenho Interesse na Mooca</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-link-vila-ema"
                  href={FORMS_LINKS.vilaEma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tenho Interesse na Vila Ema</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#bairros" className="hover:text-amber-400 transition-colors">
                  Regiões em Destaque
                </a>
              </li>
              <li>
                <a href="#empreendimentos" className="hover:text-amber-400 transition-colors">
                  Apartamentos à Venda
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Parcelas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Vantagens e Condições
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas e Respostas
                </a>
              </li>
            </ul>
          </div>

          {/* Region coverage */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Polos de Atendimento
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Tatuapé: Região do CERET e Itapura</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Mooca: Paes de Barros e Juventus</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Vila Ema: Eixo Av. Vila Ema & Monotrilho</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-stone-800 text-[11px] text-stone-400 space-y-2 leading-relaxed">
          <p>
            *Todas as imagens, ilustrações artísticas, perspectivas e plantas têm caráter meramente ilustrativo. Os acabamentos, móveis e decorações serão entregues conforme o Memorial Descritivo de cada empreendimento.
          </p>
          <p>
            *As condições de financiamento, valores de entrada e aprovação de crédito imobiliário estão sujeitos às políticas vigentes das instituições financeiras e análise documental individual.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400">
            <span>© {new Date().getFullYear()} ZL Prime Residencial. Todos os direitos reservados.</span>
            <span>São Paulo - SP • Zona Leste</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
