/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NeighborhoodsSection } from './components/NeighborhoodsSection';
import { PropertyShowcase } from './components/PropertyShowcase';
import { FinancingSimulator } from './components/FinancingSimulator';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCtaBar } from './components/FloatingCtaBar';
import { InterestModal } from './components/InterestModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<'tatuape' | 'mooca' | 'vila-ema' | null>(null);

  const handleOpenInterestModal = (neighborhood?: 'tatuape' | 'mooca' | 'vila-ema') => {
    setSelectedNeighborhood(neighborhood || null);
    setModalOpen(true);
  };

  const handleCloseInterestModal = () => {
    setModalOpen(false);
    setSelectedNeighborhood(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-600 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenInterestModal={handleOpenInterestModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInterestModal={handleOpenInterestModal} />

        {/* Neighborhoods Spotlight */}
        <NeighborhoodsSection />

        {/* Property Catalog Showcase */}
        <PropertyShowcase />

        {/* Financing and Mortgage Simulator */}
        <FinancingSimulator />

        {/* Value Differentials */}
        <DifferentialsSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Sticky Quick-Action Bar */}
      <FloatingCtaBar onOpenInterestModal={handleOpenInterestModal} />

      {/* Footer */}
      <Footer />

      {/* Interest Selector Modal */}
      <InterestModal
        isOpen={modalOpen}
        onClose={handleCloseInterestModal}
        defaultNeighborhood={selectedNeighborhood}
      />
    </div>
  );
}
