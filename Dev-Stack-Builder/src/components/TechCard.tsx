import type { TechItem } from '../data/techData';

interface TechCardProps {
  tech: TechItem;
  isSelected: boolean;
  onToggleSelect: (tech: TechItem) => void;
}

export const TechCard = ({ tech, isSelected, onToggleSelect }: TechCardProps) => {
  return (
    <div
      onClick={() => onToggleSelect(tech)}
      className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
        isSelected
          ? 'border-pink-500 ring-2 ring-pink-500/20 shadow-md'
          : 'border-slate-200 hover:border-slate-300 shadow-xs'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          <div>
            <h3 className="font-bold text-slate-900 leading-tight">{tech.name}</h3>
            <span className="text-xs text-slate-400 font-medium">{tech.category}</span>
          </div>
        </div>
        {tech.badge && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tech.badgeColor}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
        {tech.description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
        <span className="text-slate-400 font-medium">{tech.level}</span>
        <button
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
            isSelected
              ? 'bg-pink-600 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};