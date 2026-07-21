import React from 'react'

const statusStyle = (kind: 'live' | 'next' | 'planned'): React.CSSProperties => ({
  fontFamily: 'var(--mono)',
  fontSize: 10,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  padding: '4px 10px',
  borderRadius: 999,
  whiteSpace: 'nowrap',
  ...(kind === 'live'
    ? { background: 'var(--lime)', color: 'var(--charcoal)', border: '1px solid var(--lime)' }
    : kind === 'next'
      ? { border: '1px dashed rgba(245,237,214,0.6)', color: 'rgba(245,237,214,0.85)' }
      : { border: '1px solid rgba(245,237,214,0.3)', color: 'rgba(245,237,214,0.55)' }),
})

export default function Proof() {
  return (
    <section className="sect dark" id="cases">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--cream)', borderColor: 'rgba(245,237,214,0.3)' }}>
            <span className="dot" />
            Cases
          </span>
        </div>

        <h2 className="reveal" style={{ marginBottom: 64 }}>
          Built inside a real operator. <span className="it"><span className="underline-accent lime">Running today.</span></span>
        </h2>

        {/* Outpost case */}
        <div className="reveal d1 mob-stack" style={{
          border: '1px solid rgba(245,237,214,0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '44px 40px',
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: 48,
          background: 'rgba(245,237,214,0.04)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lime)' }}>
              Case · Outpost Club · the largest co-living platform in the US
            </span>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 2.8vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Outpost&apos;s sales runs on <span className="it" style={{ color: 'var(--lime)' }}>the AI we built.</span>
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.65, color: 'rgba(245,237,214,0.72)' }}>
              Every inbound inquiry across every building is qualified against live inventory and tenant fit, routed to the right building rep, and followed up 24/7 in under a minute. By agents we built and shipped to production.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(40px, 4vw, 64px)', lineHeight: 1, color: 'var(--lime)' }}>&lt;1 min</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.5, color: 'rgba(245,237,214,0.65)', marginTop: 8 }}>24/7 first response on every inbound inquiry</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(40px, 4vw, 64px)', lineHeight: 1, color: 'var(--salmon)' }}>3,500+</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.5, color: 'rgba(245,237,214,0.65)', marginTop: 8 }}>units running on agents we shipped to production</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 11.5, lineHeight: 1.6, color: 'rgba(245,237,214,0.5)' }}>
              ◆ Conversion and revenue impact are shared under NDA. Ask us on the call.
            </p>
          </div>

          {/* Status board */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, alignSelf: 'center' }}>
            {[
              { fn: 'Sales', status: 'live' as const, label: 'Live', note: 'Inbound qualification, routing, follow-up' },
              { fn: 'CS', status: 'next' as const, label: 'Next', note: 'Tenant lifecycle, renewals, retention' },
              { fn: 'Marketing', status: 'planned' as const, label: 'Planned', note: 'Lead generation and campaign ops' },
              { fn: 'BizOps', status: 'planned' as const, label: 'Planned', note: 'Reporting, billing, internal ops' },
            ].map((row, i) => (
              <div key={row.fn} className="status-row" style={{
                display: 'grid',
                gridTemplateColumns: '90px 90px 1fr',
                gap: 14,
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: i < 3 ? '1px solid rgba(245,237,214,0.15)' : 'none',
                borderTop: i === 0 ? '1px solid rgba(245,237,214,0.15)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{row.fn}</span>
                <span style={statusStyle(row.status)}>{row.status === 'live' ? '● Live' : row.label}</span>
                <span className="status-note" style={{ fontFamily: 'var(--mono)', fontSize: 11.5, lineHeight: 1.5, color: 'rgba(245,237,214,0.6)' }}>{row.note}</span>
              </div>
            ))}
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.6, color: 'rgba(245,237,214,0.6)', marginTop: 20 }}>
              CS, Marketing, and BizOps roll out on the same toolkit. Corporate Brain deployment in progress. Expanded from a pilot to a company-wide engagement.
            </p>
          </div>
        </div>

        {/* Delivered cases */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
          {[
            {
              sector: 'Digital marketing agency',
              body: '1,000+ daily chats. Multi-agent sales chat handling every first-touch conversation.',
              metric: '30%',
              metricNote: 'of chats AI-handled, one month in and still scaling',
            },
            {
              sector: 'FinTech · Supply chain financing',
              body: 'High-volume outbound. Multi-agent sales copilot for lead qualification, routing, and CRM updates.',
              metric: '60%',
              metricNote: 'faster lead processing',
            },
          ].map((c, i) => (
            <div key={c.sector} className={`reveal d${i + 1}`} style={{
              border: '1px solid rgba(245,237,214,0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 28px',
              display: 'flex', flexDirection: 'column', gap: 14,
              background: 'rgba(245,237,214,0.02)',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,214,0.55)' }}>{c.sector}</span>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 12.5, lineHeight: 1.6, color: 'rgba(245,237,214,0.7)' }}>{c.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(245,237,214,0.15)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: 1, color: 'var(--salmon)' }}>{c.metric}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11.5, lineHeight: 1.5, color: 'rgba(245,237,214,0.6)', marginTop: 6 }}>{c.metricNote}</div>
              </div>
            </div>
          ))}
        </div>

        {/* We run on what we sell */}
        <div className="reveal d3" style={{
          border: '1px dashed rgba(245,237,214,0.35)',
          borderRadius: 'var(--radius)',
          padding: '28px 36px',
          marginTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap',
        }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.25 }}>
            <em style={{ fontStyle: 'italic', color: 'var(--lime)' }}>We run on what we sell.</em> +Vibe itself is AI-native: a small senior team on the same agent infrastructure we deploy for clients.
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,237,214,0.55)', whiteSpace: 'nowrap' }}>
            ◆ Profitable from month one
          </div>
        </div>
      </div>
    </section>
  )
}
