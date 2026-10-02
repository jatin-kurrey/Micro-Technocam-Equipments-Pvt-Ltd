import React from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (productId: string) => void;
  onViewAllProducts: () => void;
  onRequestQuote: (productName?: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onViewAllProducts,
  onRequestQuote,
}) => {
  // Show 6 curated featured products
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
              INDUSTRIAL HIGHLIGHTS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
              FEATURED INDUSTRIAL EQUIPMENT
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              Proven machinery designs for steelmaking, material feeding, overhead lifting, and process manufacturing.
            </p>
          </div>
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
          >
            <span>View Full Catalogue ({PRODUCTS.length} Items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((prod: Product) => (
            <div
              key={prod.id}
              className="bg-neutral-950 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors group"
            >
              <div>
                {/* Image Container with Zero-Broken-Image Policy */}
                <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden border-b border-neutral-850">
                  <img
                    src={prod.image}
                    alt={`${prod.name} industrial equipment`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  
                  {/* Category text in image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="uppercase tracking-wider">{prod.categoryName}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                    <span>ID: {prod.slug}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-orange-400">Custom Built</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {prod.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-neutral-850 space-y-1.5">
                    {prod.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <ChevronRight className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-6 pt-0 mt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectProduct(prod.id)}
                  className="flex-1 py-2.5 px-3 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors text-center cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => onRequestQuote(prod.name)}
                  className="py-2.5 px-3 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 hover:text-white hover:bg-orange-600 bg-orange-950/40 border border-orange-900/60 rounded transition-colors text-center cursor-pointer whitespace-nowrap"
                  title="Request Quote for this equipment"
                >
                  RFQ
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
