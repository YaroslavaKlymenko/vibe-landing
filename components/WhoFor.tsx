export default function WhoFor() {
  return (
    <section className="sect cream" id="who">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            Who this is for
          </span>
          <img src="/assets/logo-full-black.png" className="mini-logo" alt="+Vibe" style={{ height: 20, width: 'auto' }} />
        </div>

        <h2 className="reveal">
          You&apos;re a US mid-market<br />
          <span className="it"><span className="underline-accent">operator.</span></span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
          marginTop: 72,
        }}>
          {/* Qualifiers list */}
          <ul
            className="reveal d1"
            style={{
              display: 'grid',
              gap: 0,
              borderTop: '1.5px solid var(--charcoal)',
            }}
          >
            {[
              { n: '01', text: <span>$50M–$200M <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>revenue</em>, 50+ headcount.</span> },
              { n: '02', text: <span>Non-tech business with <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>high-volume digital operations</em>.</span> },
              { n: '03', text: 'Logistics & supply chain, real estate ops, professional services, or multi-location hospitality.' },
              { n: '04', text: <span>Leading consolidation, preparing to sell, or running a <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>roll-up portfolio</em>.</span> },
            ].map((q) => (
              <li key={q.n} style={{
                display: 'grid',
                gridTemplateColumns: '52px 1fr',
                gap: 24,
                padding: '26px 0',
                borderBottom: '1.5px solid var(--charcoal)',
                alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(42,39,35,0.5)' }}>{q.n}</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.2 }}>{q.text}</span>
              </li>
            ))}
          </ul>

          {/* Fence card */}
          <div
            className="reveal d2"
            style={{
              background: 'var(--charcoal)',
              color: 'var(--cream)',
              borderRadius: 'var(--radius-lg)',
              padding: 44,
              alignSelf: 'end',
              position: 'relative',
            }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 20 }}>
              <span className="pill" style={{ color: 'var(--lime)', borderColor: 'var(--lime)' }}>
                <span className="dot" />
                The test
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.6vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              If that&apos;s you,<br />
              <span className="it" style={{ color: 'var(--lime)' }}>keep reading.</span>
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.65, color: 'rgba(245,237,214,0.7)', marginTop: 28, maxWidth: 420 }}>
              Every sentence below is written for one operator. If you don&apos;t match the profile above, we&apos;re not the fit — and we&apos;ll tell you so on the call.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
