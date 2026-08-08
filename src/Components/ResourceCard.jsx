import React from 'react';
import { ExternalLink, BookOpen, Code2 } from 'lucide-react';
import { Badge } from './Badge';

export function ResourceCard({ resource }) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-xs transition flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition">{resource.title}</h4>
            <Badge size="sm" variant="default">{resource.type}</Badge>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">{resource.desc}</p>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition shrink-0 ml-2" />
    </a>
  );
}