import React from 'react'

export default function HowWeWork() {
  const pillars: {
    idx: string
    title: React.ReactNode
    body: string
    style: React.CSSProperties
    dark?: boolean
    span: number
  }[] = [
    {
      idx: '01 / STRATEGY',
      title: <>Operator-grade <span className="it" style={{ color: 'var(--salmon)' }}>strategy.</span></>,
      body: 'Product leadership that has run transformations from the inside. Decisions sequenced by P&L impact, not by framework.',
      style: { background: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      span: 4,
    },
    {
      idx: '02 / ENGINEERING',
      title: <>Forward-deployed <span className="it" style={{ color: 'var(--lime)' }}>engineering.</span></>,
      body: 'Senior engineers inside your operations, against your real systems and data. We ship into production, not into slideware.',
      style: { background: 'var(--charcoal)', color: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      dark: true,
      span: 4,
    },
    {
      idx: '03 / SYSTEMS',
      title: <>Proprietary <span className="it" style={{ color: 'var(--salmon)' }}>systems.</span></>,
      body: 'We arrive with working tooling: agent infrastructure, the Corporate Brain architecture. Not a blank page billed by the hour.',
      style: { background: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      span: 4,
    },
  ]

  const delays = ['', 'd1', 'd2']

  return (
    <section className="sect sky-bg" id="model">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            The model
          </span>
        </div>

        <div style={{ marginBottom: 88 }}>
          <h2 className="reveal">
            Not advisors. Not an agency. <span className="it"><span className="underline-accent">An embedded operating capability.</span></span>
          </h2>
          <p className="lead reveal d1">
            Three ingredients, one embedded team: inside your companies, on your infrastructure.
          </p>
        </div>

        <div className="mob-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 20,
        }}>
          {pillars.map((d, i) => (
            <div
              key={i}
              className={`reveal diff-card ${delays[i]}`}
              style={{
                ...d.style,
                gridColumn: `span ${d.span}`,
                borderRadius: 'var(--radius-lg)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                minHeight: 260,
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
            >
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.16em',
                color: d.dark ? 'rgba(245,237,214,0.55)' : 'rgba(42,39,35,0.5)',
              }}>{d.idx}</span>
              <h4 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(18px, 1.8vw, 26px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: d.dark ? 'var(--cream)' : 'var(--charcoal)',
              }}>{d.title}</h4>
              <p style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                lineHeight: 1.6,
                color: d.dark ? 'rgba(245,237,214,0.75)' : 'rgba(42,39,35,0.72)',
                marginTop: 'auto',
              }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
