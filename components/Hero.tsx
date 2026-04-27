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
        padding: '140px 0 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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

      <div className="wrap" style={{ paddingTop: 96 }}>
        {/* Eyebrow */}
        <div className="reveal" style={{ marginBottom: 80, color: 'var(--cream)' }}>
          <span className="pill" style={{ borderColor: 'rgba(245,237,214,0.3)', color: 'var(--cream)' }}>
            <span className="dot" />
            AI EBITDA Growth Lab · Est. 2025
          </span>
        </div>

        {/* H1 */}
        <h1
          className="reveal d1"
          style={{
            fontSize: 'clamp(52px, 8.2vw, 132px)',
            lineHeight: 0.96,
            letterSpacing: '-0.025em',
            maxWidth: 1280,
            marginBottom: 32,
            fontFamily: 'var(--serif)',
          }}
        >
          <span style={{ display: 'block' }}>We raise your metrics.</span>
          <span style={{ display: 'block' }}>
            <span className="it" style={{ color: 'var(--lime)' }}>You pay us</span> from the upside.
          </span>
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
            marginTop: 12,
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
            marginTop: 40,
          }}
        >
          We embed inside non-tech businesses and deploy proprietary AI agent swarms that grow revenue and cut OPEX. Our fee comes out of the margin we create — not your budget.
        </p>

        {/* CTAs */}
        <div className="reveal d4" style={{ display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap', alignItems: 'center' }}>
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

        {/* Strip */}
        <div
          className="reveal d4"
          style={{
            marginTop: 96,
            paddingTop: 28,
            borderTop: '1px solid rgba(245,237,214,0.18)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: 48,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(245,237,214,0.6)',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--cream)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--lime)', animation: 'pulse 1.8s infinite', display: 'inline-block' }} />
            Taking 3 new engagements · Q3&apos;26
          </div>
          <div>
            <span style={{ color: 'rgba(245,237,214,0.45)', display: 'block', marginBottom: 6 }}>First meaningful result</span>
            <span style={{ color: 'var(--cream)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, letterSpacing: 0, textTransform: 'none' }}>90 days</span>
          </div>
          <div>
            <span style={{ color: 'rgba(245,237,214,0.45)', display: 'block', marginBottom: 6 }}>Avg. engagement</span>
            <span style={{ color: 'var(--cream)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, letterSpacing: 0, textTransform: 'none' }}>18 months</span>
          </div>
        </div>
      </div>
    </section>
  )
}
