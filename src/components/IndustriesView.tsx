import React from 'react';
import { INDUSTRIES } from '../data/industries';
import { Industry } from '../types';
import { ArrowRight, Factory, CheckCircle2, Shield, Wrench } from 'lucide-react';

interface IndustriesViewProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  return (
    <div className="py-14 bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            SECTOR APPLICATIONS & PLANT ALIGNMENT
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
            INDUSTRIES & PLANT APPLICATIONS
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Our engineering equipment is purpose-built to operate under the thermal extremes, heavy duty cycles, and abrasive handling conditions of India's metal and heavy engineering sectors.
          </p>
        </div>

        {/* Detailed Industry Deep-Dive */}
        <div className="space-y-8 mb-16">
          {INDUSTRIES.map((ind: Industry) => (
            <div
              key={ind.id}
              className="p-6 sm:p-8 bg-neutral-900 border border-neutral-800 rounded flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest">
                    {ind.applicationScope}
                  </span>
                  <span className="text-neutral-600">·</span>
                  <span className="text-xs font-mono text-neutral-400">
                    SECTOR: {ind.id.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                    {ind.title}
                  </h2>
                  <span className="text-xs font-mono text-neutral-400 block mt-0.5">
                    {ind.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Benefits */}
                <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-300 font-mono">
                  {ind.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Aligned Equipment Pill-Free Box & CTA */}
              <div className="lg:w-80 shrink-0 p-5 bg-neutral-950 border border-neutral-800 rounded space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Applicable Equipment Lines:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-200">
                  {ind.relevantEquipment.map((eq, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="truncate">{eq}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onRequestQuote}
                  className="w-full py-2.5 px-3 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer mt-3"
                >
                  <span>Inquire for {ind.title.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Inferred vs Documented */}
        <div className="p-5 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
          <span className="text-white font-semibold uppercase">Application Suitability Protocol: </span>
          <span>We explicitly distinguish between equipment documented in our standard manufacturing portfolio and logical industrial applications inferred from mechanical engineering design. We do not disclose client references without NDA agreement.</span>
        </div>

      </div>
    </div>
  );
};
