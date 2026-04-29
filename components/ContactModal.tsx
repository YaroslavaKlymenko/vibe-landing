'use client'
import { useEffect, useRef, useState } from 'react'

type ChipGroup = { rev: string; vert: string }

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [chips, setChips] = useState<ChipGroup>({ rev: '', vert: '' })
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('open-booking-modal', onOpen)
    return () => window.removeEventListener('open-booking-modal', onOpen)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => nameRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => {
    setOpen(false)
    setSent(false)
    setChips({ rev: '', vert: '' })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      company: fd.get('company'),
      revenue: chips.rev,
      vertical: fd.get('vertical'),
      message: fd.get('message'),
    }
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // show success regardless — don't block UX on network errors
    }
    setSubmitting(false)
    setSent(true)
  }

  const toggleChip = (group: keyof ChipGroup, val: string) =>
    setChips((c) => ({ ...c, [group]: c[group] === val ? '' : val }))

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an intro"
      onKeyDown={handleKeyDown}
      className="modal-overlay"
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'mf .25s ease',
      }}
    >
      <style>{`
        @keyframes mf { from { opacity: 0 } to { opacity: 1 } }
        @media (max-width: 768px) {
          .modal-overlay { padding: 12px; align-items: flex-end; }
          .modal-panel {
            grid-template-columns: 1fr !important;
            box-shadow: none !important;
            border-radius: 20px !important;
            max-height: 92vh !important;
          }
          .modal-left {
            border-radius: 18px 18px 0 0 !important;
            padding: 28px 22px !important;
          }
          .modal-left h3 { font-size: 26px !important; line-height: 1.1 !important; }
          .modal-left p { display: none; }
          .modal-form {
            border-radius: 0 0 18px 18px !important;
            padding: 24px 22px !important;
          }
          .modal-field-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .modal-thanks { border-radius: 0 0 18px 18px !important; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,18,16,0.72)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Panel */}
      <div
        className="modal-panel"
        style={{
          position: 'relative', zIndex: 1,
          width: '100%', maxWidth: 960,
          maxHeight: '92vh', overflowY: 'auto',
          background: 'var(--cream)',
          border: '2px solid var(--charcoal)',
          borderRadius: 28,
          boxShadow: '12px 12px 0 var(--charcoal)',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1fr',
        }}>
        {/* Close */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: 'absolute', top: 16, right: 18,
            width: 38, height: 38, borderRadius: '50%',
            background: 'var(--charcoal)', color: 'var(--cream)',
            fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2, cursor: 'pointer', border: 'none',
          }}
        >×</button>

        {/* Left */}
        <div
          className="modal-left"
          style={{
            background: 'var(--charcoal)', color: 'var(--cream)',
            padding: '44px 40px',
            borderRadius: '26px 0 0 26px',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)' }}>
            Book an intro · Q3&apos;26
          </div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 36, lineHeight: 1.1 }}>
            If AI is on your board agenda, tell us what you&apos;re <span style={{ fontStyle: 'italic', color: 'var(--lime)' }}>working on.</span>
          </h3>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.65, color: 'rgba(245,237,214,0.72)' }}>
            If you&apos;re a mid-market operator and AI is on your board agenda, tell us what you&apos;re working on and where you&apos;re stuck. We&apos;ll tell you if +Vibe is the right fit.
          </p>
          <ul style={{ borderTop: '1px solid rgba(245,237,214,0.18)', marginTop: 'auto' }}>
            {[
              { k: 'Reply', v: '< 24h' },
              { k: 'First call', v: 'This week' },
              { k: 'Contact', v: 'eugene@aiplusvibe.com' },
            ].map((row) => (
              <li key={row.k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '12px 0', borderBottom: '1px solid rgba(245,237,214,0.1)',
                fontFamily: 'var(--mono)', fontSize: 12,
              }}>
                <span style={{ color: 'rgba(245,237,214,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{row.k}</span>
                <span>{row.v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="modal-form"
          style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative' }}
        >
          <Field label="Your name">
            <input ref={nameRef} name="name" type="text" placeholder="Alex Rivera" required style={inputStyle} />
          </Field>

          <div className="modal-field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Field label="Work email">
              <input name="email" type="email" placeholder="alex@company.com" required style={inputStyle} />
            </Field>
            <Field label="Company">
              <input name="company" type="text" placeholder="Acme Logistics" required style={inputStyle} />
            </Field>
          </div>

          <Field label="Revenue band">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {['<$1M', '$1M–$5M', '$5M–$20M', '$20M+'].map((v) => (
                <button
                  key={v} type="button"
                  onClick={() => toggleChip('rev', v)}
                  style={chipStyle(chips.rev === v)}
                >{v}</button>
              ))}
            </div>
          </Field>

          <Field label="Vertical">
            <input name="vertical" type="text" placeholder="e.g. Logistics & Supply Chain" style={inputStyle} />
          </Field>

          <Field label="What are you working on — where are you stuck?">
            <textarea
              name="message" rows={3}
              placeholder="We're rolling up independent 3PLs — sales ops are the bottleneck…"
              style={{ ...inputStyle, resize: 'none' }}
            />
          </Field>

          <button type="submit" className="btn btn-lime" disabled={submitting} style={{ alignSelf: 'flex-start', marginTop: 8, opacity: submitting ? 0.7 : 1 }}>
            {submitting ? 'Sending…' : <><span>Send it over</span> <span className="btn-arrow">→</span></>}
          </button>

          {/* Thank you overlay */}
          {sent && (
            <div
              className="modal-thanks"
              style={{
                position: 'absolute', inset: 0,
                background: 'var(--cream)',
                borderRadius: '0 26px 26px 0',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 20, padding: 40, textAlign: 'center',
                fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.4,
              }}>
              <div style={{
                width: 68, height: 68, borderRadius: '50%',
                background: 'var(--lime)', border: '2px solid var(--charcoal)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32,
              }}>✓</div>
              <div>
                <strong style={{ display: 'block', fontStyle: 'italic', fontSize: 34 }}>Got it.</strong>
                We&apos;ll reply within 24 hours.
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(42,39,35,0.6)', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--charcoal)',
  background: 'transparent', border: 'none',
  borderBottom: '1.5px solid rgba(42,39,35,0.25)',
  padding: '8px 2px', outline: 'none', width: '100%',
}

function chipStyle(active: boolean): React.CSSProperties {
  return {
    fontFamily: 'var(--mono)', fontSize: 11.5,
    padding: '8px 14px', borderRadius: 999,
    background: active ? 'var(--charcoal)' : 'transparent',
    border: `1.5px solid ${active ? 'var(--charcoal)' : 'rgba(42,39,35,0.25)'}`,
    color: active ? 'var(--cream)' : 'var(--charcoal)',
    cursor: 'pointer', transition: 'all .15s ease',
  }
}
