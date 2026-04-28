import RevealInit from './RevealInit'
import BookingButton from './BookingButton'

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: 'var(--charcoal)',
        color: 'var(--cream)',
        minHeight: '100vh',
        padding: '100px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <RevealInit />

      {/* Ticker */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 78, left: 0, right: 0,
          overflow: 'hidden',
          borderTop: '1px solid rgba(245,237,214,0.12)',
          borderBottom: '1px solid rgba(245,237,214,0.12)',
          padding: '10px 0',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <style>{`
          @keyframes ticker { to { transform: translateX(-50%); } }
          .ticker-track { animation: ticker 42s linear infinite; }
          .ticker-track span::before { content: '◆'; margin-right: 48px; color: var(--lime); }
        `}</style>
        <div
          className="ticker-track"
          style={{
            display: 'inline-flex', gap: 48,
            whiteSpace: 'nowrap',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(245,237,214,0.55)',
            paddingLeft: 48,
          }}
        >
          <span>EBITDA Growth Lab</span><span>Agent Swarms</span><span>Mid-Market Operators</span><span>Margin on the Upside</span><span>Client-Owned Infra</span><span>90 Days to First Result</span><span>Map · Build · Run</span>
          <span>EBITDA Growth Lab</span><span>Agent Swarms</span><span>Mid-Market Operators</span><span>Margin on the Upside</span><span>Client-Owned Infra</span><span>90 Days to First Result</span><span>Map · Build · Run</span>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 48 }}>
        {/* Eyebrow */}
        <div className="reveal hero-eyebrow" style={{ marginBottom: 44, color: 'var(--cream)' }}>
          <span className="pill" style={{ borderColor: 'rgba(245,237,214,0.3)', color: 'var(--cream)' }}>
            <span className="dot" />
            AI EBITDA Growth Lab · Est. 2025
          </span>
        </div>

        {/* H1 */}
        <h1
          className="reveal d1"
          style={{
            fontSize: 'clamp(32px, 4.2vw, 68px)',
            lineHeight: 0.96,
            letterSpacing: '-0.025em',
            maxWidth: 1280,
            marginBottom: 24,
            fontFamily: 'var(--serif)',
          }}
        >
          <span style={{ display: 'block' }}>We <span className="it" style={{ color: 'var(--lime)' }}>raise your metrics.</span></span>
          <span style={{ display: 'block' }}>You pay us from the upside.</span>
        </h1>

        {/* Who we are */}
        <p
          className="reveal d2"
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 2.4vw, 30px)',
            color: 'rgba(245,237,214,0.8)',
            maxWidth: 720,
            marginTop: 6,
          }}
        >
          <strong style={{
            fontStyle: 'normal',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--salmon)',
            display: 'block',
            marginBottom: 10,
          }}>Who we are</strong>
          AI EBITDA Growth Lab for mid-market operators.
        </p>

        {/* Subhead */}
        <p
          className="reveal d3"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 620,
            color: 'rgba(245,237,214,0.75)',
            marginTop: 24,
          }}
        >
          We embed inside non-tech businesses and deploy proprietary AI agent swarms that grow revenue and cut OPEX. Our fee comes out of the margin we create — not your budget.
        </p>

        {/* CTAs */}
        <div className="reveal d4" style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap', alignItems: 'center' }}>
          <BookingButton className="btn btn-lime" />
          <a href="#what" className="btn btn-ghost" style={{ borderColor: 'rgba(245,237,214,0.4)', color: 'var(--cream)' }}>
            How it works
          </a>
          <a
            href="mailto:eugene@aiplusvibe.com"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'rgba(245,237,214,0.55)',
              letterSpacing: '0.08em',
              marginLeft: 8,
              borderBottom: '1px solid rgba(245,237,214,0.2)',
              paddingBottom: 2,
            }}
          >
            eugene@aiplusvibe.com
          </a>
        </div>

      </div>
    </section>
  )
}
