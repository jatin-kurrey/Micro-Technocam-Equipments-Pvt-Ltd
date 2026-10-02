import React from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenRfq: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenRfq }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur border-t border-neutral-800 px-3 py-2 flex items-center justify-between gap-2 h-14">
      <a
        href="tel:+919425200000"
        className="flex-1 py-2 px-2 text-center text-xs font-mono font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center gap-1.5"
      >
        <Phone className="w-3.5 h-3.5 text-orange-500" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919425200000?text=Hello%20Micro%20Technocam%20Team,%20I%20have%20an%20industrial%20equipment%20requirement."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 text-center text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 rounded flex items-center justify-center gap-1.5"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenRfq}
        className="flex-1.5 py-2 px-3 text-center text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 rounded flex items-center justify-center gap-1 shadow-sm whitespace-nowrap cursor-pointer"
      >
        <span>Request Quote</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
