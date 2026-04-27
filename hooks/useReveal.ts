'use client'
import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    const vh = () => window.innerHeight || document.documentElement.clientHeight

    function check() {
      for (let i = reveals.length - 1; i >= 0; i--) {
        const r = reveals[i].getBoundingClientRect()
        if (r.top < vh() * 0.92 && r.bottom > 0) {
          reveals[i].classList.add('in')
          reveals.splice(i, 1)
        }
      }
    }

    // Immediately reveal elements already in viewport
    reveals.slice().forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh() * 0.98) {
        el.style.transition = 'none'
        el.classList.add('in')
        void el.offsetWidth
        requestAnimationFrame(() => { el.style.transition = '' })
        const i = reveals.indexOf(el)
        if (i > -1) reveals.splice(i, 1)
      }
    })

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })
    const t = setInterval(() => { check(); if (!reveals.length) clearInterval(t) }, 300)

    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      clearInterval(t)
    }
  }, [])
}
