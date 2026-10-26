import { 
  FileText, 
  Download, 
  AlertCircle, 
  CheckCircle,
  FileCheck2
} from 'lucide-react';
import { trustCredentials, siteMeta } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

export const TrustCredentialsSection: React.FC = () => {

  return (
    <section id="credentials" className="py-20 bg-gradient-to-b from-navy-950/80 via-steel-950/60 to-navy-950/80 relative overflow-hidden">
      {/* Subtle brand watermark */}
      <div className="absolute right-8 top-10 w-72 h-72 opacity-[0.02] pointer-events-none rounded-full overflow-hidden">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Watermark"
          className="w-full h-full object-contain filter invert"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Institutional Governance</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Regulatory Compliance & Quality Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soldier Security Services Ltd. operates within statutory private security mandates in Bangladesh, maintaining high training standards and strict documentation compliance.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustCredentials.map((cred) => (
            <div
              key={cred.id}
              className="sssl-card p-6 flex flex-col justify-between border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono uppercase text-slate-400">
                      {cred.year}
                    </span>
                  </div>

                  {cred.isVerified ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {cred.status}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {cred.status}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {cred.title}
                </h3>
                
                <p className="text-xs font-semibold text-slate-400 mb-3">
                  Authority: {cred.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {cred.licenseNumber && (
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Ref: <span className="text-slate-300">{cred.licenseNumber}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Corporate Brochure & Direct Verification Box */}
        <div className="bg-gradient-to-r from-navy-950 to-navy-900 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1.5">
              <FileCheck2 className="w-4 h-4" />
              <span>Official 6-Page Profile Document Ready</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Official SSSL Corporate Profile & Standard Operating Procedures
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Download our institutional briefing deck covering official registration (C-96185/11), terms of guard engagement, and verified 58-client portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              as="a"
              href={siteMeta.pdfProfileUrl}
              download={siteMeta.pdfDownloadFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Profile (PDF)</span>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
