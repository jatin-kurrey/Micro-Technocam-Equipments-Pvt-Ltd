import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, AlertCircle, FileCheck, CheckCircle2, Lock, Building, FileText } from 'lucide-react';

export const QualityCompliance: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            COMPLIANCE & STATUTORY CREDENTIALS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            QUALITY & STATUTORY COMPLIANCE
          </h2>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            Industrial engineering requires complete transparency in legal status, tax registrations, and material certification standards. Below is our verified corporate data alongside documented quality procedures.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Corporate Incorporation (VERIFIED) */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED STATUTORY RECORD
                </span>
                <Building className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                Corporate Identity (CIN)
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Registered under Registrar of Companies (RoC), Delhi.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded font-mono text-xs">
                <span className="text-neutral-500 block text-[11px]">CIN NUMBER:</span>
                <span className="text-white font-semibold select-all">{COMPANY_INFO.cin}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Incorporation Year</span>
              <span className="text-white">2010</span>
            </div>
          </div>

          {/* Card 2: GSTIN Registration (VERIFIED) */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED TAX REGISTRATION
                </span>
                <FileCheck className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                GSTIN (Goods & Services Tax)
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                State of Chhattisgarh industrial registration.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded font-mono text-xs">
                <span className="text-neutral-500 block text-[11px]">GSTIN NUMBER:</span>
                <span className="text-white font-semibold select-all">{COMPANY_INFO.gstin}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Operating State</span>
              <span className="text-white">Chhattisgarh (Code 22)</span>
            </div>
          </div>

          {/* Card 3: ISO Certification (HONEST PLACEHOLDER) */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  DOCUMENTATION UPDATE
                </span>
                <Lock className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                ISO Certification
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Quality Management Systems & Environmental Standards.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded text-xs font-mono">
                <span className="text-amber-400 font-semibold block">
                  CERTIFICATION DETAILS — TO BE UPDATED
                </span>
                <span className="text-neutral-500 text-[11px] mt-0.5 block">
                  Official certificate document copies will be published upon client file upload.
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Status</span>
              <span className="text-amber-400">Pending Documentation</span>
            </div>
          </div>

          {/* Card 4: MSME / Udyam (PLACEHOLDER) */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-neutral-400 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-neutral-500" />
                  ENTERPRISE RECORD
                </span>
                <FileText className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                MSME / Udyam Registration
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Micro, Small and Medium Enterprises verification.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded text-xs font-mono">
                <span className="text-neutral-400 font-medium block">
                  UDYAM REGISTRATION DETAILS — TO BE UPDATED
                </span>
                <span className="text-neutral-500 text-[11px] mt-0.5 block">
                  Udyam certificate serial number pending confirmation.
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Classification</span>
              <span className="text-neutral-400">Engineering Enterprise</span>
            </div>
          </div>

          {/* Card 5: Mill Test Certificates (MTC) */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  STANDARD QUALITY PRACTICE
                </span>
                <ShieldCheck className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                Raw Material Traceability
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Steel plates, forgings, structural sections, and fasteners.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded text-xs font-mono space-y-1">
                <span className="text-neutral-300 block">✓ Chemical & physical test reports (MTC)</span>
                <span className="text-neutral-300 block">✓ Ultrasonic testing on heavy crane wheel forgings</span>
                <span className="text-neutral-300 block">✓ Radiographic / DPT weld inspections per scope</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Standard</span>
              <span className="text-white">IS / ASTM Standards</span>
            </div>
          </div>

          {/* Card 6: Shop Pre-Assembly & Testing */}
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFICATION STAGE
                </span>
                <ShieldCheck className="w-4 h-4 text-neutral-500" />
              </div>

              <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                Trial Assembly & Run Checks
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Dimensional fit checks before heavy dispatch.
              </p>

              <div className="mt-4 p-3 bg-neutral-950 border border-neutral-800 rounded text-xs font-mono space-y-1">
                <span className="text-neutral-300 block">✓ No-load motor & gearbox rotational tests</span>
                <span className="text-neutral-300 block">✓ Span & diagonal tolerance cross-measurement</span>
                <span className="text-neutral-300 block">✓ Customer inspection clearance prior to dispatch</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Protocol</span>
              <span className="text-white">Quality Plan (QAP)</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 p-4 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
          <span className="text-white font-semibold uppercase">Verified Information Disclosure: </span>
          <span>In accordance with professional B2B engineering integrity, Micro Technocam Equipments Pvt. Ltd. does NOT fabricate ISO registration numbers, fake client lists, or unverified awards. All company registrations listed above are publicly verifiable via MCA (Ministry of Corporate Affairs) and GST portal records.</span>
        </div>

      </div>
    </section>
  );
};
