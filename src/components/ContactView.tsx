import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  Building, 
  Factory, 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface ContactViewProps {
  onRequestQuote: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onRequestQuote }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Equipment Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-14 bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            CORPORATE & ENGINEERING DIRECTORY
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mt-2">
            CONTACT OUR ENGINEERING TEAM
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Connect directly with our engineering and technical sales desks for equipment sizing, commercial quotations, vendor registration, and works visits.
          </p>
        </div>

        {/* Dual Location Cards: Registered Office vs Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Operational Facility in Chhattisgarh */}
          <div className="p-7 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-orange-400 font-semibold flex items-center gap-2">
                  <Factory className="w-4 h-4 text-orange-500" />
                  WORKS & MANUFACTURING OPERATIONS
                </span>
                <span className="text-xs font-mono text-neutral-400">CHHATTISGARH</span>
              </div>

              <h2 className="font-display text-xl font-bold text-white uppercase mt-4">
                Durg-Bhilai Industrial Unit
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Joratarai Industrial Area, District Durg, Chhattisgarh, India
              </p>

              <div className="mt-5 space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Manufacturing & Dispatch Facility</span>
                    <span className="text-neutral-400">
                      Located in the Joratarai / Durg-Bhilai heavy engineering belt.
                    </span>
                    <span className="text-[11px] text-amber-400/90 block mt-0.5 font-mono">
                      [Exact street plot number to be confirmed on client formal letterhead]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Verified GST Registration</span>
                    <span className="text-neutral-300 font-mono select-all">GSTIN: {COMPANY_INFO.gstin}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Operating Shifts</span>
                    <span className="text-neutral-400">{COMPANY_INFO.contact.salesTiming}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Joratarai+Durg+Chhattisgarh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono font-medium text-neutral-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors inline-flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Open in Maps</span>
              </a>
              <button
                onClick={onRequestQuote}
                className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors"
              >
                Inquire For Works
              </button>
            </div>
          </div>

          {/* Card 2: Registered Corporate Office in New Delhi */}
          <div className="p-7 bg-neutral-900 border border-neutral-800 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-neutral-400 font-semibold flex items-center gap-2">
                  <Building className="w-4 h-4 text-orange-500" />
                  CORPORATE REGISTERED OFFICE
                </span>
                <span className="text-xs font-mono text-neutral-400">NEW DELHI</span>
              </div>

              <h2 className="font-display text-xl font-bold text-white uppercase mt-4">
                New Delhi Corporate Office
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                National Capital Territory of Delhi, India
              </p>

              <div className="mt-5 space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Corporate Statutory Registry</span>
                    <span className="text-neutral-400">
                      Incorporated 2010 under the Registrar of Companies (RoC), Delhi.
                    </span>
                    <span className="text-[11px] text-amber-400/90 block mt-0.5 font-mono">
                      [Exact registered address pin code subject to RoC master data confirmation]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Verified Corporate Identification</span>
                    <span className="text-neutral-300 font-mono select-all">CIN: {COMPANY_INFO.cin}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Corporate Affairs</span>
                    <span className="text-neutral-400">info@microtechnocam.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-850 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=New+Delhi+India"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono font-medium text-neutral-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors inline-flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Delhi Location</span>
              </a>
              <a
                href="mailto:info@microtechnocam.com"
                className="px-4 py-2 text-xs font-mono font-medium text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded transition-colors"
              >
                Email Corporate Office
              </a>
            </div>
          </div>

        </div>

        {/* Quick Communication Hub: Phone, Email, WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <a
            href="tel:+919425200000"
            className="p-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Direct Phone Call
            </span>
            <span className="text-sm font-mono font-bold text-white block mt-1">
              +91 94252 XXXXX
            </span>
            <span className="text-[11px] text-neutral-500 mt-1 block">
              Mon–Sat: 9:00 AM – 6:30 PM IST
            </span>
          </a>

          <a
            href="https://wa.me/919425200000?text=Hello%20Micro%20Technocam%20Team,%20I%20have%20an%20industrial%20equipment%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-neutral-900 border border-neutral-800 hover:border-emerald-700/60 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Instant WhatsApp Inquiry
            </span>
            <span className="text-sm font-mono font-bold text-white block mt-1">
              Connect on WhatsApp
            </span>
            <span className="text-[11px] text-neutral-500 mt-1 block">
              Quick messaging for technical specs
            </span>
          </a>

          <a
            href="mailto:sales@microtechnocam.com"
            className="p-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Official Email Transmission
            </span>
            <span className="text-sm font-mono font-bold text-white block mt-1">
              sales@microtechnocam.com
            </span>
            <span className="text-[11px] text-neutral-500 mt-1 block">
              Commercial proposals & drawing attachments
            </span>
          </a>

        </div>

        {/* Direct Contact Form */}
        <div className="bg-neutral-900 border border-neutral-800 rounded p-6 sm:p-10 max-w-3xl">
          <div className="mb-6">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              MESSAGE TRANSMISSION
            </span>
            <h2 className="font-display text-2xl font-bold text-white uppercase mt-1">
              Send a Direct Message
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              For general inquiries, vendor registrations, or technical questions.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-display text-lg font-bold text-white uppercase">Message Dispatched</h3>
              <p className="text-xs text-neutral-300">
                Thank you, {contactForm.name}. Your message has been routed to our technical support team.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-mono uppercase text-orange-400 hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                    placeholder="e.g. Anil Sharma"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                    placeholder="e.g. Steel Products Pvt. Ltd."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                  Subject / Topic
                </label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="General Equipment Inquiry">General Equipment Inquiry</option>
                  <option value="Secondary Metallurgy / LRF Inquiry">Secondary Metallurgy / LRF Inquiry</option>
                  <option value="Continuous Casting Machine (CCM) Inquiry">Continuous Casting Machine (CCM) Inquiry</option>
                  <option value="Material Handling / Conveyors Inquiry">Material Handling / Conveyors Inquiry</option>
                  <option value="Cranes & Lifting Inquiry">Cranes & Lifting Inquiry</option>
                  <option value="Vendor Registration">Vendor Registration</option>
                  <option value="Works Visit Request">Works Visit Request</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-750 rounded text-xs text-white focus:outline-none focus:border-orange-500"
                  placeholder="How can our engineering team assist with your plant requirements?"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {submitting ? <span>Transmitting...</span> : <span>Send Message</span>}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
