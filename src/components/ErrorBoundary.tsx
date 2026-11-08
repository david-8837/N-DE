import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('NØDE App Uncaught Error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-[#07090e] text-white flex flex-col items-center justify-center p-6 select-none font-sans">
          <div className="max-w-lg w-full bg-[#0e121b] border border-red-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-mono text-xl font-bold">
                !
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">Application Exception</h2>
                <p className="text-xs text-neutral-400 font-mono">NØDE Studio Recovery Safeguard</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
              An unexpected render error occurred in NØDE Studio. Your keymap and configuration data in flash memory are preserved.
            </p>

            {this.state.error && (
              <div className="bg-[#05070a] border border-white/5 rounded-xl p-3 mb-6 font-mono text-xs text-red-300 max-h-36 overflow-y-auto break-all">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
              >
                Reload Studio
              </button>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-medium text-sm border border-white/10 transition-all"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
