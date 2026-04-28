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
        </div>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'end' }}>
          <div>
            <h2 className="reveal">
              Trusted by operators building the <span className="it"><span className="underline-accent lime">next decade</span></span> of their vertical.
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
              Every engagement is a design partnership — operators who want to write the playbook with us, not buy it off a shelf.
            </p>
          </div>
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
