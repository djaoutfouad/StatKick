import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ToolMeta } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';

interface ToolCardProps {
  tool: ToolMeta;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { t, getToolTranslation } = useLanguage();
  const tr = getToolTranslation(tool.slug);

  // Dynamically resolve icon from lucide-react with fallback
  const IconComponent = (Icons as any)[tool.icon] || Icons.Activity;

  const categoryColors: Record<ToolMeta['category'], string> = {
    Performance: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    Market: 'text-amber-700 bg-amber-50 border-amber-200',
    Fantasy: 'text-purple-700 bg-purple-50 border-purple-200',
    Simulation: 'text-blue-700 bg-blue-50 border-blue-200',
    Tactical: 'text-rose-700 bg-rose-50 border-rose-200',
  };

  const displayName = tr.name || tool.name;
  const displayDesc = tr.description || tool.description;

  return (
    <div
      id={`tool-card-${tool.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-green-500/40 transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-green-600 group-hover:scale-105 group-hover:bg-green-50 transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <span
            className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${
              categoryColors[tool.category]
            }`}
          >
            {tool.category}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {displayName}
        </h3>
        <p className="mt-2 text-xs text-gray-600 line-clamp-3 leading-relaxed">
          {displayDesc}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-green-600">
        <span>{t.common.calculate}</span>
        <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>

      <Link
        to={`/tools/${tool.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Open ${displayName} calculator`}
      />
    </div>
  );
};
