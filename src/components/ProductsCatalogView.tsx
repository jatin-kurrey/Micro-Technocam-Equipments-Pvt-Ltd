import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCategory, Product } from '../types';
import { Search, SlidersHorizontal, ArrowRight, ChevronRight, Filter } from 'lucide-react';

interface ProductsCatalogViewProps {
  onSelectProduct: (productId: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export const ProductsCatalogView: React.FC<ProductsCatalogViewProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-14 bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            ENGINEERING CATALOGUE & SPECIFICATIONS
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
            INDUSTRIAL EQUIPMENT CATALOGUE
          </h1>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            Complete range of secondary steelmaking, material handling conveyors, overhead cranes, and industrial process machinery manufactured by Micro Technocam Equipments Pvt. Ltd.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-neutral-900 border border-neutral-800 rounded p-4 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Equipment ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.name.split('&')[0]} ({PRODUCTS.filter(p => p.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search equipment, process, application..."
              className="w-full pl-9 pr-3.5 py-1.5 bg-neutral-950 border border-neutral-750 rounded text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6 pb-2 border-b border-neutral-850">
          <span>Showing {filteredProducts.length} Equipment Types</span>
          <span>B2B Industrial Catalog</span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center border border-neutral-800 rounded bg-neutral-900/60 p-8">
            <SlidersHorizontal className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-white uppercase">No Equipment Found</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
              No matching equipment for "{searchQuery}". Try searching for Ladle, Conveyor, Crane, or CCM.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-mono uppercase text-orange-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod: Product) => (
              <div
                key={prod.id}
                className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors group"
              >
                <div>
                  <div className="relative aspect-4/3 w-full bg-neutral-950 overflow-hidden border-b border-neutral-850">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-70" />
                    
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-neutral-300">
                      <span className="uppercase tracking-wider">{prod.categoryName}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                      <span>ID: {prod.slug}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-orange-400">Custom Built</span>
                    </div>

                    <h2 className="font-display text-lg font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
                      {prod.name}
                    </h2>

                    <p className="mt-2 text-xs text-neutral-300 leading-relaxed line-clamp-3">
                      {prod.shortDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-850 space-y-1">
                      {prod.applications.slice(0, 2).map((app, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-neutral-400">
                          <ChevronRight className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span className="truncate">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(prod.id)}
                    className="flex-1 py-2.5 px-3 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors text-center cursor-pointer"
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => onRequestQuote(prod.name)}
                    className="py-2.5 px-3 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 hover:text-white hover:bg-orange-600 bg-orange-950/40 border border-orange-900/60 rounded transition-colors text-center cursor-pointer whitespace-nowrap"
                  >
                    RFQ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
