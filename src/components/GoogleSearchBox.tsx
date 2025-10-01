import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GoogleSearchBoxProps {
  placeholder: string;
  buttonText: string;
}

export const GoogleSearchBox = ({ placeholder, buttonText }: GoogleSearchBoxProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=e36db80eb79a24fd4';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    await incrementSearchCounter();

    const searchInput = document.querySelector('.gsc-input input') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = query;
      const searchButton = document.querySelector('.gsc-search-button') as HTMLButtonElement;
      if (searchButton) {
        searchButton.click();
      }
    }

    if (window.gtag) {
      window.gtag('event', 'search', {
        search_term: query,
      });
    }
  };

  const incrementSearchCounter = async () => {
    const { data: currentData } = await supabase
      .from('search_counter')
      .select('id, count')
      .maybeSingle();

    if (currentData) {
      await supabase
        .from('search_counter')
        .update({ count: currentData.count + 1, updated_at: new Date().toISOString() })
        .eq('id', currentData.id);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 text-lg rounded-xl border-2 border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all shadow-lg"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          <span>{buttonText}</span>
        </button>
      </form>

      <div className="hidden">
        <div className="gcse-search"></div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
