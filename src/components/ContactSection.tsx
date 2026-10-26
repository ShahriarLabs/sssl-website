import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  FileDown,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { contactDetails, servicesData, siteMeta } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

interface FormState {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  visitorAddress: string;
  serviceRequired: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  visitorAddress?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    visitorAddress: '',
    serviceRequired: servicesData[0].title,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'unconnected' | 'error'>('idle');

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
    if (!formData.visitorAddress.trim()) {
      newErrors.visitorAddress = 'Your facility, factory, or premise address is required.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description of requirements (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const backendEndpoint = (import.meta as any).env?.VITE_CONTACT_API_URL;

    if (backendEndpoint) {
      try {
        const res = await fetch(backendEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setSubmitStatus('success');
        } else {
          setSubmitStatus('error');
        }
      } catch (err) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Honest transparency: No backend endpoint is configured yet on this frontend
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('unconnected');
      }, 700);
    }
  };

  // Build prefilled WhatsApp message from user input
  const getWhatsAppPrefilledUrl = () => {
    const text = 
`*Security Quotation Request - Soldier Security Services Ltd.*
*Name:* ${formData.fullName}
*Organization:* ${formData.organization || 'Not specified'}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Premise Location:* ${formData.visitorAddress}
*Service Needed:* ${formData.serviceRequired}
*Scope / Message:* ${formData.message}`;

    return `https://wa.me/8801707059684?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy-950/90 via-steel-950/80 to-navy-950/95 relative overflow-hidden">
      {/* Clearly visible authentic circular brand watermark */}
      <div className="absolute right-10 bottom-10 w-80 h-80 sm:w-96 sm:h-96 opacity-20 pointer-events-none select-none">
        <img
          src="/images/sssl-logo-circular.png"
          alt="SSSL Official Circular Brand"
          className="w-full h-full object-contain aspect-square"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="sssl-section-heading">Operational Liaison</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
            Request a Security Service / Quotation
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Submit your facility parameters below to request quotation for unarmed manned guards, supervisor rounds, or specialized factory asset protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Hotline Card */}
            <div className="sssl-card p-6 border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    24/7 Operations Hotline
                  </span>
                  <h3 className="text-base font-bold text-white">Direct Telephone Link</h3>
                </div>
              </div>

              <a
                href={contactDetails.phone.telLink}
                className="text-2xl sm:text-3xl font-black text-amber-400 hover:text-amber-300 font-display tracking-wide block mb-2"
              >
                {contactDetails.phone.raw}
              </a>
              <p className="text-xs text-slate-400">
                Official operational phone line for immediate guard mobilization and site inspections.
              </p>
            </div>

            {/* Official Registered Office & Registration Card */}
            <div className="sssl-card p-6 border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Registered Company Office
                  </span>
                  <h3 className="text-base font-bold text-white">Corporate Headquarters</h3>
                </div>
              </div>

              <address className="not-italic text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                {contactDetails.officeAddress.registered}<br />
                {contactDetails.officeAddress.city}, {contactDetails.officeAddress.country}
              </address>

              <div className="pt-3 border-t border-slate-800/80 space-y-1 text-[11px] font-mono text-slate-400">
                <p>Registration No: <span className="text-amber-400 font-semibold">{contactDetails.officeAddress.registrationNo}</span></p>
                <p>Registration Date: <span className="text-slate-300">{contactDetails.officeAddress.dateOfRegistration}</span></p>
                <p>Signatory: <span className="text-slate-300">Md. Kamal Hossain (Director)</span></p>
              </div>
            </div>

            {/* Download Profile & WhatsApp Cards */}
            <div className="sssl-card p-6 border-slate-800 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Official Document Access
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  SSSL Company Profile & Client Portfolio
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  Official 6-page briefing document with formal quotation terms, registration certificate data, and complete 58-client roster.
                </p>

                <a
                  href={siteMeta.pdfProfileUrl}
                  download={siteMeta.pdfDownloadFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shadow"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Company Profile (PDF)</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">WhatsApp Operations Desk</span>
                    <span className="text-xs font-mono text-emerald-400">{contactDetails.whatsapp.number}</span>
                  </div>
                  <a
                    href={contactDetails.whatsapp.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                    aria-label="Open WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Formal Quotation Request Form */}
          <div className="lg:col-span-7">
            <div className="sssl-card p-6 sm:p-10 border-slate-800 relative">
              
              <div className="mb-6">
                <span className="sssl-gold-badge mb-2">Service Request</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Get a Guarding Quotation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Please specify your facility location and staffing requirements. All submissions are handled under strict confidentiality.
                </p>
              </div>

              {submitStatus === 'unconnected' ? (
                /* Honest Gateway Notice (No Fake Submission) */
                <div className="p-6 rounded-lg bg-amber-950/25 border border-amber-500/40 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-amber-900/60 border border-amber-500 text-amber-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    Form Endpoint Pending Integration
                  </span>

                  <h4 className="text-lg font-bold text-white mt-2 mb-2">
                    Request Validated & Ready for Transmission
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    Your quotation details for <strong className="text-white">{formData.fullName}</strong> at <strong className="text-white">{formData.visitorAddress}</strong> have been validated. Because this website frontend is not yet connected to a live email relay server, we do not pretend the message was sent automatically.
                  </p>

                  <p className="text-xs text-amber-300 mb-6 font-semibold">
                    You can transmit your exact completed request directly to SSSL operations with 1 click:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                    <a
                      href={getWhatsAppPrefilledUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded text-center transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={contactDetails.phone.telLink}
                      className="w-full sm:flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded text-center transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Hotline: {contactDetails.phone.raw}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Return to Edit Request</span>
                  </button>
                </div>
              ) : submitStatus === 'success' ? (
                /* Genuine Success State when backend is connected */
                <div className="p-6 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Quotation Request Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6">
                    Our operations command will contact you via {formData.phone} to coordinate your site assessment.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-2 text-xs font-bold uppercase text-navy-950 bg-amber-400 rounded"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Validated Form */
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
                        Company / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Apex Apparels or Private Residence"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
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
                        placeholder="e.g. manager@factory.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                          errors.email ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Premise Address (Clear separation from company address) */}
                  <div>
                    <label htmlFor="visitorAddress" className="block text-xs font-semibold text-slate-300 mb-1">
                      Premise / Facility Location for Security Deployment <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="visitorAddress"
                      name="visitorAddress"
                      value={formData.visitorAddress}
                      onChange={handleChange}
                      placeholder="e.g. Plot 18, Jamgora, Ashulia, Savar, Dhaka"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.visitorAddress ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.visitorAddress && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.visitorAddress}</p>
                    )}
                  </div>

                  {/* Service Needed Dropdown */}
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
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Staffing Requirements & Details <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify number of guards needed, shifts (day/night/24-hr), or expected start date..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-navy-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.message ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Direct Notice */}
                  <div className="p-3 rounded bg-navy-950 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Direct hotline liaison via <strong>{contactDetails.phone.raw}</strong> is accessible 24/7 for emergency guard mobilization.
                    </span>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                          <span>Validating Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Quotation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </MagneticButton>
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
