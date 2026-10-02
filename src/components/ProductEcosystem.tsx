import React from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { ArrowRight, Flame, Layers, Box, Cpu } from 'lucide-react';

interface ProductEcosystemProps {
  onSelectCategory: (categoryId: ProductCategory) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  onSelectCategory,
  onSelectProduct,
}) => {
  const getCategoryIcon = (id: ProductCategory) => {
    switch (id) {
      case 'steel-metallurgical':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'material-handling':
        return <Layers className="w-5 h-5 text-orange-500" />;
      case 'cranes-lifting':
        return <Box className="w-5 h-5 text-orange-500" />;
      case 'process-auxiliary':
        return <Cpu className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
              CORE PORTFOLIO
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
              OUR INDUSTRIAL EQUIPMENT
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              Engineered machinery built to withstand high temperatures, continuous material throughput, and heavy workshop duty cycles.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            <span>4 PRODUCT DIVISIONS · VERIFIED LISTINGS</span>
          </div>
        </div>

        {/* 4 Major Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, index) => {
            const catProducts = PRODUCTS.filter((p) => p.category === cat.id);
            const numString = `0${index + 1}`;

            return (
              <div
                key={cat.id}
                className="bg-neutral-900 border border-neutral-800 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-neutral-950 border border-neutral-800">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <span className="font-mono text-xs text-neutral-400">
                        FAMILY {numString}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      {catProducts.length} Equipment Types
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white uppercase mt-4">
                    {cat.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Clean unboxed item list */}
                  <div className="mt-6 pt-4 border-t border-neutral-850">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Equipment In This Range:
                    </span>
                    <ul className="space-y-1.5">
                      {catProducts.slice(0, 5).map((prod) => (
                        <li key={prod.id}>
                          <button
                            onClick={() => onSelectProduct(prod.id)}
                            className="text-xs text-neutral-300 hover:text-orange-400 transition-colors flex items-center justify-between w-full text-left py-1 group/item"
                          >
                            <span className="truncate pr-2">{prod.name}</span>
                            <ArrowRight className="w-3 h-3 text-neutral-600 group-hover/item:text-orange-400 transition-colors shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-orange-500 hover:text-orange-400 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Explore {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
