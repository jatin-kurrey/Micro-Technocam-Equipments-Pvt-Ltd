import React from 'react';
import { Cog, CheckCircle2, Factory, ShieldAlert } from 'lucide-react';

export const IndustrialIntro: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            ENGINEERING CAPABILITY & SCOPE
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            ENGINEERED FOR DEMANDING INDUSTRIAL ENVIRONMENTS
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Operating in steel melting shops, rolling mills, and heavy process facilities requires machinery engineered to resist thermal cycling, extreme cyclic shock loads, abrasive dust, and continuous multi-shift operations.
          </p>
        </div>

        {/* 3-Column Engineering Fundamentals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded">
            <div className="w-10 h-10 rounded bg-neutral-850 border border-neutral-750 flex items-center justify-center text-orange-500 mb-5">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">
              Steel & Secondary Metallurgy
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Design and supply of critical melting shop equipment—from Ladle Refining Furnaces (LRF) and AOD decarburization converters to Ladle Preheaters and multi-strand Continuous Casting Machines (CCM).
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-850 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Thermal & chemical homogenizing focus</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded">
            <div className="w-10 h-10 rounded bg-neutral-850 border border-neutral-750 flex items-center justify-center text-orange-500 mb-5">
              <Cog className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">
              Material Handling & Conveying
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Heavy structural belt conveyors and magnetic scrap handling systems designed specifically for abrasive materials like sponge iron pellets (DRI), scrap iron, ferro-alloys, and hot mill scale.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-850 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Continuous furnace feed synchronization</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-neutral-950/70 border border-neutral-800 rounded">
            <div className="w-10 h-10 rounded bg-neutral-850 border border-neutral-750 flex items-center justify-center text-orange-500 mb-5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">
              Cranes & Heavy Fabrication
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Overhead traveling (EOT) cranes, ladle cranes, and gantry structures built with heavy box girders, fail-safe dual braking, and thermal radiation shielding for extreme metallurgical duty cycles.
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-850 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Severe duty structural engineering</span>
            </div>
          </div>

        </div>

        {/* Engineering Philosophy Statement */}
        <div className="mt-10 p-6 bg-neutral-950 border-l-2 border-orange-500 border-y border-r border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-medium text-neutral-400 uppercase">
              APPLICATION-DRIVEN CONFIGURATION
            </span>
            <p className="text-sm text-neutral-200 mt-1">
              Micro Technocam approaches every industrial contract from technical parameters—matching structural dimensions, thermal capacities, gear ratios, and safety factors to each buyer’s plant floor requirements.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400 shrink-0">
            REGISTERED 2010 · ROBUST MECHANICAL DESIGN
          </div>
        </div>

      </div>
    </section>
  );
};
