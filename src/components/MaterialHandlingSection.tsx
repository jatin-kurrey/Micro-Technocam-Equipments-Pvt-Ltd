import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

interface MaterialHandlingSectionProps {
  onSelectProduct: (productId: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export const MaterialHandlingSection: React.FC<MaterialHandlingSectionProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            CONTINUOUS BULK HANDLING
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            MOVING MATERIAL. SUPPORTING PRODUCTION.
          </h2>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            In sponge iron plants, steel melting shops, and raw material yards, conveyor uptime determines overall furnace productivity. Our material handling systems are designed for reliable operation and simplified maintenance under high cyclic loads and abrasive dust conditions.
          </p>
        </div>

        {/* 2-Column Feature Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-7 relative aspect-16/10 rounded overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src="/src/assets/images/sponge_iron_conveyor_1790961912847.jpg"
              alt="Heavy-duty sponge iron feeding conveyor system in industrial facility"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
              <span className="bg-neutral-900/90 px-3 py-1 border border-neutral-800 rounded">
                SPONGE IRON DRI FEEDING LINE
              </span>
              <span className="text-neutral-400">HEAVY TRUSS BUILD</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                HEAVY DRI CONVEYING
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
                SPONGE IRON FEEDING CONVEYORS
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Direct-Reduced Iron (DRI) pellets are abrasive, dense, and demanding on conveying components. Our conveyors feature reinforced channel/truss stringers, high-impact rubber idler discs, and skirted transfer chutes to minimize spillage and dust dispersion.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Impact-cushioned receiving hoppers designed for bulk hopper drop loads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Variable speed drives to modulate feed rate with furnace melting cycles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Engineered pull-cord and belt sway safety interlocks</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onSelectProduct('sponge-iron-feeding-conveyor')}
                className="px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors cursor-pointer"
              >
                View Conveyor Specs
              </button>
              <button
                onClick={() => onRequestQuote('Sponge Iron Feeding Conveyor')}
                className="px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded transition-colors cursor-pointer"
              >
                RFQ
              </button>
            </div>
          </div>

        </div>

        {/* 3 Conveying Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                METALLIC SEPARATION
              </span>
              <h4 className="font-display text-lg font-bold text-white uppercase mt-2">
                Magnetic Conveyor Systems
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Utilizes high-intensity permanent or electromagnetic slider beds beneath non-magnetic stainless steel guide sheets for steep scrap elevating and tramp iron removal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-850">
              <button
                onClick={() => onSelectProduct('magnetic-conveyor')}
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Magnetic Conveyor Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                BULK PLANT TRANSFER
              </span>
              <h4 className="font-display text-lg font-bold text-white uppercase mt-2">
                Industrial Feeding Conveyors
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                General bulk material feeding for raw dolomite, scrap, coal fines, and ferro-alloys with vulcanized rubber pulley lagging and robust structural supports.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-850">
              <button
                onClick={() => onSelectProduct('feeding-conveyors')}
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Industrial Feeder Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                PLANT INTERCONNECTION
              </span>
              <h4 className="font-display text-lg font-bold text-white uppercase mt-2">
                Configurable Geometry
              </h4>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Custom truss spans, elevated trestles, dual walkways, and reversible shuttle designs configured to match site layout drawings and silo heights.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-850">
              <button
                onClick={() => onRequestQuote('Custom Material Handling System')}
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Request Custom Layout Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
