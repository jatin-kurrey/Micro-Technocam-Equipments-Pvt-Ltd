import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  X, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  Cpu, 
  Wrench, 
  ShieldAlert,
  FileText
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (productName?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuote,
  onSelectProduct,
}) => {
  if (!isOpen || !product) return null;

  const relatedProducts = PRODUCTS.filter((p) => 
    product.relatedProductIds.includes(p.id) || product.relatedProductIds.includes(p.slug)
  ).slice(0, 3);

  const handleDownloadDatasheet = () => {
    // Generate simulated technical datasheet printable view or download
    const printableWindow = window.open('', '_blank', 'width=800,height=700');
    if (printableWindow) {
      printableWindow.document.write(`
        <html>
          <head>
            <title>Technical Datasheet - ${product.name}</title>
            <style>
              body { font-family: sans-serif; padding: 32px; color: #111; line-height: 1.5; }
              h1 { font-size: 22px; text-transform: uppercase; margin-bottom: 4px; }
              .meta { font-size: 12px; color: #666; margin-bottom: 24px; }
              h2 { font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 6px; margin-top: 24px; }
              table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background: #f4f4f4; }
              .footer { margin-top: 40px; font-size: 11px; color: #888; border-top: 1px solid #ddd; padding-top: 12px; }
            </style>
          </head>
          <body>
            <h1>MICRO TECHNOCAM EQUIPMENTS PVT. LTD.</h1>
            <div class="meta">TECHNICAL EQUIPMENT DATASHEET · REF: ${product.slug.toUpperCase()}</div>
            <h2>Product: ${product.name}</h2>
            <p><strong>Category:</strong> ${product.categoryName}</p>
            <p><strong>Engineering Overview:</strong> ${product.detailedDescription}</p>
            <h2>Working Principle</h2>
            <p>${product.workingPrinciple}</p>
            <h2>Technical Specifications (Subject to Project Scope)</h2>
            <table>
              <tr><th>Parameter</th><th>Engineering Range / Value</th></tr>
              ${product.specs.map(s => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}
            </table>
            <h2>Applications</h2>
            <ul>
              ${product.applications.map(a => `<li>${a}</li>`).join('')}
            </ul>
            <div class="footer">
              MICRO TECHNOCAM EQUIPMENTS PRIVATE LIMITED<br/>
              Corporate CIN: U29219DL2010PTC199156 · GSTIN: 22AAGCM4611A2Z8<br/>
              Operations: Joratarai, Durg-Bhilai, Chhattisgarh | Registered Office: New Delhi, India
            </div>
          </body>
        </html>
      `);
      printableWindow.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-500">
              {product.categoryName}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs font-mono text-neutral-400">
              ID: {product.slug}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-8">
          
          {/* Top Hero Layout: Image + Core Identity */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 relative aspect-4/3 rounded overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={product.image}
                alt={`${product.name} industrial equipment`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
            </div>

            <div className="md:col-span-7 space-y-4">
              <h2 id="product-detail-title" className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
                {product.name}
              </h2>
              <p className="text-xs font-mono text-orange-400">
                {product.tagline}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.detailedDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product.name);
                  }}
                  className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request RFQ For This Equipment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleDownloadDatasheet}
                  className="px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-850 border border-neutral-750 rounded transition-colors flex items-center gap-2 cursor-pointer"
                  title="View / Print Printable Specification Sheet"
                >
                  <Download className="w-3.5 h-3.5 text-orange-500" />
                  <span>Datasheet Spec</span>
                </button>
              </div>
            </div>

          </div>

          {/* Section: Technical Specifications Table (Explicitly marked pending client confirmation where needed) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-orange-500" />
                TECHNICAL PARAMETERS & SPECIFICATIONS
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                PROJECT CONFIGURED
              </span>
            </div>

            <div className="overflow-x-auto border border-neutral-800 rounded bg-neutral-950">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80 text-neutral-400 font-mono">
                    <th className="py-2.5 px-4 font-semibold">Parameter / Attribute</th>
                    <th className="py-2.5 px-4 font-semibold">Configured Range / Standard Value</th>
                    <th className="py-2.5 px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-850 text-neutral-300">
                  {product.specs.map((s, idx) => (
                    <tr key={idx} className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 font-medium text-white">{s.label}</td>
                      <td className="py-3 px-4 font-mono text-neutral-300">{s.value}</td>
                      <td className="py-3 px-4 text-right font-mono text-[11px]">
                        {s.isConfirmed ? (
                          <span className="text-emerald-400">Confirmed</span>
                        ) : (
                          <span className="text-neutral-400">Custom Engineering Scope</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] font-mono text-neutral-400">
              * Note: Operating capacities, drive motor KW ratings, and dimensional spans are custom-engineered per client meltshop layout and electrical power ratings.
            </p>
          </div>

          {/* Section: Working Principle */}
          <div className="p-5 rounded bg-neutral-950 border border-neutral-800 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              WORKING PRINCIPLE & PROCESS INTEGRATION
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              {product.workingPrinciple}
            </p>
          </div>

          {/* 2-Column: Applications & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Applications */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-500" />
                KEY APPLICATIONS
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-orange-500" />
                MECHANICAL & STRUCTURAL FEATURES
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Customization Options */}
          {product.customizationOptions.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                AVAILABLE CUSTOM ENGINEERING OPTIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-mono">
                {product.customizationOptions.map((opt, i) => (
                  <div key={i} className="p-2.5 bg-neutral-950 border border-neutral-800 rounded flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Equipment Cross-Links */}
          {relatedProducts.length > 0 && (
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                RELATED INDUSTRIAL EQUIPMENT:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedProducts.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectProduct(rel.id)}
                    className="p-3 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded text-left transition-colors cursor-pointer group"
                  >
                    <span className="text-[11px] font-mono text-orange-400 uppercase block truncate">
                      {rel.categoryName}
                    </span>
                    <span className="text-xs font-bold text-white uppercase block mt-1 truncate group-hover:text-orange-400">
                      {rel.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Sticky Action Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-400">
            <span>Corporate Manufacturing: Durg-Bhilai, CG · Reg Office: New Delhi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase text-neutral-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
