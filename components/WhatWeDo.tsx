import React from 'react'

const works: {
  idx: string
  title: React.ReactNode
  body: string
  outcome: string
  dark?: boolean
}[] = [
  {
    idx: '01',
    title: <>AI due diligence &amp; <span className="it" style={{ color: 'var(--lime)' }}>data analysis.</span></>,
    body: "We analyze the target the way we'd have to run it: margin map, automation potential, data readiness, before you wire the money.",
    outcome: 'Pre-close clarity + a draft 100-day plan',
    dark: true,
  },
  {
    idx: '02',
    title: <>Transformation <span className="it" style={{ color: 'var(--lime)' }}>strategy.</span></>,
    body: 'A roadmap for the whole platform, sequenced by EBITDA impact, not by what is easy to demo.',
    outcome: 'Costed, sequenced roadmap',
  },
  {
    idx: '03',
    title: <>Department-by-department <span className="it" style={{ color: 'var(--lime)' }}>automation.</span></>,
    body: 'Sales, CS, Finance, Ops: one function at a time, on shared rails. The first department ships while the plan is still warm.',
    outcome: 'Functions live on AI rails',
  },
  {
    idx: '04',
    title: <>Corporate <span className="it" style={{ color: 'var(--lime)' }}>Brain.</span></>,
    body: 'One semantic layer across every company on the platform: shared knowledge, shared context, one memory. Every add-on plugs in.',
    outcome: 'One shared memory across the platform',
    dark: true,
  },
  {
    idx: '05',
    title: <>Fine-tuning under <span className="it" style={{ color: 'var(--lime)' }}>ownership.</span></>,
    body: 'The systems are not a delivery. They are an asset you hold. We keep improving them every quarter of the hold period.',
    outcome: 'Sharper systems every quarter',
  },
  {
    idx: '06',
    title: <>AI-native <span className="it" style={{ color: 'var(--lime)' }}>teams.</span></>,
    body: 'We upskill the people who run the companies until AI is the operating norm: adoption, not shelfware.',
    outcome: 'AI as the operating norm, not a pilot',
  },
]

export default function WhatWeDo() {
  return (
    <section className="sect cream-soft" id="what">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            What we do
          </span>
        </div>

        {/* Head */}
        <h2 className="reveal" style={{ maxWidth: 1280, marginBottom: 80 }}>
          From due diligence <span className="it"><span className="underline-accent lime">to daily operations.</span></span>
        </h2>

        {/* Cards */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {works.map((w, i) => (
            <div
              key={w.idx}
              className={`mbr-card reveal d${i % 3}`}
              style={{
                background: 'var(--charcoal)',
                border: '1.5px solid var(--charcoal)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minHeight: 320,
                color: 'var(--cream)',
                transition: 'transform .3s ease, box-shadow .3s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(245,237,214,0.55)',
                }}>{w.idx}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(22px, 2vw, 30px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}>{w.title}</h3>
              <p style={{
                fontFamily: 'var(--mono)',
                fontSize: 12.5,
                lineHeight: 1.6,
                color: 'rgba(245,237,214,0.72)',
              }}>{w.body}</p>
              <div style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: '1px solid rgba(245,237,214,0.2)',
              }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 6,
                  color: 'rgba(245,237,214,0.5)',
                }}>Outcome</span>
                <span style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.25,
                  color: 'var(--lime)',
                }}>{w.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="reveal d3 how-footnote"
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
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.25 }}>
            Everything we build is <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>client-owned infrastructure</em>.<br />
            It survives M&amp;A due diligence, and the next acquisition inherits it.
          </div>
          <div className="how-footnote-badge" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(42,39,35,0.55)', whiteSpace: 'nowrap' }}>
            ◆ Not a subscription
          </div>
        </div>
      </div>
    </section>
  )
}
