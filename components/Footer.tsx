import BookingButton from './BookingButton'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--charcoal-2)',
      color: 'rgba(245,237,214,0.5)',
      padding: '48px 0 36px',
      borderTop: '1px solid rgba(245,237,214,0.1)',
    }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          © 2026 +Vibe · AI EBITDA Growth Lab
        </div>
        <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <a href="mailto:eugene@aiplusvibe.com">eugene@aiplusvibe.com</a>
          <BookingButton style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,214,0.5)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Book an intro</BookingButton>
        </div>
      </div>
    </footer>
  )
}
