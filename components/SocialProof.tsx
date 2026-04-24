import React from 'react'

export default function SocialProof() {
  return (
    <section className="sect dark" id="proof">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--cream)', borderColor: 'rgba(245,237,214,0.3)' }}>
            <span className="dot" />
            Why we&apos;re the best option
          </span>
          <img src="/assets/logo-full-color.png" className="mini-logo" alt="+Vibe" style={{ filter: 'none', opacity: 0.5, height: 20, width: 'auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'end' }}>
          <div>
            <h2 className="reveal">
              Trusted by operators<br />
              building the <span className="it"><span className="underline-accent lime">next decade</span></span><br />
              of their vertical.
            </h2>
          </div>
          <div>
            <p className="reveal d1" style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              lineHeight: 1.7,
              color: 'rgba(245,237,214,0.65)',
              marginTop: 32,
              maxWidth: 420,
            }}>
              Six months old. Small on purpose. Every engagement is a design partnership — operators who want to write the playbook with us, not buy it off a shelf.
            </p>
          </div>

          {/* Logo row */}
          <div
            className="reveal d2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
              marginTop: 72,
              gridColumn: '1 / -1',
            }}
          >
            <div style={logoTileFilled()}>Outpost Club</div>
            <div style={logoTileEmpty()}>Pilot #2 · Q3&apos;26</div>
            <div style={logoTileEmpty()}>Pilot #3 · Q3&apos;26</div>
            <div style={logoTileEmpty()}>◇ Your logo here</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          marginTop: 80,
          paddingTop: 48,
          borderTop: '1px solid rgba(245,237,214,0.18)',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 24,
        }}>
          {[
            { n: '6', color: 'var(--cream)', label: 'Old. Small on purpose — every engagement is a design partnership.', delay: '' },
            { n: '$100K', color: 'var(--lime)', label: 'Pilot running. Outpost Club — real engagement, not a case study.', delay: 'd1' },
            { n: '2', color: 'var(--cream)', label: 'Additional pilots signed intent. Live in Q3\'26.', delay: 'd2' },
            { n: '5', color: 'var(--salmon)', label: 'Warm leads in the pipeline, all inbound from operators.', delay: 'd3' },
            { n: '0$', color: 'var(--lime)', label: 'Marketing spend. The work recruits the next engagement.', delay: 'd4' },
          ].map((s, i) => (
            <div key={i} className={`reveal ${s.delay}`} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(48px, 5vw, 76px)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: s.color,
              }}>{s.n}</div>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 11.5,
                lineHeight: 1.55,
                letterSpacing: '0.06em',
                color: 'rgba(245,237,214,0.6)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function logoTileEmpty(): React.CSSProperties {
  return {
    border: '1px dashed rgba(245,237,214,0.25)',
    borderRadius: 18,
    padding: '36px 20px',
    minHeight: 130,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--mono)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(245,237,214,0.4)',
    textAlign: 'center',
    background: 'rgba(245,237,214,0.02)',
  }
}

function logoTileFilled(): React.CSSProperties {
  return {
    border: '1px solid rgba(245,237,214,0.3)',
    borderRadius: 18,
    padding: '36px 20px',
    minHeight: 130,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(245,237,214,0.05)',
    color: 'var(--cream)',
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: 26,
    letterSpacing: '-0.01em',
    textAlign: 'center',
  }
}
