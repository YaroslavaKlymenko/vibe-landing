export default function Thesis() {
  return (
    <section className="sect cream" id="thesis">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            Why we exist
          </span>
        </div>

        <h2 className="reveal">
          The AI roll-up playbook works. <span className="it"><span className="underline-accent">It&apos;s just locked in-house.</span></span>
        </h2>

        <div className="mob-stack" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
          marginTop: 72,
        }}>
          {/* Thesis beats */}
          <ul
            className="reveal d1"
            style={{
              display: 'grid',
              gap: 0,
              borderTop: '1.5px solid var(--charcoal)',
            }}
          >
            {[
              { n: '01', text: <span>The most aggressive money already runs it: buy a services business, rework its operations with AI, <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>re-rate the margin</em>, use the cash flow to buy the next one.</span> },
              { n: '02', text: <span>Every proven playbook lives inside a fund that spent years building its own AI operating team. The capability is real, and it <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>isn&apos;t for sale</em>.</span> },
              { n: '03', text: <span>If you own companies and don&apos;t have that team, your hold period won&apos;t wait the two years it takes to build one. <em style={{ fontStyle: 'italic', color: 'var(--salmon)' }}>We embed ours.</em></span> },
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
            className="reveal d2 fence-card"
            style={{
              background: 'var(--charcoal)',
              color: 'var(--cream)',
              borderRadius: 'var(--radius-lg)',
              padding: 44,
              alignSelf: 'center',
              position: 'relative',
            }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 20 }}>
              <span className="pill" style={{ color: 'var(--lime)', borderColor: 'var(--lime)' }}>
                <span className="dot" />
                The question
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.7vw, 42px)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              Not &ldquo;should we use AI.&rdquo;<br />
              <span className="it" style={{ color: 'var(--lime)' }}>&ldquo;Who actually builds it inside our companies?&rdquo;</span>
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.65, color: 'rgba(245,237,214,0.7)', marginTop: 28, maxWidth: 420 }}>
              If you&apos;re a fund partner or a platform operator asking that question, everything below is written for you.
            </p>
          </div>
        </div>

        {/* Market strip */}
        <div className="reveal d3" style={{ marginTop: 96 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.6vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 900 }}>
            <span className="it" style={{ color: 'var(--salmon)' }}>$1B+</span> has flowed into AI roll-up platforms in the last 18 months.
          </div>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginTop: 36 }}>
            {[
              { name: 'Eudia', detail: 'Legal services', capital: '$105M' },
              { name: 'Accrual', detail: 'Accounting & tax', capital: '$75M' },
              { name: 'Crete', detail: 'Accounting & tax', capital: 'OpenAI partnership' },
              { name: 'Dwelly', detail: 'Property mgmt · UK', capital: '£69M' },
              { name: 'Beacon', detail: 'Vertical software AI', capital: '$335M' },
            ].map((p) => (
              <div key={p.name} style={{
                border: '1.5px solid rgba(42,39,35,0.35)',
                borderRadius: 'var(--radius)',
                padding: '20px 18px',
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(42,39,35,0.5)' }}>{p.detail}</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1 }}>{p.name}</span>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--salmon)' }}>{p.capital}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.25, marginTop: 40, maxWidth: 760 }}>
            The thesis is real. <span style={{ color: 'var(--salmon)' }}>The implementation layer</span> is where it gets won or lost.
          </p>
        </div>
      </div>
    </section>
  )
}
