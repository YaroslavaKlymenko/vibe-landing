import React from 'react'

export default function WhyDifferent() {
  const diffs: {
    idx: string
    title: React.ReactNode
    body: string
    style: React.CSSProperties
    dark?: boolean
    span: number
  }[] = [
    {
      idx: '01 / PRICING',
      title: <>Priced on <span className="it" style={{ color: 'var(--lime)' }}>outcomes,</span> not hours.</>,
      body: 'You pay against the margin we create. Not against a timesheet, not against a rate card.',
      style: { background: 'var(--charcoal)', color: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      dark: true,
      span: 7,
    },
    {
      idx: '02 / ENGAGEMENT MODEL',
      title: <>We <span className="it" style={{ color: 'var(--lime)' }}>embed and compound.</span> We don&apos;t pilot and exit.</>,
      body: '18-month average engagement. The blueprint gets sharper every quarter — yours, not ours.',
      style: { background: 'var(--charcoal)', color: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      dark: true,
      span: 5,
    },
    {
      idx: '03 / SCOPE',
      title: <>One swarm across the <span className="it" style={{ color: 'var(--salmon)' }}>whole business</span>.</>,
      body: 'Vertical AI software fixes one thing. We move Sales, CS, Marketing, and BizOps on the same rails.',
      style: { background: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      span: 4,
    },
    {
      idx: '04 / OWNERSHIP',
      title: <>Client-owned <span className="it" style={{ color: 'var(--salmon)' }}>infrastructure.</span></>,
      body: "Not third-party SaaS. Survives M&A due diligence — critical if you're preparing to acquire or be acquired.",
      style: { background: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      span: 4,
    },
    {
      idx: '05 / DEPTH',
      title: <>PM depth, not <span className="it" style={{ color: 'var(--salmon)' }}>consulting slides.</span></>,
      body: "We put the business on AI rails. We don't consult on it — and we won't hand you a deck instead of a shipped system.",
      style: { background: 'var(--cream)', border: '1.5px solid var(--charcoal)' },
      span: 4,
    },
  ]

  const delays = ['', 'd1', 'd2', 'd3', 'd4']

  return (
    <section className="sect cream-soft" id="diff">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            How we&apos;re different
          </span>
        </div>

        <div style={{ marginBottom: 88 }}>
          <h2 className="reveal">
            Not another <span className="it"><span className="underline-accent">AI automation agency.</span></span>
          </h2>
          <p className="lead reveal d1">
            Five things that actually matter — the rest of the category does roughly none of them.
          </p>
        </div>

        <div className="mob-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 20,
        }}>
          {diffs.map((d, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]}`}
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
