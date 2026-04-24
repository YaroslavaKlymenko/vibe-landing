'use client'
import { useEffect, useState } from 'react'
import BookingButton from './BookingButton'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <nav
      className="nav"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '20px 0',
        transition: 'background .25s ease, backdrop-filter .25s ease, border-color .25s ease',
        borderBottom: '1px solid transparent',
        ...(scrolled ? {
          background: 'rgba(42,39,35,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottomColor: 'rgba(245,237,214,0.1)',
        } : {}),
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" aria-label="+Vibe home">
          <img src="/assets/logo-full-color.png" alt="+Vibe" style={{ height: 28, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: 28 }}>
          <a href="#who" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--cream)', opacity: 0.75 }}>Who it&apos;s for</a>
          <a href="#what" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--cream)', opacity: 0.75 }}>What we do</a>
          <a href="#proof" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--cream)', opacity: 0.75 }}>Proof</a>
          <a href="#diff" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--cream)', opacity: 0.75 }}>Why us</a>
        </div>
        <BookingButton className="btn btn-lime" />
      </div>
    </nav>
  )
}
