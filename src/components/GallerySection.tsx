import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Camera, Image as ImageIcon, Info, ArrowUpRight } from 'lucide-react';

interface GallerySectionProps {
  onRequestQuote: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Steel Plant', 'Machinery', 'Material Handling', 'Workshop', 'Manufacturing'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
              EQUIPMENT & PLANT VISUALS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
              EQUIPMENT GALLERY & APPLICATION CONTEXT
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              Visual records of secondary steelmaking machinery, continuous billet casting assemblies, industrial bulk conveyors, and heavy workshop lifting infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-950 p-2.5 rounded border border-neutral-800">
            <Info className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Plant photography & equipment representative models</span>
          </div>
        </div>

        {/* Filter Bar (Segmented Controls - allowed functional buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-950 rounded border border-neutral-800 mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-950 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors group"
            >
              <div>
                <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  
                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono text-neutral-300 bg-neutral-950/80 px-2.5 py-1 border border-neutral-800/80 rounded">
                    <span>{item.badge}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-1.5">
                    <span>CATEGORY: {item.category.toUpperCase()}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onRequestQuote}
                  className="w-full py-2 px-3 text-xs font-mono font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire Regarding This Equipment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Data Structure Notice for Client */}
        <div className="mt-10 p-5 rounded bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-white font-semibold block uppercase">
              CLIENT PHOTOGRAPHY UPDATE WORKFLOW:
            </span>
            <p className="text-neutral-400 text-xs">
              This gallery is driven by a clean data contract (`/src/data/gallery.ts`). High-resolution photographs of actual factory fabrication bays, completed equipment deliveries, and customer site installations can be seamlessly plugged in without modifying markup.
            </p>
          </div>
          <span className="text-neutral-500 shrink-0">DATA DISCIPLINE</span>
        </div>

      </div>
    </section>
  );
};
