import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, MapPin, Building, Calendar, Factory, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  return (
    <div className="py-14 bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            CORPORATE PROFILE & ENGINEERING ROOTS
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
            ABOUT MICRO TECHNOCAM EQUIPMENTS
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Founded in 2010, Micro Technocam Equipments Private Limited is an Indian engineering equipment manufacturer specializing in secondary steelmaking, metallurgical furnaces, heavy bulk material handling, and industrial lifting machinery.
          </p>
        </div>

        {/* Verified Facts Banner */}
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 mb-4 font-semibold">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>VERIFIED STATUTORY & CORPORATE FOUNDATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded">
              <span className="text-neutral-500 block text-[11px]">LEGAL ENTITY:</span>
              <span className="text-white font-semibold block mt-1">{COMPANY_INFO.legalName}</span>
            </div>

            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded">
              <span className="text-neutral-500 block text-[11px]">CIN NUMBER:</span>
              <span className="text-white font-semibold block mt-1 select-all">{COMPANY_INFO.cin}</span>
            </div>

            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded">
              <span className="text-neutral-500 block text-[11px]">YEAR ESTABLISHED:</span>
              <span className="text-white font-semibold block mt-1">2010 (RoC Delhi)</span>
            </div>

            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded">
              <span className="text-neutral-500 block text-[11px]">GSTIN REGISTRATION:</span>
              <span className="text-white font-semibold block mt-1 select-all">{COMPANY_INFO.gstin}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Engineering Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                OUR INDUSTRIAL FOCUS
              </span>
              <h2 className="font-display text-2xl font-bold text-white uppercase mt-1">
                ENGINEERING FOR HEAVY PROCESS ENVIRONMENTS
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mt-3">
                Since our inception in 2010, Micro Technocam Equipments has focused on supplying the heavy capital equipment required in modern mini-mills, sponge iron DRI setups, casting foundries, and rolling mills across India.
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                Secondary metallurgy and material handling involve some of the most aggressive physical environments in industry: molten liquid steel at 1600°C, highly abrasive hot sponge iron pellets, massive cyclical crane loads, and relentless multi-shift duty. Our engineering ethos is rooted in structural resilience, mechanical safety factors, and practical maintenance accessibility.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-850">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Application-Specific Sizing:</strong>
                  <span className="text-neutral-400">We do not supply off-the-shelf compromises. Equipment spans, furnace transformer capacities, and conveyor inclines are tailored to client civil drawings.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block">Heavy Structural Fabrication:</strong>
                  <span className="text-neutral-400">Box girders, water-cooled tubular roofs, and heavy channel frames welded with full penetration and non-destructive joint verification.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 rounded overflow-hidden border border-neutral-800 bg-neutral-900">
            <img
              src="/src/assets/images/hero_steel_plant_engineering_1790961873297.jpg"
              alt="Heavy engineering steel plant operations"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-neutral-300">
              <span className="block text-white font-bold">METALLURGICAL MANUFACTURING CORRIDOR</span>
              <span className="text-neutral-400 text-[11px]">Operations based in Durg-Bhilai Region, Chhattisgarh</span>
            </div>
          </div>

        </div>

        {/* Dual Operating Locations */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
              FACILITIES & GEOGRAPHY
            </span>
            <h2 className="font-display text-2xl font-bold text-white uppercase mt-1">
              CORPORATE & MANUFACTURING FOOTPRINT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1: Chhattisgarh Works */}
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-orange-400 uppercase font-semibold flex items-center gap-2">
                  <Factory className="w-4 h-4" />
                  WORKS & MANUFACTURING PRESENCE
                </span>
                <span className="text-xs font-mono text-neutral-400">OPERATIONAL HUB</span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase">
                  Joratarai / Durg-Bhilai Industrial Corridor
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  District Durg, Chhattisgarh, India
                </p>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Located directly within Central India’s premier steel manufacturing and mineral processing cluster (Durg-Bhilai-Raipur), providing immediate access to skilled heavy industrial fabricators, precision machine shops, and raw metallurgical steel supplies.
              </p>

              <div className="pt-2 text-xs font-mono text-neutral-400">
                <span>Associated GST Registration: </span>
                <span className="text-white">{COMPANY_INFO.gstin}</span>
              </div>
            </div>

            {/* Location 2: New Delhi Registered Office */}
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-neutral-400 uppercase font-semibold flex items-center gap-2">
                  <Building className="w-4 h-4 text-orange-500" />
                  CORPORATE REGISTERED OFFICE
                </span>
                <span className="text-xs font-mono text-neutral-400">LEGAL DOMICILE</span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase">
                  New Delhi, National Capital Territory
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Registered under Registrar of Companies, Delhi
                </p>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Corporate administrative headquarters handling statutory filings, corporate governance, commercial contracts, and banking relations since initial incorporation in 2010.
              </p>

              <div className="pt-2 text-xs font-mono text-neutral-400">
                <span>CIN: </span>
                <span className="text-white">{COMPANY_INFO.cin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Personnel Policy (Strict compliance with Prompt: Do not invent biographies) */}
        <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded text-xs font-mono text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-white font-semibold uppercase block">
              ENGINEERING LEADERSHIP POLICY:
            </span>
            <p className="text-neutral-400 text-xs">
              Management and director records are maintained in compliance with the Ministry of Corporate Affairs (MCA). Individual engineering lead credentials and detailed bios are disclosed directly to corporate clients during technical qualification and vendor registration.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Initiate Vendor Discussion
          </button>
        </div>

      </div>
    </div>
  );
};
