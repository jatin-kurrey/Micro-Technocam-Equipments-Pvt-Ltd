import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Settings2, Sliders } from 'lucide-react';

interface TechnicalSpotlightProps {
  onExploreCcm: () => void;
  onRequestQuote: (productName?: string) => void;
}

export const TechnicalSpotlight: React.FC<TechnicalSpotlightProps> = ({
  onExploreCcm,
  onRequestQuote,
}) => {
  const processSteps = [
    { step: '01', title: 'Molten Metal', desc: 'Liquid steel tapping from primary melting furnace' },
    { step: '02', title: 'Ladle Station', desc: 'Secondary refining & thermal homogenization' },
    { step: '03', title: 'Tundish', desc: 'Regulated distributor feeding casting strands' },
    { step: '04', title: 'Curved Mould', desc: 'Oscillating water-cooled copper mould forming solid shell' },
    { step: '05', title: 'Secondary Cooling', desc: 'High-pressure water spray chamber & guide rollers' },
    { step: '06', title: 'Continuous Billet', desc: 'Straightened, cut-to-length semi-finished steel billets' },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            METALLURGICAL PROCESS ARCHITECTURE
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            CONTINUOUS CASTING TECHNOLOGY
          </h2>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            Eliminating traditional ingot reheating by directly casting liquid steel into continuous solid billets. Built for high mechanical reliability across multi-shift casting cycles.
          </p>
        </div>

        {/* Process Flow Diagram Pipeline */}
        <div className="mb-14 p-6 sm:p-8 bg-neutral-900 border border-neutral-800 rounded">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              METALLURGICAL SOLIDIFICATION PROCESS FLOW
            </span>
            <span className="text-xs font-mono text-orange-400">
              RADIAL STRAND GEOMETRY
            </span>
          </div>

          {/* Sequential horizontal flow with mobile wrap */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((item, index) => (
              <div 
                key={item.step} 
                className="relative p-4 bg-neutral-950/80 border border-neutral-800 rounded flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-orange-500 mb-2">
                    <span>STEP {item.step}</span>
                    {index < processSteps.length - 1 && (
                      <span className="hidden lg:inline text-neutral-600">→</span>
                    )}
                  </div>
                  <h4 className="font-display text-sm font-bold text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Technical Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Asset Container */}
          <div className="lg:col-span-6 relative aspect-4/3 rounded overflow-hidden border border-neutral-800 bg-neutral-900">
            <img
              src="/src/assets/images/continuous_casting_machine_1790961899580.jpg"
              alt="Continuous Casting Machine metallurgical strand and spray cooling chamber"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
              <span className="bg-neutral-900/90 px-3 py-1 border border-neutral-800 rounded">
                CURVED STRAND BILLET CCM
              </span>
              <span className="text-neutral-400 text-[11px]">
                SINGLE TO MULTI-STRAND
              </span>
            </div>
          </div>

          {/* Technical Blueprint Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                ENGINEERING CONFIGURATION
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
                RADIAL RADIUS & STRAND INTEGRATION
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Micro Technocam supplies continuous casting machines configured to meltshop heat size and crane capacities. From single-strand installations to high-production multi-strand configurations with high-frequency mould oscillation.
              </p>
            </div>

            {/* Technical Parameters List */}
            <div className="space-y-3 border-t border-neutral-850 pt-4">
              <div className="flex items-start gap-3">
                <Sliders className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-white font-medium block">Oscillation Mechanics</span>
                  <span className="text-neutral-400">High-frequency leaf-spring or mechanical lever oscillation for uniform lubrication and defect-free billet surface.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Settings2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-white font-medium block">Withdrawal & Straightening</span>
                  <span className="text-neutral-400">Multi-roll motorized pinch straighteners with hydraulic/pneumatic pressure regulation for consistent strand withdrawal.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-white font-medium block">Secondary Cooling Design</span>
                  <span className="text-neutral-400">Multi-zone stainless steel spray headers calibrated for specific billet section cooling gradients.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-neutral-850 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreCcm}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors cursor-pointer"
              >
                <span>Explore Continuous Casting Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onRequestQuote('Continuous Casting Machine (CCM)')}
                className="px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded transition-colors cursor-pointer"
              >
                Request CCM RFQ
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
