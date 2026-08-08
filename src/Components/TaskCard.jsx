import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Code, Sparkles } from 'lucide-react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';

export function TaskCard({ task, completed = false }) {
  return (
    <Card highlight={!completed} className="relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge variant="emerald">DAY {task.day}</Badge>
          <Badge variant="default">{task.difficulty}</Badge>
        </div>
        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {task.estimatedTime}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 leading-snug">
        {task.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
        {task.description}
      </p>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Code className="w-4 h-4 text-emerald-600" />
          <span>{task.category}</span>
        </div>
        
        <Link to={`/day/${task.day}`}>
          <Button size="sm" variant={completed ? "outline" : "primary"} icon={ArrowRight}>
            {completed ? "Review Build" : `Continue Day ${task.day}`}
          </Button>
        </Link>
      </div>
    </Card>
  );
}