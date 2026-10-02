import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Send, CheckCircle2, Paperclip, AlertCircle, FileText, ArrowRight } from 'lucide-react';

interface RfqSectionProps {
  initialProduct?: string;
}

export const RfqSection: React.FC<RfqSectionProps> = ({ initialProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    equipment: initialProduct || 'Ladle Refining Furnace (LRF)',
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

  const timelineOptions = [
    'Immediate (1–3 Months)',
    'Next Quarter (3–6 Months)',
    'Budgetary / Project Planning (6–12 Months)',
    'Tender / Procurement Specification',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrorMessage('File size exceeds 15MB limit. Please upload a smaller PDF or specification sheet.');
        return;
      }
      setErrorMessage('');
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.phone || !formData.email) {
      setErrorMessage('Please complete all required fields (Name, Company, Phone, Email).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedId = `MTE-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setInquiryId('');
    setFileName(null);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      equipment: 'Ladle Refining Furnace (LRF)',
      capacity: '',
      application: '',
      quantity: '1',
      deliveryLocation: '',
      projectTimeline: 'Immediate (1–3 Months)',
      message: '',
    });
  };

  return (
    <section id="rfq-section" className="py-20 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-500">
            OFFICIAL B2B PROCUREMENT CHANNEL
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mt-2">
            HAVE AN INDUSTRIAL EQUIPMENT REQUIREMENT?
          </h2>
          <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
            Share your application and equipment requirements with our engineering team. We review general arrangements, process duty cycles, and custom dimensions to prepare detailed commercial and technical proposals.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-neutral-950 border border-neutral-800 rounded p-6 sm:p-10 max-w-4xl">
          
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-14 h-14 bg-emerald-950/60 border border-emerald-600 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold">
                  ENQUIRY LOGGED SUCCESSFULLY
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
                  RFQ Reference: {inquiryId}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your requirement for <strong className="text-white">{formData.equipment}</strong> on behalf of <strong className="text-white">{formData.companyName}</strong> has been transmitted to our engineering desk.
                </p>
              </div>

              {/* Receipt Summary Box */}
              <div className="max-w-md mx-auto p-4 bg-neutral-900 border border-neutral-800 rounded text-left text-xs font-mono space-y-2 text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">Equipment:</span>
                  <span className="text-white font-medium">{formData.equipment}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">Target Capacity:</span>
                  <span className="text-white">{formData.capacity || 'As per custom recommendation'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">Delivery Destination:</span>
                  <span className="text-white">{formData.deliveryLocation || 'Pan-India / Site specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Contact Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                {fileName && (
                  <div className="flex justify-between pt-1 border-t border-neutral-800">
                    <span className="text-neutral-500">Attached Spec PDF:</span>
                    <span className="text-orange-400 truncate max-w-[200px]">{fileName}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
                <a
                  href={`mailto:sales@microtechnocam.com?subject=Inquiry ${inquiryId}&body=Hello Micro Technocam Engineering Team,%0D%0AReferencing RFQ: ${inquiryId}`}
                  className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors inline-flex items-center gap-2"
                >
                  <span>Email Direct Confirmation</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3 bg-red-950/60 border border-red-800 rounded flex items-center gap-3 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Form Grid 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Company Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Bhilai Ispat Industries Ltd."
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Phone / Mobile <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Official Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@company.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Form Grid 2: Equipment Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-neutral-850">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Product / Equipment Required <span className="text-orange-500">*</span>
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} ({prod.categoryName})
                      </option>
                    ))}
                    <option value="Custom Engineering Project">Custom Heavy Engineering / Fabrication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Required Capacity / Size
                  </label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="e.g. 15 Ton Heat / 500 TPD / 25T SWL / 18m Span"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Application / Material
                  </label>
                  <input
                    type="text"
                    value={formData.application}
                    onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                    placeholder="e.g. DRI Feeding / Billet Casting / Foundry Scrap"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 1 Set / 2 Units"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Plant Delivery Location
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    placeholder="e.g. Raipur, Chhattisgarh / Bellary, Karnataka"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Project Timeline
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form Grid 3: Message & File Upload */}
              <div className="pt-3 border-t border-neutral-850 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Technical Specifications / Notes / Scope
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Include details such as civil layout limitations, power supply, ambient temperatures, or special metallurgy required."
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                {/* Upload Requirement / Specification PDF */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Upload Requirement / Specification PDF (Optional, max 15MB)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="px-4 py-2.5 bg-neutral-900 border border-neutral-700 hover:border-neutral-600 rounded text-xs font-mono text-neutral-300 hover:text-white cursor-pointer flex items-center gap-2 transition-colors">
                      <Paperclip className="w-3.5 h-3.5 text-orange-500" />
                      <span>{fileName ? 'Change File' : 'Select PDF / Drawing'}</span>
                      <input
                        type="file"
                        accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    {fileName && (
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="truncate max-w-xs">{fileName}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-neutral-500">
                  <span>* Required fields. All technical documents handled under strict confidentiality.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 disabled:opacity-50 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Transmitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
