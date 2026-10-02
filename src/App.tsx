/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IndustrialIntro } from './components/IndustrialIntro';
import { ProductEcosystem } from './components/ProductEcosystem';
import { FeaturedProducts } from './components/FeaturedProducts';
import { TechnicalSpotlight } from './components/TechnicalSpotlight';
import { MaterialHandlingSection } from './components/MaterialHandlingSection';
import { EngineeringTimeline } from './components/EngineeringTimeline';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { QualityCompliance } from './components/QualityCompliance';
import { RfqSection } from './components/RfqSection';
import { RfqModal } from './components/RfqModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductsCatalogView } from './components/ProductsCatalogView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { IndustriesView } from './components/IndustriesView';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { PRODUCTS } from './data/products';
import { ProductCategory, Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [rfqModalOpen, setRfqModalOpen] = useState<boolean>(false);
  const [preselectedProductForRfq, setPreselectedProductForRfq] = useState<string | undefined>(undefined);
  const [seoInspectorOpen, setSeoInspectorOpen] = useState<boolean>(false);

  // Sync document title dynamically with active section for SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Micro Technocam Equipments Pvt. Ltd. | Steel & Heavy Industrial Machinery',
      products: 'Industrial Equipment Catalogue | Micro Technocam Equipments',
      industries: 'Industries & Plant Applications | Micro Technocam Equipments',
      engineering: 'Engineering Lifecycle & Manufacturing | Micro Technocam',
      quality: 'Quality, Statutory Credentials & Compliance | Micro Technocam',
      about: 'About Micro Technocam Equipments Pvt. Ltd. | Est. 2010',
      contact: 'Contact & Operational Works | Micro Technocam Equipments',
    };
    document.title = titles[activeTab] || titles.home;
  }, [activeTab]);

  const handleOpenRfq = (productName?: string) => {
    setPreselectedProductForRfq(productName);
    setRfqModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
  };

  const handleCategorySelect = (categoryId: ProductCategory) => {
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProduct: Product | null = selectedProductId
    ? PRODUCTS.find((p) => p.id === selectedProductId || p.slug === selectedProductId) || null
    : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white pb-14 sm:pb-0">
      
      {/* Top Header conforming to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openRfqModal={handleOpenRfq}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <>
            {/* Section 01: Hero */}
            <HeroSection
              onExploreProducts={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestQuote={() => handleOpenRfq()}
            />

            {/* Section 02: Industrial Introduction */}
            <IndustrialIntro />

            {/* Section 03: Product Ecosystem */}
            <ProductEcosystem
              onSelectCategory={handleCategorySelect}
              onSelectProduct={handleSelectProduct}
            />

            {/* Section 04: Featured Products */}
            <FeaturedProducts
              onSelectProduct={handleSelectProduct}
              onViewAllProducts={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestQuote={handleOpenRfq}
            />

            {/* Section 07: Technical Spotlight (CCM) */}
            <TechnicalSpotlight
              onExploreCcm={() => handleSelectProduct('continuous-casting-machine')}
              onRequestQuote={handleOpenRfq}
            />

            {/* Section 08: Material Handling Focus */}
            <MaterialHandlingSection
              onSelectProduct={handleSelectProduct}
              onRequestQuote={handleOpenRfq}
            />

            {/* Section 05: Engineering Process Lifecycle */}
            <EngineeringTimeline onRequestQuote={() => handleOpenRfq()} />

            {/* Section 06: Industries & Sectors */}
            <IndustriesSection onRequestQuote={() => handleOpenRfq()} />

            {/* Section 09: Why Choose Micro Technocam */}
            <WhyChooseUs />

            {/* Section 10: Projects & Visual Gallery */}
            <GallerySection onRequestQuote={() => handleOpenRfq()} />

            {/* Section 11: Quality & Credentials */}
            <QualityCompliance />

            {/* Section 12: Request a Quote (RFQ) Form */}
            <RfqSection initialProduct={preselectedProductForRfq} />
          </>
        )}

        {activeTab === 'products' && (
          <ProductsCatalogView
            onSelectProduct={handleSelectProduct}
            onRequestQuote={handleOpenRfq}
          />
        )}

        {activeTab === 'industries' && (
          <IndustriesView
            onRequestQuote={() => handleOpenRfq()}
            onExploreProducts={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'engineering' && (
          <div className="py-14 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
                TECHNICAL METHODOLOGY
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
                ENGINEERING EXECUTION LIFECYCLE
              </h1>
            </div>
            <EngineeringTimeline onRequestQuote={() => handleOpenRfq()} />
            <TechnicalSpotlight
              onExploreCcm={() => handleSelectProduct('continuous-casting-machine')}
              onRequestQuote={handleOpenRfq}
            />
          </div>
        )}

        {activeTab === 'quality' && (
          <div className="py-14 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
                STATUTORY INTEGRITY
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
                QUALITY, STATUTORY DATA & COMPLIANCE
              </h1>
            </div>
            <QualityCompliance />
          </div>
        )}

        {activeTab === 'about' && (
          <AboutView
            onRequestQuote={() => handleOpenRfq()}
            onExploreProducts={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView onRequestQuote={() => handleOpenRfq()} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openRfqModal={handleOpenRfq}
        openSeoInspector={() => setSeoInspectorOpen(true)}
      />

      {/* Mobile Sticky Bar (<15% mobile viewport cap) */}
      <MobileStickyBar onOpenRfq={() => handleOpenRfq()} />

      {/* Reusable Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProductId)}
        onClose={() => setSelectedProductId(null)}
        onRequestQuote={handleOpenRfq}
        onSelectProduct={handleSelectProduct}
      />

      {/* Global RFQ Modal */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        preselectedProduct={preselectedProductForRfq}
      />

      {/* Technical SEO & Schema Inspector */}
      <SeoInspectorModal
        isOpen={seoInspectorOpen}
        onClose={() => setSeoInspectorOpen(false)}
      />

    </div>
  );
}
