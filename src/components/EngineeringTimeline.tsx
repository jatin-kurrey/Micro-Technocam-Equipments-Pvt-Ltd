import React from 'react';
import { ArrowRight, FileCheck2, Cpu, Wrench, ShieldCheck, Truck, Headphones } from 'lucide-react';

interface EngineeringTimelineProps {
  onRequestQuote: () => void;
}

export const EngineeringTimeline: React.FC<EngineeringTimelineProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Analysis',
      desc: 'Understand plant application, process flow parameters, material characteristics, and target capacity requirements.',
      icon: <FileCheck2 className="w-5 h-5 text-orange-500" />,
      tag: 'Application Review'
    },
    {
      num: '02',
      title: 'Engineering & Configuration',
      desc: 'Configure structural dimensions, drive ratings, mechanical tolerances, and thermal parameters aligned with facility constraints.',
      icon: <Cpu className="w-5 h-5 text-orange-500" />,
      tag: 'Mechanical Design'
    },
    {
      num: '03',
      title: 'Manufacturing & Fabrication',
      desc: 'Heavy structural steel plate cutting, submerged welding, precision machining of wheel pockets and shafts, and sub-assembly.',
      icon: <Wrench className="w-5 h-5 text-orange-500" />,
      tag: 'Works Fabrication'
    },
    {
      num: '04',
      title: 'Quality Verification',
      desc: 'Dimensional inspection, weldment non-destructive checks, alignment verification, and shop trial fitting against defined requirements.',
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      tag: 'Inspection Stage'
    },
    {
      num: '05',
      title: 'Dispatch & Delivery',
      desc: 'Component marking, protective transit coatings, heavy-lift packing, and coordinated freight logistics to buyer project site.',
      icon: <Truck className="w-5 h-5 text-orange-500" />,
      tag: 'Logistics Prep'
    },
    {
      num: '06',
      title: 'Technical Support',
      desc: 'General arrangement drawings, operational documentation, and technical advisory support according to agreed contract scope.',
      icon: <Headphones className="w-5 h-5 text-orange-500" />,
      tag: 'Agreed Project Scope'
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
              METHODOLOGY & STAGES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
              FROM REQUIREMENT TO INDUSTRIAL EQUIPMENT
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
              A transparent, engineering-centric execution model structured around verified technical parameters rather than generic catalogue products.
            </p>
          </div>
          
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors cursor-pointer shrink-0"
          >
            <span>Submit Engineering Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6-Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-neutral-900 border border-neutral-800 rounded p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-850">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-neutral-950 border border-neutral-800">
                      {s.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-orange-400">
                      PHASE {s.num}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase mt-4 group-hover:text-orange-400 transition-colors">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-850/60 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Contract Phase</span>
                <span className="text-neutral-400">Step {s.num} of 06</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Clarity Disclaimer */}
        <div className="mt-10 p-4 rounded bg-neutral-900/60 border border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-neutral-300 font-semibold uppercase">Scope Transparency: </span>
            <span>Site assembly, erection, and commissioning are governed strictly by agreed purchase order terms and mutual project boundaries.</span>
          </div>
          <span className="text-neutral-500 shrink-0">TECHNICAL SPECIFICATION DISCIPLINE</span>
        </div>

      </div>
    </section>
  );
};
