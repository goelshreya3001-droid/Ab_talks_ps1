
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export function ProofCard({
  type,
  submitted,
  urlValue,
  onVerify,
  placeholder
}) {
  const [inputUrl, setInputUrl] = useState(urlValue || '');
  const [isVerifying, setIsVerifying] = useState(false);

  const isGithub = type === 'github';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputUrl.trim()) return;

    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      onVerify(inputUrl);
    }, 600);
  };

  return (
    <Card
      className={`transition-all ${
        submitted
          ? 'bg-emerald-50/30 border-emerald-200'
          : ''
      }`}
    >
      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          {isGithub ? (
            <div className="w-5 h-5 flex items-center justify-center text-slate-900 font-bold">
              GH
            </div>
          ) : (
            <div className="w-5 h-5 flex items-center justify-center text-sky-600 font-bold">
              in
            </div>
          )}

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {isGithub
                ? 'GitHub Proof of Work'
                : 'LinkedIn Proof of Work'}
            </h3>

            <p className="text-xs text-slate-500 mt-0.5">
              {isGithub
                ? 'Paste repository or commit URL'
                : 'Share your daily progress publicly'}
            </p>
          </div>

        </div>

        {submitted ? (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified
          </span>
        ) : (
          <span className="text-xs text-slate-400 font-medium">
            Pending
          </span>
        )}

      </div>

      <form onSubmit={handleSubmit} className="mt-3">

        <div className="flex flex-col sm:flex-row gap-2">

          <input
            type="url"
            required
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder={placeholder}
            disabled={submitted}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white disabled:opacity-70"
          />

          <Button
            type="submit"
            size="sm"
            variant={
              submitted
                ? 'outline'
                : isGithub
                  ? 'secondary'
                  : 'primary'
            }
            disabled={isVerifying || !inputUrl.trim()}
          >
            {isVerifying
              ? 'Verifying...'
              : submitted
                ? 'Update Link'
                : `Verify ${isGithub ? 'GitHub' : 'LinkedIn'}`}
          </Button>

        </div>

      </form>
    </Card>
  );
}

