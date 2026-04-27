import React from 'react'

export default function HowItWorks() {
  return (
    <section className="sect sky-bg" id="what">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            What we do
          </span>
          <img src="/assets/logo-full-black.png" className="mini-logo" alt="+Vibe" style={{ height: 20, width: 'auto' }} />
        </div>

        {/* Head */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: 64,
          alignItems: 'end',
          marginBottom: 80,
        }}>
          <h2 className="reveal">
            Map → Build → Run.<br />
            <span className="it">Three modes.</span>{' '}
            <span className="it"><span className="underline-accent lime">One engagement.</span></span>
          </h2>
          <div
            className="reveal d1"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(42,39,35,0.5)',
            }}
          >
            The engagement
            <em style={{
              display: 'block',
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 24,
              lineHeight: 1.3,
              letterSpacing: 0,
              color: 'var(--charcoal)',
              marginTop: 14,
              textTransform: 'none',
            }}>
              Every agent is client-owned infrastructure. Not a subscription. Not a lock-in.
            </em>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {/* MAP */}
          <div className="mbr-card reveal" style={cardStyle()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={stepStyle()}>01 · Map</span>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: 'var(--salmon)' }}>↘</span>
            </div>
            <h3 style={cardH3Style()}>
              Find the margin.
              <span style={{ display: 'block', fontStyle: 'italic', fontSize: '0.62em', color: 'var(--salmon)', marginTop: 10 }}>before we build.</span>
            </h3>
            <p style={cardPStyle()}>
              Function-by-function roadmap with projected EBITDA impact, costed and sequenced, before a single agent is built. Weeks, not months.
            </p>
            <div style={kpiStyle()}>
              <div><span style={kLabelStyle()}>Timeline</span><span style={kValueStyle()}><strong style={{ color: 'var(--salmon)' }}>Weeks</strong></span></div>
              <div><span style={kLabelStyle()}>Output</span><span style={kValueStyle()}>Costed roadmap</span></div>
            </div>
          </div>

          {/* BUILD */}
          <div className="mbr-card reveal d1" style={cardStyle(true)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ ...stepStyle(), color: 'rgba(245,237,214,0.55)' }}>02 · Build</span>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: 'var(--lime)' }}>⚡</span>
            </div>
            <h3 style={{ ...cardH3Style(), color: 'var(--cream)' }}>
              Ship the agents
              <span style={{ display: 'block', fontStyle: 'italic', fontSize: '0.62em', color: 'var(--lime)', marginTop: 10 }}>that move it.</span>
            </h3>
            <p style={{ ...cardPStyle(), color: 'rgba(245,237,214,0.75)' }}>
              Custom agent swarm into Sales, CS, Marketing, or BizOps. First meaningful result in 90 days. Full function ramp in 180.
            </p>
            <div style={{ ...kpiStyle(), borderTopColor: 'rgba(245,237,214,0.2)' }}>
              <div><span style={{ ...kLabelStyle(), color: 'rgba(245,237,214,0.5)' }}>First result</span><span style={kValueStyle()}><strong style={{ color: 'var(--lime)' }}>90 days</strong></span></div>
              <div><span style={{ ...kLabelStyle(), color: 'rgba(245,237,214,0.5)' }}>Full ramp</span><span style={kValueStyle()}><strong style={{ color: 'var(--lime)' }}>180 days</strong></span></div>
            </div>
          </div>

          {/* RUN */}
          <div className="mbr-card reveal d2" style={cardStyle()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={stepStyle()}>03 · Run</span>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: 'var(--salmon)' }}>∞</span>
            </div>
            <h3 style={cardH3Style()}>
              Compound it
              <span style={{ display: 'block', fontStyle: 'italic', fontSize: '0.62em', color: 'var(--salmon)', marginTop: 10 }}>quarter after quarter.</span>
            </h3>
            <p style={cardPStyle()}>
              Fractional AI team. Maintain, improve, expand into the next function. Full multi-function transformation in 12 months.
            </p>
            <div style={kpiStyle()}>
              <div><span style={kLabelStyle()}>Full transform</span><span style={kValueStyle()}><strong style={{ color: 'var(--salmon)' }}>12 mo</strong></span></div>
              <div><span style={kLabelStyle()}>Avg engagement</span><span style={kValueStyle()}><strong style={{ color: 'var(--salmon)' }}>18 mo</strong></span></div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className="reveal d3"
          style={{
            marginTop: 40,
            padding: '28px 36px',
            border: '1.5px dashed var(--charcoal)',
            borderRadius: 'var(--radius)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.2 }}>
            Every agent is <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>client-owned infrastructure</em>. Not a subscription. Not a lock-in.
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(42,39,35,0.55)', whiteSpace: 'nowrap' }}>
            ◆ Survives M&amp;A due diligence
          </div>
        </div>
      </div>
    </section>
  )
}

function cardStyle(dark = false): React.CSSProperties {
  return {
    background: dark ? 'var(--charcoal)' : 'var(--cream)',
    border: `1.5px solid var(--charcoal)`,
    borderRadius: 'var(--radius-lg)',
    padding: '40px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    minHeight: 520,
    position: 'relative',
    overflow: 'hidden',
    color: dark ? 'var(--cream)' : 'var(--charcoal)',
    transition: 'transform .3s ease, box-shadow .3s ease',
  }
}

function stepStyle(): React.CSSProperties {
  return {
    fontFamily: 'var(--mono)',
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(42,39,35,0.55)',
  }
}

function cardH3Style(): React.CSSProperties {
  return {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(36px, 3.6vw, 56px)',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  }
}

function cardPStyle(): React.CSSProperties {
  return {
    fontFamily: 'var(--mono)',
    fontSize: 13.5,
    lineHeight: 1.65,
    color: 'rgba(42,39,35,0.78)',
  }
}

function kpiStyle(): React.CSSProperties {
  return {
    marginTop: 'auto',
    paddingTop: 24,
    borderTop: '1px solid rgba(42,39,35,0.15)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  }
}

function kLabelStyle(): React.CSSProperties {
  return {
    fontFamily: 'var(--mono)',
    fontSize: 10,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(42,39,35,0.5)',
    display: 'block',
    marginBottom: 6,
  }
}

function kValueStyle(): React.CSSProperties {
  return {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: 22,
    lineHeight: 1.1,
    display: 'block',
  }
}
