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
        padding: '100px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <RevealInit />

      <div className="wrap" style={{
        paddingTop: 110,
        minHeight: 'calc(100vh - 320px)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* H1 */}
        <div>
          <h1
            className="reveal d1"
            style={{
              fontSize: 'clamp(44px, 6.6vw, 112px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              maxWidth: 1400,
              fontFamily: 'var(--serif)',
            }}
          >
            <span style={{ display: 'block' }}>You own the companies.</span>
            <span style={{ display: 'block' }}>We make them <span className="it" style={{ color: 'var(--lime)' }}>AI-native.</span></span>
          </h1>
        </div>

        {/* Bottom cluster */}
        <div className="mob-stack" style={{
          marginTop: 'auto',
          paddingTop: 40,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}>
          <p
            className="reveal d2 hero-who"
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 2.4vw, 32px)',
              lineHeight: 1.2,
              color: 'rgba(245,237,214,0.85)',
              maxWidth: 560,
            }}
          >
            We are an AI roll-up partner for PE funds and operators.
          </p>

          <div>
            <p
              className="reveal d3 hero-sub"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 560,
                color: 'rgba(245,237,214,0.75)',
              }}
            >
              Strategy, forward-deployed engineering, and proprietary systems, embedded across your portfolio. From pre-acquisition diligence to one Corporate Brain running every company you own.
            </p>
            <div className="reveal d4 hero-ctas" style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap', alignItems: 'center' }}>
              <BookingButton className="btn btn-lime" />
              <a href="#thesis" className="btn btn-ghost" style={{ borderColor: 'rgba(245,237,214,0.4)', color: 'var(--cream)' }}>
                Read the thesis
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
