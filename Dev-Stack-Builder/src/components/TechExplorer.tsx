import { useState } from 'react';
import { techList,type TechItem } from '../data/techData';
import { TechCard } from './TechCard';

export const TechExplorer = () => {

  const [selectedStack, setSelectedStack] = useState<TechItem[]>(() =>
    techList.filter((item) => item.id === 'svelte' || item.id === 'redis')
  );

  const handleToggleSelect = (tech: TechItem) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    } else {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveAll = () => setSelectedStack([]);

  const handleRemoveItem = (id: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-1 font-medium text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Main Tech Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techList.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isSelected={selectedStack.some((item) => item.id === tech.id)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>

        
        <div className="lg:col-span-1 sticky top-6">
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-slate-400 font-medium mb-4">
              {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            <div className="space-y-3 mb-6">
              {selectedStack.length === 0 ? (
                <p className="text-xs text-slate-400 italic text-center py-4">
                  No technologies selected yet.
                </p>
              ) : (
                selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-none">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {selectedStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full py-2.5 rounded-lg border border-rose-200 text-rose-500 font-semibold text-sm hover:bg-rose-50 transition-colors cursor-pointer"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};