import React from 'react';
import { ArrowRight, FileCheck, Layers, Wrench, Shield } from 'lucide-react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProducts, onRequestQuote }) => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 border-b border-neutral-800">
      {/* Background Image Container with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg"
          alt="Heavy metallurgical steel plant and engineering equipment facility"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
        />
        {/* Measured scrim for legibility without color wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/70" />
        <div className="absolute inset-0 bg-tech-grid opacity-30" />
      </div>

      {/* Main Content Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="max-w-3xl">
          
          {/* Engineering Lead-in Label (clean text, no pill badges) */}
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-medium tracking-widest uppercase text-orange-500">
            <span>B2B HEAVY INDUSTRIAL ENGINEERING</span>
            <span aria-hidden="true" className="text-neutral-500">/</span>
            <span>CHHATTISGARH & DELHI</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08] text-balance">
            ENGINEERING EQUIPMENT FOR STEEL & HEAVY INDUSTRIES
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
            Industrial equipment and engineering solutions for steel, metallurgical, material handling and heavy industrial applications. Designed for demanding continuous-duty plant environments.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded transition-colors shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 active:bg-neutral-950 border border-neutral-700 rounded transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Verified Technical Trust Strip (No fake metrics, clean unboxed text) */}
          <div className="mt-12 pt-6 border-t border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-400">
              <span className="text-white font-medium">EST. 2010</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">STEEL & METALLURGICAL EQUIPMENT</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">CUSTOM ENGINEERING</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">CHHATTISGARH, INDIA</span>
            </div>
          </div>

        </div>
      </div>

      {/* Engineering Focus Sub-strip */}
      <div className="relative z-10 border-t border-neutral-850 bg-neutral-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3 text-neutral-300">
              <Layers className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Secondary Metallurgy & LRF</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Wrench className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Continuous Casting Machines</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <FileCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Heavy Sponge Iron Conveyors</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Shield className="w-4 h-4 text-orange-500 shrink-0" />
              <span>EOT & Metallurgical Cranes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
