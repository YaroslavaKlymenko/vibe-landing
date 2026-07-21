'use client'

interface BookingButtonProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function BookingButton({ className, style, children }: BookingButtonProps) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-booking-modal'))
  }

  return (
    <button onClick={open} className={className} style={style}>
      {children ?? <>Book a call <span className="btn-arrow">→</span></>}
    </button>
  )
}
