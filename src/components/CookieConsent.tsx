import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookieConsentProps {
  message: string;
  acceptText: string;
  declineText: string;
}

export const CookieConsent = ({ message, acceptText, declineText }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white p-4 md:p-6 shadow-2xl z-50 animate-slide-up">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base flex-1">{message}</p>
        <div className="flex gap-3 items-center">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            {declineText}
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium text-sm transition-colors shadow-lg"
          >
            {acceptText}
          </button>
          <button
            onClick={handleDecline}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
