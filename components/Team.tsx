/* eslint-disable @next/next/no-img-element */
import React from 'react'

const founders = [
  {
    name: 'Eugene Tymchenko',
    role: 'Founder & CEO · San Francisco',
    photo: '/assets/team-eugene.png',
    bio: (
      <>
        10 years in B2B product: process automation and digital transformation. Built product at <strong>Zakaz.ua</strong> (Europe&apos;s Instacart equivalent, <strong>$60M exit</strong>), scaled <strong>Done Logistics from $10M to $160M</strong>. Recently at <strong>Stockpile</strong> (Sequoia-backed fintech) and <strong>Dnipro Ventures</strong> (SF AI fund).
      </>
    ),
  },
  {
    name: 'Kateryna Ostapchuk',
    role: 'Co-Founder & COO · Spain',
    photo: '/assets/team-kateryna.png',
    bio: (
      <>
        Strategic management and M&amp;A operations. 25 years across five continents: <strong>Cargill, Shell, Pfizer, Goodyear</strong>, where post-acquisition integration was the day job. Two exits. The discipline a roll-up needs after the deal closes.
      </>
    ),
  },
]

export default function Team() {
  return (
    <section className="sect cream" id="team">
      <div className="wrap">
        <div className="section-topbar reveal">
          <span className="pill" style={{ color: 'var(--charcoal)' }}>
            <span className="dot" />
            The team
          </span>
        </div>

        <h2 className="reveal" style={{ marginBottom: 64 }}>
          The leadership <span className="it"><span className="underline-accent">building it.</span></span>
        </h2>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {founders.map((f, i) => (
            <div key={f.name} className={`reveal d${i + 1} team-card`} style={{
              border: '1.5px solid var(--charcoal)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--cream)',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 20,
              overflow: 'hidden',
              minHeight: 340,
            }}>
              <div className="team-text" style={{ padding: '36px 0 36px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(42,39,35,0.55)' }}>{f.role}</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.3vw, 34px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>{f.name}</h3>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 12.5, lineHeight: 1.65, color: 'rgba(42,39,35,0.75)' }}>{f.bio}</p>
              </div>
              <div className="team-photo" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <img src={f.photo} alt={f.name} style={{ width: '100%', maxWidth: 260, height: 'auto', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>

        <p className="reveal d2" style={{
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 2vw, 28px)',
          lineHeight: 1.3,
          maxWidth: 820,
          marginTop: 48,
        }}>
          Business process automation and AI, combined with strategic management and post-acquisition operations: <span style={{ color: 'var(--salmon)' }}>the two muscles an AI roll-up compounds on.</span>
        </p>
      </div>
    </section>
  )
}
