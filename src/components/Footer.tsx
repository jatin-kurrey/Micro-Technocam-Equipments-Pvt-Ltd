import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Mail, MapPin, FileText, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openRfqModal: (preselectedProduct?: string) => void;
  openSeoInspector?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openRfqModal, openSeoInspector }) => {
  const currentYear = 2026;

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-300">
      {/* Top Engineering Strip */}
      <div className="border-b border-neutral-850 py-10 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
                INDUSTRIAL RFQ DISPATCH
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Have a customized equipment or capacity requirement?
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                Submit your process parameters, duty cycle, and drawings for technical proposal review by our engineering team.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openRfqModal()}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-850 rounded border border-neutral-700 transition-colors cursor-pointer"
              >
                Direct Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Corporate Identity & Verified Legal Records */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-display font-bold text-lg text-white tracking-wide uppercase">
                {COMPANY_INFO.legalName}
              </span>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                CIN: {COMPANY_INFO.cin} · INCORPORATED 2010
              </p>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed pr-4">
              Manufacturer of engineering equipment and industrial machinery for steel, metallurgical, material handling, and heavy industrial applications.
            </p>

            {/* Verified Compliance Box */}
            <div className="border border-neutral-800 bg-neutral-900/60 p-4 rounded text-xs space-y-2">
              <div className="flex items-center gap-2 text-neutral-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Verified Corporate Credentials</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-400 font-mono text-[11px] pt-1">
                <div>
                  <span className="text-neutral-500 block">GSTIN (Chhattisgarh):</span>
                  <span className="text-neutral-200 select-all">{COMPANY_INFO.gstin}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Establishment:</span>
                  <span className="text-neutral-200">Year 2010 (RoC Delhi)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Product Families */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Product Families
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('products')} 
                  className="text-neutral-300 hover:text-white transition-colors text-left"
                >
                  Steel & Metallurgical
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('products')} 
                  className="text-neutral-300 hover:text-white transition-colors text-left"
                >
                  Material Handling Conveyors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('products')} 
                  className="text-neutral-300 hover:text-white transition-colors text-left"
                >
                  EOT & Gantry Cranes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('products')} 
                  className="text-neutral-300 hover:text-white transition-colors text-left"
                >
                  Process & Auxiliary Mills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('products')} 
                  className="text-neutral-300 hover:text-white transition-colors text-left"
                >
                  Custom Industrial Equipment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Quality */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Corporate & Scope
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('about')} className="text-neutral-300 hover:text-white transition-colors text-left">
                  Company Background
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('industries')} className="text-neutral-300 hover:text-white transition-colors text-left">
                  Industries & Applications
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('engineering')} className="text-neutral-300 hover:text-white transition-colors text-left">
                  Engineering Lifecycle
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('quality')} className="text-neutral-300 hover:text-white transition-colors text-left">
                  Quality & Compliance
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="text-neutral-300 hover:text-white transition-colors text-left">
                  Works & Registered Office
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Operating Locations */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-2">
              Operational Locations
            </h4>
            
            <div className="text-xs space-y-3">
              <div>
                <span className="text-orange-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {COMPANY_INFO.locations.manufacturingUnit.title}
                </span>
                <p className="text-neutral-300 mt-0.5">
                  {COMPANY_INFO.locations.manufacturingUnit.industrialArea}
                </p>
                <p className="text-neutral-400">
                  {COMPANY_INFO.locations.manufacturingUnit.district}, {COMPANY_INFO.locations.manufacturingUnit.state}, India
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-850">
                <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  {COMPANY_INFO.locations.registeredOffice.title}
                </span>
                <p className="text-neutral-400 mt-0.5">
                  {COMPANY_INFO.locations.registeredOffice.city}, {COMPANY_INFO.locations.registeredOffice.state}, India
                </p>
                <p className="text-[11px] text-neutral-500">
                  RoC Delhi Registration
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-850 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <span>© 2010 – {currentYear} {COMPANY_INFO.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="text-[11px] text-neutral-500">
              Technical specifications subject to client project engineering scope.
            </span>
            {openSeoInspector && (
              <button 
                onClick={openSeoInspector}
                className="text-neutral-500 hover:text-neutral-300 underline text-[11px] flex items-center gap-1"
                title="View Technical Metadata & Schema.org JSON-LD"
              >
                <FileText className="w-3 h-3" />
                <span>SEO Schema Data</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
