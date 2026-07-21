import BookingButton from './BookingButton'

export default function Close() {
  return (
    <section
      id="close"
      style={{
        padding: '140px 0',
        background: `
          radial-gradient(ellipse at 20% 120%, rgba(244,137,107,0.18), transparent 60%),
          radial-gradient(ellipse at 90% 20%, rgba(200,245,90,0.14), transparent 55%),
          var(--charcoal-2)
        `,
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Scanlines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, rgba(245,237,214,0.03) 0, rgba(245,237,214,0.03) 1px, transparent 1px, transparent 36px)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative' }}>
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--cream)', borderColor: 'rgba(245,237,214,0.3)' }}>
            <span className="dot" />
            Close
          </span>
        </div>

        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(32px, 4.2vw, 64px)',
            color: 'var(--cream)',
            maxWidth: 1100,
          }}
        >
          One call.<br />
          No deck, no pitch.<br />
          <span className="it"><span className="underline-accent lime">Tell us what you own</span></span><br />
          <span className="it">and what&apos;s next.</span>
        </h2>

        <p
          className="reveal d1"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(245,237,214,0.72)',
            maxWidth: 640,
            marginTop: 36,
          }}
        >
          You tell us what you own and what you&apos;re acquiring. We tell you, honestly, where AI moves the number and whether we&apos;re the right team to build it.
        </p>

        <div className="reveal d2 close-ctas" style={{ marginTop: 72, display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
          <BookingButton className="btn btn-lime" />
        </div>
      </div>
    </section>
  )
}
