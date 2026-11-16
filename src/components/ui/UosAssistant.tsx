'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, RotateCcw, X } from 'lucide-react';

import './UosAssistant.css';

export interface UosAssistantProps {
  defaultOpen?: boolean;
}

/* ─────────────────────────────────────────────────────────────
 * Guided navigation model — rule-based decision tree (no API)
 * ───────────────────────────────────────────────────────────── */

interface NavCard {
  title: string;
  desc: string;
  href: string;
  cta: string;
}

interface Choice {
  label: string;
  to: string;
  set?: Record<string, string>;
}

interface TreeNode {
  bot: string;
  choices?: Choice[];
  card?: NavCard;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
  card?: NavCard;
}

const GREETING =
  'Assalam-o-Alaikum! Welcome to the University of Swat. What would you like help finding today?';

const MAIN_CHOICES: Choice[] = [
  { label: 'Apply to University', to: 'a-degree' },
  { label: 'Explore Programs & Degrees', to: 'b-field' },
  { label: 'Find Faculties & Departments', to: 'c-faculty' },
  { label: 'Administration, Library & Student Services', to: 'd-office' },
  { label: 'Academic Calendar, Forms & Affiliated Colleges', to: 'e-doc' },
];

const TYPING_MS = 350;

const FIELDS: Record<string, { label: string; programs: string[] }> = {
  computing: { label: 'Computing & IT', programs: ['BS Computer Science', 'BS Software Engineering', 'BS Information Technology'] },
  sciences: { label: 'Sciences', programs: ['BS Biochemistry', 'BS Chemistry', 'BS Physics', 'BS Biology'] },
  health: { label: 'Allied Health & Pharmacy', programs: ['DPT (Doctor of Physical Therapy)', 'BS Medical Lab Technology (MLT)', 'Pharm-D'] },
  management: { label: 'Management, Commerce & Economics', programs: ['BBA (Hons)', 'BS Economics', 'BS Commerce'] },
  law: { label: 'Law, English & Social Sciences', programs: ['LLB (5-Year)', 'BS English', 'BS Sociology'] },
};

const FACULTY_DEPTS: Record<string, string[]> = {
  physical: ['Mathematics', 'Physics', 'Statistics', 'Computer Science', 'Software Engineering'],
  chemical: ['Chemistry', 'Biochemistry', 'Botany', 'Zoology', 'Microbiology', 'Environmental Sciences'],
  management: ['Management Sciences', 'Economics', 'Commerce', 'Tourism & Hospitality', 'Political Science', 'Social Work'],
  humanities: ['English', 'Urdu', 'Islamic Studies', 'Law (LLB)', 'Pakistan Studies', 'History'],
  campuses: ['Women Sub-Campus', 'Shangla Sub-Campus', 'Charbagh Main Campus'],
};

export default function UosAssistant({ defaultOpen = false }: UosAssistantProps = {}) {
  const [open, setOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState<Message[]>(() =>
    defaultOpen ? [{ role: 'bot', text: GREETING }] : [],
  );
  const [choices, setChoices] = useState<Choice[]>(() => (defaultOpen ? MAIN_CHOICES : []));
  const [typing, setTyping] = useState(false);
  const [flowStarted, setFlowStarted] = useState(false);

  const flowRef = useRef<Record<string, string>>({});
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<number | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  const scrollToTop = useCallback(() => {
    listRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, choices, typing, scrollToBottom]);

  /* Clear any pending typing timer on unmount. */
  useEffect(() => {
    return () => {
      if (typingTimerRef.current !== null) window.clearTimeout(typingTimerRef.current);
    };
  }, []);

  /* Focus the first interactive control when the panel opens. */
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      rootRef.current?.querySelector<HTMLElement>('.uos-assistant__choice, .uos-assistant__footer-btn')?.focus();
    }, 120);
    return () => window.clearTimeout(t);
  }, [open]);

  /* Escape closes; Tab traps focus inside the panel. */
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
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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

  /* Click outside closes the panel. */
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

  /* ── Resolve a node id to its bot message/choices/card ── */
  const resolveNode = useCallback((id: string): TreeNode => {
    const f = flowRef.current;

    switch (id) {
      case 'start':
        return { bot: GREETING, choices: MAIN_CHOICES };

      /* Flow A — Apply to University */
      case 'a-degree':
        return {
          bot: 'Which degree level are you applying for?',
          choices: [
            { label: 'Undergraduate (BS / LLB / DPT)', to: 'a-need', set: { degree: 'undergraduate' } },
            { label: 'Graduate (MS / MPhil / MBA)', to: 'a-need', set: { degree: 'graduate' } },
            { label: 'Doctoral (PhD)', to: 'a-need', set: { degree: 'doctoral' } },
          ],
        };
      case 'a-need':
        return {
          bot: 'What do you need right now?',
          choices: [
            { label: 'Step-by-Step Application Guide', to: 'a-guide' },
            { label: 'Semester Fee Structure', to: 'a-fees' },
            { label: 'Merit Lists & Quotas', to: 'a-merit' },
            { label: 'Scholarships & Financial Aid', to: 'a-grants' },
          ],
        };
      case 'a-guide':
        return {
          bot:
            'Fall 2026 applications run through the online portal. Choose your degree to see its exact eligibility, admission criteria, and required documents — then contact the Admissions Desk for the procurement 1,500 processing challan details.',
          card: { title: 'Browse Degrees & Admission Criteria', desc: 'Pick a program to see eligibility & steps', href: '/programs', cta: 'Explore Programs' },
        };
      case 'a-fees':
        return {
          bot:
            'Semester fees are set per program and campus. Open any degree page to see its official fee-per-semester schedule, hostel dues, and payment notes.',
          card: { title: 'View Semester Fees by Program', desc: 'Fee schedules are listed on each degree', href: '/programs', cta: 'See Fees' },
        };
      case 'a-merit':
        return {
          bot:
            'Merit lists and seat quotas are published per department and intake. Each degree page explains its merit ranking and quota rules.',
          card: { title: 'Merit & Quota Details', desc: 'See how each program ranks applicants', href: '/programs', cta: 'View Merit Info' },
        };
      case 'a-grants':
        return {
          bot:
            'Financial aid at the University of Swat is managed through official forms — including the KPEF need-based scholarship application for deserving undergraduates.',
          card: { title: 'Scholarships & Financial Aid Forms', desc: 'Download the KPEF & aid application forms', href: '/academics/downloads', cta: 'Open Downloads' },
        };

      /* Flow B — Explore Programs & Degrees */
      case 'b-field':
        return {
          bot: 'Which field of study interests you most?',
          choices: [
            { label: 'Computing & IT', to: 'b-level', set: { field: 'computing' } },
            { label: 'Sciences (Biochemistry, Chemistry, Physics, Biology)', to: 'b-level', set: { field: 'sciences' } },
            { label: 'Allied Health & Pharmacy (DPT, MLT, Pharm-D)', to: 'b-level', set: { field: 'health' } },
            { label: 'Management, Commerce & Economics', to: 'b-level', set: { field: 'management' } },
            { label: 'Law, English & Social Sciences', to: 'b-level', set: { field: 'law' } },
          ],
        };
      case 'b-level':
        return {
          bot: 'Which degree level are you considering?',
          choices: [
            { label: 'BS (4-Year) / Undergraduate', to: 'b-rec', set: { level: 'BS (4-Year)' } },
            { label: 'MS / MPhil / MBA', to: 'b-rec', set: { level: 'MS / MPhil / MBA' } },
            { label: 'PhD', to: 'b-rec', set: { level: 'PhD' } },
          ],
        };
      case 'b-rec': {
        const field = FIELDS[f.field] ?? FIELDS.computing;
        return {
          bot:
            `Based on your interest in ${field.label} at the ${f.level ?? 'selected'} level, the university offers ` +
            `${field.programs.join(', ')}. Open the catalog for full admission criteria and syllabi.`,
          card: { title: 'Explore Degree Programs', desc: `${field.programs.length} suggested programs`, href: '/programs', cta: 'Browse Programs' },
        };
      }

      /* Flow C — Find Faculties & Departments */
      case 'c-faculty':
        return {
          bot: 'Which campus or faculty are you looking for?',
          choices: [
            { label: 'Physical & Computational Sciences', to: 'c-rec', set: { fac: 'physical' } },
            { label: 'Chemical & Life Sciences', to: 'c-rec', set: { fac: 'chemical' } },
            { label: 'Management & Social Sciences', to: 'c-rec', set: { fac: 'management' } },
            { label: 'Languages, Humanities & Law', to: 'c-rec', set: { fac: 'humanities' } },
            { label: 'Women Campus / Shangla Sub-Campus', to: 'c-rec', set: { fac: 'campuses' } },
          ],
        };
      case 'c-rec': {
        const depts = FACULTY_DEPTS[f.fac] ?? FACULTY_DEPTS.physical;
        return {
          bot:
            `That faculty groups these teaching departments: ${depts.join(', ')}. Explore them for staff, programs, and research.`,
          card: { title: 'Faculties & Departments', desc: 'Browse faculties & teaching departments', href: '/faculty', cta: 'Open Faculties' },
        };
      }

      /* Flow D — Administration, Library & Student Services */
      case 'd-office':
        return {
          bot: 'Which university office or service do you need?',
          choices: [
            { label: 'Registrar, Exams & Treasurer Offices', to: 'd-offices' },
            { label: 'Central Library & Digital Access', to: 'd-library' },
            { label: 'Youth Development Centre (YDC) & Career Help', to: 'd-ydc' },
            { label: 'Proctorial Board, Alumni & Media Cell', to: 'd-proctorial' },
          ],
        };
      case 'd-offices':
        return {
          bot:
            'The statutory offices — Registrar, Controller of Examinations, and Treasurer — sit in the Administration Block at Charbagh Main Campus. You can reach each office directly from the address page.',
          card: { title: 'University Offices', desc: 'Registrar · Exams · Treasurer', href: '/administration?tab=offices', cta: 'Open Offices' },
        };
      case 'd-library':
        return {
          bot:
            'The Central Library offers 45,000+ print volumes and HEC national digital library access. The Chief Librarian and circulation desk are based at Charbagh Main Campus.',
          card: { title: 'Central Library', desc: 'Books · HEC digital · Reading rooms', href: '/administration?tab=central-library', cta: 'Open Library' },
        };
      case 'd-ydc':
        return {
          bot:
            'The Youth Development Centre (near the Main Gate at Charbagh Campus) helps with careers, scholarships, societies, and talent programs — reachable at ydc@uswat.edu.pk.',
          card: { title: 'Youth Development Centre', desc: 'Careers · scholarships · societies', href: '/administration?tab=ydc', cta: 'Open YDC' },
        };
      case 'd-proctorial':
        return {
          bot:
            'The Proctorial Board keeps campus safe and fair; the Alumni Association (UOSAA) and Media Cell also sit under university services in the Administration Block.',
          card: { title: 'Proctorial, Alumni & Media', desc: 'Discipline · UOSAA · Media Cell', href: '/administration?tab=proctorial-board', cta: 'Open Section' },
        };

      /* Flow E — Calendar, forms & affiliations */
      case 'e-doc':
        return {
          bot: 'What academic record or document are you looking for?',
          choices: [
            { label: '2026–2027 Semester & Exam Dates', to: 'e-calendar' },
            { label: 'Download Statutory Forms & Statutes', to: 'e-downloads' },
            { label: 'Affiliated Public & Private Colleges', to: 'e-affiliations' },
            { label: 'Grading, Attendance & QEC Rules', to: 'e-academics' },
          ],
        };
      case 'e-calendar':
        return {
          bot: 'Semester dates, examination schedules, and public holidays are all listed on the official academic calendar.',
          card: { title: 'Academic Calendar', desc: '2026–2027 session dates', href: '/academics/calendar', cta: 'View Calendar' },
        };
      case 'e-downloads':
        return {
          bot: 'Official statutes, proformas, and regulatory templates are available to download from the public repository.',
          card: { title: 'Downloads & Statutory Forms', desc: 'Statutes · proformas · templates', href: '/academics/downloads', cta: 'Browse Files' },
        };
      case 'e-affiliations':
        return {
          bot: 'The registry of affiliated public and private degree colleges across Swat, Shangla, and Buner is maintained by the university.',
          card: { title: 'Affiliated Colleges', desc: 'Public & private sector registry', href: '/affiliated-colleges', cta: 'Open Colleges' },
        };
      case 'e-academics':
        return {
          bot: 'Grading rules, attendance policy, and QEC quality standards are detailed on the Academics hub.',
          card: { title: 'Academics Rules & QEC', desc: 'Grading · attendance · quality', href: '/academics', cta: 'Open Academics' },
        };

      default:
        return { bot: GREETING, choices: MAIN_CHOICES };
    }
  }, []);

  const handleChoice = useCallback(
    (choice: Choice) => {
      if (typing) return;
      if (choice.set) flowRef.current = { ...flowRef.current, ...choice.set };
      setFlowStarted(true);

      // Immediately push the student's selection (crimson bubble).
      setMessages((prev) => [...prev, { role: 'user', text: choice.label }]);

      // Lock old choices + show the typing indicator for a natural pause.
      setChoices([]);
      setTyping(true);

      if (typingTimerRef.current !== null) window.clearTimeout(typingTimerRef.current);

      typingTimerRef.current = window.setTimeout(() => {
        const node = resolveNode(choice.to);
        setMessages((prev) => [...prev, { role: 'bot', text: node.bot, card: node.card }]);
        setChoices(node.choices ?? []);
        setTyping(false);
        typingTimerRef.current = null;
      }, TYPING_MS);
    },
    [typing, resolveNode],
  );

  const resetToStart = useCallback(() => {
    if (typingTimerRef.current !== null) {
      window.clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    flowRef.current = {};
    setTyping(false);
    setMessages([{ role: 'bot', text: GREETING }]);
    setChoices(MAIN_CHOICES);
    setFlowStarted(false);
    scrollToTop();
  }, [scrollToTop]);

  const handleStartOver = useCallback(() => {
    resetToStart();
  }, [resetToStart]);

  const handleBackToMain = useCallback(() => {
    resetToStart();
  }, [resetToStart]);

  const handleClose = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => toggleRef.current?.focus(), 60);
  }, []);

  const handleToggle = () => {
    const next = !open;
    // Seed the greeting the first time the panel opens.
    if (next && messages.length === 0) {
      setMessages([{ role: 'bot', text: GREETING }]);
      setChoices(MAIN_CHOICES);
    }
    setOpen(next);
  };

  return (
    <div ref={rootRef} className="uos-assistant" aria-label="University of Swat navigation guide">
      {/* Launcher — always visible; icon swaps between chat and chevron */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="uos-assistant-dialog"
        title={open ? 'Close assistant' : 'Open assistant'}
        aria-label={open ? 'Close University of Swat navigation guide' : 'Open University of Swat navigation guide'}
        onClick={handleToggle}
        className="uos-assistant__toggle"
      >
        {open ? (
          <ChevronDown size={26} strokeWidth={2.4} className="uos-assistant__toggle-chevron" />
        ) : (
          <MessageCircle size={22} strokeWidth={2} />
        )}
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
                UoS Navigation Guide
              </h2>
              <p className="uos-assistant__subtitle">
                <span className="uos-assistant__status" aria-hidden="true" />
                Instant Campus Navigator
              </p>
            </div>
            {flowStarted && (
              <button
                type="button"
                onClick={handleStartOver}
                className="uos-assistant__startover"
                aria-label="Start over"
                title="Start over"
              >
                <RotateCcw size={14} strokeWidth={2.2} />
                <span>Start Over</span>
              </button>
            )}
            <button type="button" onClick={handleClose} className="uos-assistant__close" aria-label="Close assistant">
              <X size={16} strokeWidth={2} />
            </button>
          </header>

          <div ref={listRef} className="uos-assistant__list" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`uos-assistant__msg uos-assistant__msg--${msg.role}`}
                style={{ animationDelay: `${Math.min(i, 6) * 0.04}s` }}
              >
                {msg.role === 'bot' && (
                  <span className="uos-assistant__badge" aria-hidden="true">
                    <img src="/uos-logo-circle.png" alt="" />
                  </span>
                )}
                <div className="uos-assistant__content">
                  <span className={`uos-assistant__label uos-assistant__label--${msg.role}`}>
                    {msg.role === 'bot' ? 'UOS GUIDE' : 'YOU'}
                  </span>
                  <span className="uos-assistant__bubble">{msg.text}</span>
                  {msg.card && (
                    <a href={msg.card.href} className="uos-assistant__navcard" target="_blank" rel="noopener noreferrer">
                      <span className="uos-assistant__navcard-inner">
                        <span className="uos-assistant__navcard-title">{msg.card.title}</span>
                        <span className="uos-assistant__navcard-desc">{msg.card.desc}</span>
                      </span>
                      <span className="uos-assistant__navcard-cta">{msg.card.cta}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="uos-assistant__msg uos-assistant__msg--bot" role="status" aria-label="UoS Guide is checking">
                <span className="uos-assistant__badge" aria-hidden="true">
                  <img src="/uos-logo-circle.png" alt="" />
                </span>
                <div className="uos-assistant__content">
                  <span className="uos-assistant__label uos-assistant__label--bot">UOS GUIDE</span>
                  <span className="uos-assistant__bubble uos-assistant__bubble--typing">
                    <span className="uos-assistant__dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="uos-assistant__typing-text">UoS Guide is checking…</span>
                  </span>
                </div>
              </div>
            )}

            {!typing && choices.length > 0 && (
              <div className="uos-assistant__choices" role="group" aria-label="Choices">
                {choices.map((choice, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleChoice(choice)}
                    className="uos-assistant__choice"
                  >
                    {choice.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} aria-hidden="true" />
          </div>

          {/* Footer — Back to Main Topics (clean reset); hidden on the initial welcome step */}
          {flowStarted && (
            <div className="uos-assistant__footer">
              <button type="button" onClick={handleBackToMain} className="uos-assistant__footer-btn">
                <ArrowLeft size={14} strokeWidth={2.2} />
                <span>Back to Main Topics</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
