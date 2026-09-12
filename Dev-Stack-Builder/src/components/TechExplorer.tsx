import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { TechCard } from './TechCard';
import type { TechItem } from './TechCard';

export const TechExplorer = () => {
  const [techList, setTechList] = useState<TechItem[]>([]);
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/TechData.json')
      .then((res) => res.json())
      .then((data: TechItem[]) => {
        setTechList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tech data:', err);
        setLoading(false);
      });
  }, []);

  const handleToggleSelect = (tech: TechItem) => {
    const exists = selectedStack.find((item) => item.id === tech.id);
    if (exists) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
      toast(`${tech.name} removed from stack!`, { icon: 'ℹ️' });
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All technologies removed!');
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-24">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Explore the Technologies</h2>
        <p className="text-slate-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {techList.map((tech) => {
            const isSelected = selectedStack.some((item) => item.id === tech.id);
            return (
              <TechCard 
                key={tech.id} 
                tech={tech} 
                isSelected={isSelected} 
                onToggleSelect={handleToggleSelect} 
              />
            );
          })}
        </div>

        
        <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm sticky top-6">
          <h3 className="text-sm font-bold text-slate-900 mb-1">Your Stack</h3>
          <p className="text-[11px] text-slate-400 mb-4">{selectedStack.length} Technology Selected</p>
          
          {selectedStack.length === 0 ? (
            <p className="text-xs text-slate-400 py-4 text-center border border-dashed border-slate-100 rounded-xl">Your stack is empty.</p>
          ) : (
            <div className="space-y-2.5">
              {selectedStack.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                    ) : (
                      <span className="w-5 h-5 flex items-center justify-center bg-slate-200 text-[10px] font-bold rounded">
                        {item.name.charAt(0)}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-slate-800">{item.name}</span>
                  </div>
                  <button
                    onClick={() => handleToggleSelect(item)}
                    className="text-slate-400 hover:text-red-500 text-xs font-bold px-1.5"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={handleRemoveAll}
                className="w-full mt-4 py-2 text-xs font-semibold text-red-500 hover:bg-red-50 rounded-xl transition border border-red-100"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};