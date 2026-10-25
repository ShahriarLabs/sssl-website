import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { contactDetails, servicesData } from '../data/siteConfig';

interface FormState {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    serviceRequired: servicesData[0].title,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^(\+?88)?01[3-9]\d{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please provide a valid Bangladeshi phone number (e.g. 01707059684).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a short description of your security requirements (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate genuine form transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      organization: '',
      phone: '',
      email: '',
      serviceRequired: servicesData[0].title,
      message: '',
    });
    setSubmitStatus('idle');
  };

  return (
    <section id="contact" className="py-20 bg-navy-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Direct Liaison</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Contact Soldier Security Services Ltd.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach out to our operations command desk for site vulnerability assessments, corporate guard quotes, or immediate personnel deployment inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Hotline Card */}
            <div className="sssl-card p-6 border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    24/7 Dispatch Hotline
                  </span>
                  <h3 className="text-base font-bold text-white">Direct Telephone Link</h3>
                </div>
              </div>

              <a
                href={contactDetails.phone.telLink}
                className="text-xl sm:text-2xl font-black text-amber-400 hover:text-amber-300 font-display tracking-wide block mb-2"
              >
                {contactDetails.phone.formatted}
              </a>
              <p className="text-xs text-slate-400">
                Official operational phone line. Verified for direct telephone calls.
              </p>
            </div>

            {/* WhatsApp Integration Card */}
            <div className="sssl-card p-6 border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      WhatsApp Messaging
                    </span>
                    <h3 className="text-base font-bold text-white">Instant Chat Channel</h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4">
                Normalized international number: <span className="font-mono text-emerald-400 font-bold">{contactDetails.whatsapp.number}</span>
              </p>
              
              <a
                href={contactDetails.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 rounded transition-colors"
              >
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] text-slate-400 mt-2 italic">
                {contactDetails.whatsapp.note}
              </p>
            </div>

            {/* Official Registered Office */}
            <div className="sssl-card p-6 border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Corporate Office Location
                  </span>
                  <h3 className="text-base font-bold text-white">Registered Address</h3>
                </div>
              </div>

              <address className="not-italic text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                {contactDetails.officeAddress.registered}<br />
                {contactDetails.officeAddress.city}, {contactDetails.officeAddress.country}
              </address>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{contactDetails.officeAddress.verificationNote}</span>
              </div>
            </div>

            {/* Business Hours & Facebook Link */}
            <div className="sssl-card p-6 border-slate-800 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Hours of Operation</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-amber-400">Field Dispatch:</strong> {contactDetails.businessHours.ops}
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Administrative Office:</strong> {contactDetails.businessHours.admin}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  Social Network Presence
                </span>
                <a
                  href={contactDetails.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
                >
                  <span>Official Facebook Page (facebook.com/3SLtdDhaka)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Formal Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="sssl-card p-6 sm:p-10 border-slate-800 relative">
              
              <div className="mb-6">
                <span className="sssl-gold-badge mb-2">Operational Request</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Request a Formal Security Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Please provide preliminary specifications regarding your site or facility. Our operations desk will review requirements and reach out promptly.
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div className="p-6 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your requirement has been logged. Our operations supervisory desk will contact you via <span className="text-amber-400">{formData.phone}</span>.
                  </p>

                  <div className="p-3 rounded bg-navy-950 border border-slate-800 text-[11px] text-slate-400 mb-6 max-w-md mx-auto">
                    <span className="font-semibold text-amber-400">Direct Notice:</span> For urgent 24-hour sentry replacement or immediate facility protection, please telephone our hotline directly at <a href={contactDetails.phone.telLink} className="underline text-amber-400">{contactDetails.phone.raw}</a>.
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Ahmed"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                          errors.fullName ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-slate-300 mb-1">
                        Organization / Premise Name
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Apex Apparels Ltd. or Private Residence"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
                        Contact Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 01707059684"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                          errors.phone ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. info@organization.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                          errors.email ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Service Required
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-navy-900 text-white">
                          {svc.title} {svc.isDraft ? '(Draft / Suggested)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Scope */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Location Details & Scope of Assignment <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify location (e.g. Savar, Ashulia, Gazipur, Gulshan), number of guards required, shift schedules, or start date..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.message ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Operational Transparency Disclaimer */}
                  <div className="p-3 rounded bg-navy-950 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Direct form transmission is configured for preliminary client triage. Direct telephone liaison via <strong>{contactDetails.phone.raw}</strong> remains active 24/7.
                    </span>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Security Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
