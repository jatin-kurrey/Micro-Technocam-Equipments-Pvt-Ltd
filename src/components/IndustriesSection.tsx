import React from 'react';
import { INDUSTRIES } from '../data/industries';
import { Industry } from '../types';
import { ArrowRight, CheckCircle2, Factory } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry?: (industryId: string) => void;
  onRequestQuote: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onRequestQuote,
}) => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
              TARGET SECTORS & APPLICATIONS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
              APPLICATIONS & INDUSTRIES
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              Heavy equipment engineered for specific manufacturing environments across primary metal extraction, secondary steel processing, and heavy fabrication.
            </p>
          </div>
          
          <div className="text-xs font-mono text-neutral-400">
            <span>6 INDUSTRIAL SECTOR APPLICATIONS</span>
          </div>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind: Industry) => (
            <div
              key={ind.id}
              className="bg-neutral-950 border border-neutral-800 rounded p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Scope marker - clean unboxed text */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400">
                    {ind.applicationScope}
                  </span>
                  <Factory className="w-4 h-4 text-neutral-500" />
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                  {ind.title}
                </h3>
                <span className="text-xs font-mono text-neutral-400 block mt-0.5">
                  {ind.subtitle}
                </span>

                <p className="mt-3 text-xs text-neutral-300 leading-relaxed">
                  {ind.description}
                </p>

                {/* Relevant Equipment List */}
                <div className="mt-5 pt-4 border-t border-neutral-850">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    Aligned Equipment:
                  </span>
                  <ul className="space-y-1">
                    {ind.relevantEquipment.map((eq, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span className="truncate">{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">
                  Application Match
                </span>
                <button
                  onClick={onRequestQuote}
                  className="text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for Sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory & Alignment Note */}
        <div className="mt-10 p-4 rounded bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-neutral-300 font-semibold uppercase">Note on Industry Alignment: </span>
            <span>Equipment suitability is based on mechanical design parameters, metallurgical handling capacity, and public product listings. We do not publish client names without written authorization.</span>
          </div>
          <span className="text-neutral-500 shrink-0">DATA INTEGRITY POLICY</span>
        </div>

      </div>
    </section>
  );
};
