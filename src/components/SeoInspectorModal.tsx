import React, { useState } from 'react';
import { X, Code2, CheckCircle2, Copy, FileText, Globe } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoInspectorModal: React.FC<SeoInspectorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'schema' | 'sitemap' | 'robots' | 'meta'>('schema');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.legalName,
    "legalName": COMPANY_INFO.legalName,
    "foundingDate": "2010",
    "identifier": {
      "@type": "PropertyValue",
      "name": "CIN",
      "value": COMPANY_INFO.cin
    },
    "taxID": COMPANY_INFO.gstin,
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressCountry": "IN",
        "description": "Corporate Registered Office"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Joratarai Industrial Area, Durg-Bhilai",
        "addressRegion": "Chhattisgarh",
        "addressCountry": "IN",
        "description": "Works & Operational Manufacturing Facility"
      }
    ],
    "description": "Manufacturer and engineering solutions provider of steel, metallurgical, material handling, and process equipment including Ladle Furnaces, Continuous Casting Machines, Conveyors, and EOT Cranes."
  };

  const productSchemaExample = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ladle Refining Furnace (LRF)",
    "image": "https://microtechnocam.com/assets/ladle_refining_furnace.jpg",
    "description": "Metallurgical refining equipment designed for controlled heating, desulphurization, and secondary steelmaking alloy adjustments.",
    "brand": {
      "@type": "Brand",
      "name": "Micro Technocam Equipments"
    },
    "category": "Steel & Metallurgical Equipment",
    "manufacturer": {
      "@type": "Organization",
      "name": COMPANY_INFO.legalName
    }
  };

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://microtechnocam.com/</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://microtechnocam.com/products</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${PRODUCTS.map(p => `  <url>
    <loc>https://microtechnocam.com/products/${p.slug}</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
  <url>
    <loc>https://microtechnocam.com/industries</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://microtechnocam.com/about</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://microtechnocam.com/contact</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const robotsTxt = `# robots.txt for Micro Technocam Equipments Pvt. Ltd.
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://microtechnocam.com/sitemap.xml`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="seo-inspector-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-orange-500" />
            <h3 id="seo-inspector-title" className="font-display text-base font-bold text-white uppercase">
              Technical SEO & Schema Inspector
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-neutral-400 hover:text-white rounded" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-neutral-800 bg-neutral-950/50">
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 cursor-pointer transition-colors ${
              activeTab === 'schema'
                ? 'border-orange-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Schema.org JSON-LD
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 cursor-pointer transition-colors ${
              activeTab === 'sitemap'
                ? 'border-orange-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-b-2 cursor-pointer transition-colors ${
              activeTab === 'robots'
                ? 'border-orange-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            robots.txt
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Embed in &lt;script type="application/ld+json"&gt;
                </span>
                <button
                  onClick={() => copyToClipboard(JSON.stringify(organizationSchema, null, 2))}
                  className="px-3 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-750 rounded flex items-center gap-1.5"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Organization Schema'}</span>
                </button>
              </div>

              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 font-mono text-xs text-emerald-400/90 overflow-x-auto">
                <pre>{JSON.stringify(organizationSchema, null, 2)}</pre>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono text-neutral-400 block mb-2">
                  Sample Product Schema (Ladle Refining Furnace):
                </span>
                <div className="p-4 bg-neutral-950 rounded border border-neutral-800 font-mono text-xs text-orange-400/90 overflow-x-auto">
                  <pre>{JSON.stringify(productSchemaExample, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Full XML URL Structure ({PRODUCTS.length + 5} URLs indexed)
                </span>
                <button
                  onClick={() => copyToClipboard(sitemapXml)}
                  className="px-3 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-750 rounded flex items-center gap-1.5"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy XML'}</span>
                </button>
              </div>
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto">
                <pre>{sitemapXml}</pre>
              </div>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  Standard Web Crawler Directive
                </span>
                <button
                  onClick={() => copyToClipboard(robotsTxt)}
                  className="px-3 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-750 rounded flex items-center gap-1.5"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto">
                <pre>{robotsTxt}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
