import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { X, CheckCircle2, Paperclip, AlertCircle, FileText, ArrowRight, Send } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    equipment: preselectedProduct || 'Ladle Refining Furnace (LRF)',
    capacity: '',
    application: '',
    quantity: '1',
    deliveryLocation: '',
    projectTimeline: 'Immediate (1–3 Months)',
    message: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, equipment: preselectedProduct }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrorMessage('File size exceeds 15MB limit.');
        return;
      }
      setErrorMessage('');
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.phone || !formData.email) {
      setErrorMessage('Please fill in required fields (Name, Company, Phone, Email).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      const ref = `MTE-MODAL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryId(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div>
            <span className="text-[11px] font-mono text-orange-500 uppercase tracking-widest block">
              OFFICIAL PROCUREMENT INQUIRY
            </span>
            <h3 id="rfq-modal-title" className="font-display text-lg font-bold text-white uppercase">
              Request Equipment Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-600 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-white uppercase">
                Enquiry Transmitted
              </h4>
              <p className="text-xs font-mono text-orange-400">
                Reference ID: {inquiryId}
              </p>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your requirement for <strong>{formData.equipment}</strong> on behalf of <strong>{formData.companyName}</strong> has been logged. Our commercial engineering team will respond with preliminary data sheet and budget estimates.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-2.5 bg-red-950/60 border border-red-800 rounded flex items-center gap-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Jindal Strips & Alloys"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="engineer@company.com"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-800">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Equipment Type
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Custom Engineering Project">Custom Heavy Engineering Equipment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Desired Capacity / Size
                  </label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="e.g. 15T LRF / 800mm Conveyor"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Plant Delivery Location
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    placeholder="e.g. Durg, Chhattisgarh"
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                    Project Timeline
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Immediate (1–3 Months)">Immediate (1–3 Months)</option>
                    <option value="Next Quarter (3–6 Months)">Next Quarter (3–6 Months)</option>
                    <option value="Project Planning (6–12 Months)">Project Planning (6–12 Months)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                  Technical Requirements / Scope Details
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify process temperature, cycle time, ambient conditions, or scope boundaries."
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                  Upload Specification PDF / Layout Drawing (Optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="px-3 py-2 bg-neutral-950 border border-neutral-700 hover:border-neutral-600 rounded text-xs font-mono text-neutral-300 cursor-pointer flex items-center gap-2">
                    <Paperclip className="w-3.5 h-3.5 text-orange-500" />
                    <span>{fileName ? 'Replace File' : 'Browse PDF'}</span>
                    <input type="file" accept=".pdf,.doc,.docx,.dwg" onChange={handleFileChange} className="hidden" />
                  </label>
                  {fileName && (
                    <span className="text-xs font-mono text-emerald-400 truncate max-w-[200px]">{fileName}</span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? <span>Transmitting...</span> : <span>Send Procurement RFQ</span>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
