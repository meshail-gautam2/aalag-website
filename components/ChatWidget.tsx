'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

import { SITE } from '@/lib/site';

/**
 * Floating assistant launcher + placeholder chat panel.
 *
 * {/* PLACEHOLDER: Replace with client's AI agent embed script *\/}
 *
 * The panel body is deliberately the only thing that needs replacing. When the client supplies
 * their agent, drop their <script> / <iframe> into the marked region below (or render it from
 * app/layout.tsx with next/script) and delete the placeholder transcript and input.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, and return focus to the launcher.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Panel */}
      <div
        ref={panelRef}
        id="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-label="Chat with our AI assistant"
        className={`w-[min(92vw,22rem)] origin-bottom-right overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-lift transition-all duration-300 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-95 opacity-0'
        }`}
      >
        <div className="flex items-start justify-between gap-3 bg-brand-dark px-5 py-4">
          <div>
            <p className="font-heading text-sm font-bold text-white">
              Chat with our AI Assistant
            </p>
            <p className="mt-0.5 text-xs text-white/55">Typically replies instantly</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={17} aria-hidden="true" />
          </button>
        </div>

        {/* ==== PLACEHOLDER: Replace with client's AI agent embed script ==== */}
        <div className="space-y-3 bg-brand-light px-5 py-5">
          <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3.5 text-sm leading-relaxed text-brand-dark shadow-sm">
            Hi! How can I help you today?
          </div>
          <p className="text-center text-[0.7rem] leading-relaxed text-brand-muted">
            This assistant is not connected yet. For anything urgent,{' '}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accentDark underline decoration-brand-accent/40 underline-offset-2"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </div>

        <form
          className="flex items-center gap-2 border-t border-brand-dark/[0.07] bg-white p-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="chat-input" className="sr-only">
            Your message
          </label>
          <input
            id="chat-input"
            type="text"
            placeholder="Type your message..."
            className="min-w-0 flex-1 rounded-lg border border-brand-dark/10 bg-brand-light px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-brand-dark transition-colors hover:bg-brand-accentDark hover:text-white"
          >
            <Send size={16} aria-hidden="true" />
          </button>
        </form>
        {/* ==== END PLACEHOLDER ==== */}
      </div>

      {/* Launcher */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-brand-dark shadow-lift ring-1 ring-brand-dark/5 transition-all duration-200 hover:bg-brand-accentDark hover:text-white active:scale-95"
      >
        {open ? (
          <X size={23} aria-hidden="true" />
        ) : (
          <MessageSquare size={23} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
