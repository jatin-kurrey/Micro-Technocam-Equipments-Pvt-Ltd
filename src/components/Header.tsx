import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openRfqModal: (preselectedProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, openRfqModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Equipment Catalog' },
    { id: 'industries', label: 'Industries' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'quality', label: 'Quality & Credentials' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/95 backdrop-blur border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between h-20">
          
          {/* ZONE 1: Single text element wordmark */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center text-left text-neutral-100 group transition-opacity hover:opacity-90"
            aria-label="Micro Technocam Home"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider uppercase text-neutral-100">
                MICRO TECHNOCAM
              </span>
              <span className="hidden sm:inline-block text-xs font-mono font-medium text-orange-500 tracking-widest uppercase">
                EQUIPMENTS
              </span>
            </div>
          </button>

          {/* ZONE 2: 4-6 clean text navigation links (single line, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative whitespace-nowrap cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ZONE 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openRfqModal()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => openRfqModal()}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-orange-600 rounded whitespace-nowrap"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-900/98 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 text-sm rounded transition-colors ${
                activeTab === item.id 
                  ? 'bg-neutral-800 text-orange-400 font-semibold' 
                  : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openRfqModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 rounded"
            >
              <span>Request Engineering Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919425200000"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-800 rounded"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Engineering Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
