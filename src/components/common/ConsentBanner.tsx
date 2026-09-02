import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

export const ConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('statkick_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth UX
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('statkick_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('statkick_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 rounded-2xl bg-white border border-gray-200 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-green-50 text-green-600 shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Privacy & Consent Notice
            </h4>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            StatKick executes all statistical calculations locally on your device. We use local storage for your language display preference, alongside standard privacy-conscious advertising cookies when AdSense is active. Read our{' '}
            <Link to="/privacy" className="text-green-600 underline hover:no-underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/cookies" className="text-green-600 underline hover:no-underline">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
