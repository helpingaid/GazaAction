import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SearchCounterProps {
  title: string;
}

export const SearchCounter = ({ title }: SearchCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetchCount();

    const subscription = supabase
      .channel('search_counter_changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'search_counter',
        },
        (payload) => {
          if (payload.new && 'count' in payload.new) {
            setCount(payload.new.count as number);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchCount = async () => {
    const { data, error } = await supabase
      .from('search_counter')
      .select('count')
      .maybeSingle();

    if (data && !error) {
      setCount(data.count);
    }
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString('it-IT');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center mb-4">
        <TrendingUp className="w-8 h-8 text-teal-600" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">{title}</h3>
      <div className="text-5xl md:text-6xl font-bold text-teal-600 tracking-tight">
        {formatNumber(count)}
      </div>
    </div>
  );
};
