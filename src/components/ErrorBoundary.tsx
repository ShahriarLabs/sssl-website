import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ShieldAlert, RefreshCw, Phone } from 'lucide-react';
import { contactDetails } from '../data/siteConfig';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SSSL App Uncaught Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-950 text-slate-200 flex items-center justify-center p-6">
          <div className="max-w-md w-full sssl-card p-8 border-slate-800 text-center">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-amber-400">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <h1 className="text-xl font-bold text-white mb-2 font-display">
              System Notice
            </h1>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              We encountered a temporary interface loading anomaly. For immediate security coordination or personnel requests, please contact our dispatch desk directly.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={contactDetails.phone.telLink}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-amber-400 text-navy-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: {contactDetails.phone.raw}</span>
              </a>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded bg-navy-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:text-white"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
