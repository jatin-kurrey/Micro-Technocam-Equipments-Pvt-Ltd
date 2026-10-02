import React from 'react';
import { Calendar, Wrench, Shield, Sliders, CheckSquare, Layers } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Industrial Experience Since 2010',
      description: 'Incorporated under the Companies Act in 2010 (CIN: U29219DL2010PTC199156). Proven longevity serving secondary steel, metallurgical, and heavy engineering plants.',
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
      tag: 'Verified Incorporation',
    },
    {
      title: 'Application-Focused Engineering',
      description: 'Equipment designs configured directly around your process requirements—heat sizes, crane wheel loads, conveyor incline degrees, and material temperatures.',
      icon: <Sliders className="w-5 h-5 text-orange-500" />,
      tag: 'Custom Parameter Fit',
    },
    {
      title: 'Severe Heavy Industrial Focus',
      description: 'Machinery fabricated with heavy structural plate, stiffeners, and protective shielding to withstand high radiant temperatures, abrasive DRI pellets, and round-the-clock duty cycles.',
      icon: <Shield className="w-5 h-5 text-orange-500" />,
      tag: 'Robust Metallurgy',
    },
    {
      title: 'Configurable Mechanical Execution',
      description: 'Unlike rigid catalogue vendors, we modify spans, gear ratios, motor ratings, and drive arrangements to match existing plant civil foundations and crane rails.',
      icon: <Wrench className="w-5 h-5 text-orange-500" />,
      tag: 'Flexible Architecture',
    },
    {
      title: 'B2B Technical Project Approach',
      description: 'We interact through general arrangement drawings, duty classifications, and detailed bill of materials rather than high-pressure consumer sales tactics.',
      icon: <CheckSquare className="w-5 h-5 text-orange-500" />,
      tag: 'Engineering Dialogue',
    },
    {
      title: 'Strategic Industrial Proximity',
      description: 'Manufacturing presence in the Joratarai / Durg-Bhilai industrial corridor of Chhattisgarh—at the very heart of India’s heavy steel and sponge iron belt.',
      icon: <Layers className="w-5 h-5 text-orange-500" />,
      tag: 'Industrial Hub',
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            ENGINEERING CREDENTIALS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            WHY MICRO TECHNOCAM EQUIPMENTS
          </h2>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            Credibility founded on technical transparency, verified legal existence since 2010, and heavy industrial machinery built to withstand real factory operating conditions.
          </p>
        </div>

        {/* 6 Capability Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                  <div className="p-2 rounded bg-neutral-950 border border-neutral-800">
                    {pt.icon}
                  </div>
                  <span className="text-[11px] font-mono text-orange-400 uppercase">
                    {pt.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase mt-4">
                  {pt.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850/60 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Capability Indicator</span>
                <span className="text-neutral-400">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
