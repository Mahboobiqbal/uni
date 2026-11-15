'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

import './UosAssistant.css';

export interface UosAssistantProps {
  apiEndpoint?: string;
  defaultOpen?: boolean;
}

const QUICK_PROMPTS = [
  'Fall 2026 Admission Deadlines',
  'BS & MPhil Fee Structure',
  'HEC & KPEF Scholarships',
  '73 Degree Programs & Eligibility',
];

export default function UosAssistant({ apiEndpoint, defaultOpen = false }: UosAssistantProps = {}) {
  const [open, setOpen] = useState(defaultOpen);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([]);

  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        window.setTimeout(() => toggleRef.current?.focus(), 60);
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = rootRef.current?.querySelector<HTMLElement>('#uos-assistant-dialog');
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (open) toggleRef.current?.focus();
    };
  }, [open]);

  const addBotMessage = useCallback((text: string) => {
    setMessages((prev) => [...prev, { role: 'bot', text }]);
  }, []);

  const sendMessage = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || isSending) return;

      setMessages((prev) => [...prev, { role: 'user', text }]);
      setIsSending(true);

      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        if (apiEndpoint) {
          const res = await fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text }),
            signal: controller.signal,
          });
          if (!res.ok) throw new Error('Upstream error');
          const data = await res.json();
          addBotMessage(typeof data.reply === 'string' ? data.reply : String(data));
        } else {
          await new Promise((r) => setTimeout(r, 700));
          addBotMessage(
            "I'm not connected to a live assistant yet. For admissions, programmes, " +
            "or research enquiries, please contact the University of Swat directly: " +
            "admissions@uosw.edu.pk or visit /contact.",
          );
        }
      } catch {
        if (controller.signal.aborted) return;
        addBotMessage(
          'Sorry, I could not reach the assistant right now. Please try again later or ' +
          'contact the University of Swat admissions office.',
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsSending(false);
          abortControllerRef.current = null;
        }
      }
    },
    [apiEndpoint, isSending, addBotMessage],
  );

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      const text = inputValue.trim();
      if (!text) return;
      setInputValue('');
      void sendMessage(text);
    },
    [inputValue, sendMessage],
  );

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div ref={rootRef} className="uos-assistant" aria-label="University of Swat assistant">
      {/* Launcher — hidden while the panel is open */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="uos-assistant-dialog"
        title={open ? 'Close assistant' : 'Open assistant'}
        aria-label={open ? 'Close University of Swat assistant' : 'Open University of Swat assistant'}
        onClick={handleToggle}
        className={`uos-assistant__toggle ${open ? 'uos-assistant__toggle--hidden' : ''}`}
      >
        {open ? <X size={22} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={2} />}
      </button>

      {open && (
        <div
          id="uos-assistant-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="uos-assistant-title"
          className="uos-assistant__panel"
        >
          <header className="uos-assistant__header">
            <span className="uos-assistant__mark" aria-hidden="true">
              <img src="/uos-logo-circle.png" alt="" />
            </span>
            <div className="uos-assistant__header-text">
              <h2 id="uos-assistant-title" className="uos-assistant__title">
                UoS Assistant
              </h2>
              <p className="uos-assistant__subtitle">
                <span className="uos-assistant__status" aria-hidden="true" />
                Admissions &amp; Academic Desk • Online
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.setTimeout(() => toggleRef.current?.focus(), 60);
              }}
              className="uos-assistant__close"
              aria-label="Close assistant"
            >
              <X size={16} strokeWidth={2} />
            </button>
          </header>

          <div className="uos-assistant__list" role="log" aria-live="polite" aria-relevant="additions">
            {messages.length === 0 && (
              <div className="uos-assistant__empty">
                <p className="uos-assistant__empty-title">How can I help?</p>
                <p className="uos-assistant__empty-text">
                  Ask about admissions, programmes, campus life, or research.
                </p>
                <div className="uos-assistant__quick">
                  {QUICK_PROMPTS.map((q) => (
                    <button key={q} type="button" onClick={() => void sendMessage(q)} className="uos-assistant__quick-chip">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`uos-assistant__msg uos-assistant__msg--${msg.role}`}
                style={{ animationDelay: `${Math.min(i, 6) * 0.04}s` }}
              >
                <span className={`uos-assistant__avatar uos-assistant__avatar--${msg.role}`} aria-hidden="true">
                  {msg.role === 'user' ? 'U' : 'S'}
                </span>
                <span className="uos-assistant__bubble">{msg.text}</span>
              </div>
            ))}
            {isSending && (
              <div className="uos-assistant__msg uos-assistant__msg--bot" role="status" aria-label="Assistant is typing">
                <span className="uos-assistant__avatar uos-assistant__avatar--bot" aria-hidden="true">
                  S
                </span>
                <span className="uos-assistant__bubble uos-assistant__bubble--typing">
                  <span className="uos-assistant__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>

          <form onSubmit={handleSubmit} className="uos-assistant__composer">
            <div className="uos-assistant__composer-inner">
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={true}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isSending}
                placeholder="Message…"
                className="uos-assistant__input"
                aria-label="Type a message"
              />
              <button type="submit" disabled={!inputValue.trim() || isSending} className="uos-assistant__send" aria-label="Send message">
                <Send size={15} strokeWidth={2.2} />
              </button>
            </div>
            <p className="uos-assistant__hint">Powered by University of Swat · Replies may be limited</p>
          </form>
        </div>
      )}
    </div>
  );
}
