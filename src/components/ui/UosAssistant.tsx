'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import './UosAssistant.css';

/**
 * UoS Assistant — React Bits–style AI chatbot for the University of Swat.
 *
 * Style: premium editorial, institutional, restrained. Circular crest toggle
 * badge with a physics-based tilt engine (same engine as ProfileCard), letterhead
 * panel with serif headings, hairline rules, Forest Green / University Crimson
 * palette, and micro-animations throughout (panel entrance, staggered message
 * rise, three-dot typing pulse, tactile send).
 *
 * Backend: no real LLM is wired by default. Set NEXT_PUBLIC_CHATBOT_API_URL
 * (or pass `apiEndpoint`) to connect one; until then the bot replies with an
 * honest contact-direction message.
 */

export interface UosAssistantProps {
  /** Optional API endpoint for a real AI backend. */
  apiEndpoint?: string;
  /** Initial collapsed state. Defaults to closed. */
  defaultOpen?: boolean;
}

interface PhysicsAxis {
  p: number; // current position
  v: number; // current velocity
  target: number; // spring target
}

export default function UosAssistant({
  apiEndpoint,
  defaultOpen = false,
}: UosAssistantProps = {}) {
  const [open, setOpen] = useState(defaultOpen);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; text: string }>>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Physics engine state for the toggle badge tilt (mirrors ProfileCard).
  const x = useRef<PhysicsAxis>({ p: 0, v: 0, target: 0 });
  const y = useRef<PhysicsAxis>({ p: 0, v: 0, target: 0 });
  const light = useRef<PhysicsAxis>({ p: 0, v: 0, target: 0 });
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const slowUntilRef = useRef<number>(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Escape closes the panel and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Restore focus to toggle when unmounting while open.
  useEffect(() => {
    return () => {
      if (open) toggleRef.current?.focus();
      cancelAnimationFrame(rafRef.current);
    };
  }, [open]);

  const addBotMessage = useCallback((text: string) => {
    setMessages((prev) => [...prev, { role: 'bot', text }]);
  }, []);

  const handleSend = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      const text = inputValue.trim();
      if (!text || isSending) return;

      const userMessage = { role: 'user' as const, text };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
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
          // Honest fallback — not a fake AI persona.
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
    [apiEndpoint, inputValue, isSending, addBotMessage],
  );

  const handleToggle = () => setOpen((prev) => !prev);

  // ── Physics tilt engine for the toggle badge ──
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const size = { width: root.offsetWidth, height: root.offsetHeight };
    const strength = 14;
    const depth = 6;
    let raf = 0;
    let last = performance.now();

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const write = () => {
      const angle = reduced ? 0 : strength;
      const tilt = Math.min(1, Math.hypot(x.current.p, y.current.p));
      const style = root.style;
      style.setProperty('--ua-light-x', `${((x.current.p + 1) * 0.5 * size.width).toFixed(1)}px`);
      style.setProperty('--ua-light-y', `${((y.current.p + 1) * 0.5 * size.height).toFixed(1)}px`);
      style.setProperty('--ua-pointer-x', `${((x.current.p + 1) * 50).toFixed(2)}%`);
      style.setProperty('--ua-pointer-y', `${((y.current.p + 1) * 50).toFixed(2)}%`);
      style.setProperty('--ua-band-x', `${(50 + x.current.p * 15).toFixed(2)}%`);
      style.setProperty('--ua-band-y', `${(50 + y.current.p * 15).toFixed(2)}%`);
      style.setProperty('--ua-rotate-x', `${(y.current.p * angle).toFixed(3)}deg`);
      style.setProperty('--ua-rotate-y', `${(-x.current.p * angle).toFixed(3)}deg`);
      style.setProperty('--ua-shift-x', `${(x.current.p * (reduced ? 0 : depth)).toFixed(2)}px`);
      style.setProperty('--ua-shift-y', `${(y.current.p * (reduced ? 0 : depth)).toFixed(2)}px`);
      style.setProperty('--ua-reach', tilt.toFixed(4));
      style.setProperty('--ua-tilt', (tilt * light.current.p).toFixed(4));
      style.setProperty('--ua-active', light.current.p.toFixed(4));
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      const slow = now < slowUntilRef.current;
      const stiffness = slow ? 24 : 120;
      const damping = slow ? 9 : 16;
      const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        for (const axis of [x.current, y.current, light.current]) {
          axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h;
          axis.p += axis.v * h;
        }
      }
      write();
      const moving =
        Math.abs(x.current.target - x.current.p) > 0.0005 ||
        Math.abs(y.current.target - y.current.p) > 0.0005 ||
        Math.abs(light.current.target - light.current.p) > 0.002;
      if (moving) {
        raf = requestAnimationFrame(frame);
      } else {
        x.current.p = x.current.target;
        y.current.p = y.current.target;
        light.current.p = light.current.target;
        write();
        raf = 0;
      }
    };

    const wake = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const aim = (nx: number, ny: number, on = true) => {
      x.current.target = clamp(nx, -1, 1);
      y.current.target = clamp(ny, -1, 1);
      light.current.target = on ? 1 : 0;
      slowUntilRef.current = 0;
      wake();
    };

    const aimAt = (event: PointerEvent | MouseEvent) => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      aim(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const release = () => aim(0, 0, false);

    const onEnter = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') aimAt(event);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') aimAt(event);
    };
    const onLeave = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') release();
    };

    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);

    // Intro wake.
    if (!reduced) {
      x.current.p = 0.4;
      y.current.p = -0.35;
      light.current.p = 1;
      slowUntilRef.current = performance.now() + 1200;
      write();
      wake();
    } else {
      write();
    }

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="uos-assistant" aria-label="University of Swat assistant">
      {/* ── Toggle badge ── */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="uos-assistant-dialog"
        aria-label={open ? 'Close University of Swat assistant' : 'Open University of Swat assistant'}
        onClick={handleToggle}
        className="uos-assistant__toggle"
        title="Open University of Swat assistant"
      >
        {open ? (
          <span className="uos-assistant__close" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        ) : (
          <>
            <span className="uos-assistant__badge-ring" aria-hidden="true" />
            <span className="uos-assistant__badge-ring-inner" aria-hidden="true" />
            <span className="uos-assistant__badge-mono" aria-hidden="true">
              UoS
            </span>
            <span className="uos-assistant__badge-glow" aria-hidden="true" />
            <span className="uos-assistant__badge-glint" aria-hidden="true" />
            <span className="uos-assistant__badge-shade" aria-hidden="true" />
          </>
        )}
        <span className="sr-only">{open ? 'Close assistant panel' : 'Open assistant panel'}</span>
      </button>

      {/* ── Dialog panel ── */}
      {open && (
        <div
          id="uos-assistant-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="uos-assistant-title"
          className="uos-assistant__panel"
        >
          <div className="uos-assistant__header">
            <span className="uos-assistant__header-mark">UoS</span>
            <div className="uos-assistant__header-text">
              <h2 id="uos-assistant-title" className="uos-assistant__header-title">
                UoS Assistant
              </h2>
              <p className="uos-assistant__header-sub">University of Swat</p>
            </div>
            <span className="uos-assistant__header-rule" aria-hidden="true" />
          </div>

          <div className="uos-assistant__list">
            {messages.length === 0 && (
              <p className="uos-assistant__empty">
                Ask about admissions, programmes, campus life, or research.
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`uos-assistant__msg ${msg.role === 'user' ? 'uos-assistant__msg--user' : 'uos-assistant__msg--bot'}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span
                  className={`uos-assistant__avatar ${msg.role === 'user' ? 'uos-assistant__avatar--user' : 'uos-assistant__avatar--bot'}`}
                  aria-hidden="true"
                >
                  {msg.role === 'user' ? 'U' : 'S'}
                </span>
                <span className="uos-assistant__bubble">{msg.text}</span>
              </div>
            ))}
            {isSending && (
              <div className="uos-assistant__typing" role="status" aria-label="Assistant is typing">
                <span className="uos-assistant__typing-dots">
                  <span className="uos-assistant__typing-dot" aria-hidden="true" />
                  <span className="uos-assistant__typing-dot" aria-hidden="true" />
                  <span className="uos-assistant__typing-dot" aria-hidden="true" />
                </span>
                <span className="uos-assistant__bubble" style={{ fontSize: '11px', opacity: 0.75, marginLeft: 0 }}>
                  Composing reply…
                </span>
              </div>
            )}
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>

          <form onSubmit={handleSend} className="uos-assistant__composer">
            <div className="uos-assistant__composer-inner">
              <input
                type="text"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={true}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isSending}
                placeholder="Type a message…"
                className="uos-assistant__input"
              />
              <button
                type="button"
                onClick={handleToggle}
                className="uos-assistant__close-btn"
                aria-label="Close assistant"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                type="submit"
                disabled={!inputValue.trim() || isSending}
                className="uos-assistant__send"
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
