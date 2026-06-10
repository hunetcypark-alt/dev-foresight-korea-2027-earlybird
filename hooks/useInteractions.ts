import { useEffect } from 'react'

export function useInteractions(currentPage: string) {
  useEffect(() => {
    // ── Scroll reveal (.reveal → .in) ──────────────────────────────────────
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'))
    reveals.forEach(el => {
      const sibs = Array.from(el.parentElement?.children ?? []).filter(c => c.classList.contains('reveal'))
      const i = sibs.indexOf(el)
      if (i > 0) el.style.animationDelay = Math.min(i, 5) * 0.09 + 's'
    })
    let revRemaining = [...reveals]

    function checkReveals() {
      const vh = window.innerHeight || document.documentElement.clientHeight
      for (let k = revRemaining.length - 1; k >= 0; k--) {
        const el = revRemaining[k]
        if (el.getBoundingClientRect().top < vh * 0.72) {
          el.classList.add('in')
          const delay = el.classList.contains('kcurve') ? 3000 : 1500
          setTimeout(() => el.classList.add('reveal-done'), delay)
          revRemaining.splice(k, 1)
        }
      }
    }

    // ── .srise reveal ──────────────────────────────────────────────────────
    const srises = Array.from(document.querySelectorAll<HTMLElement>('.srise:not(.in)'))
    let sriseRemaining = [...srises]

    function checkSrises() {
      const vh = window.innerHeight || document.documentElement.clientHeight
      for (let k = sriseRemaining.length - 1; k >= 0; k--) {
        const el = sriseRemaining[k]
        if (el.getBoundingClientRect().top < vh * 0.72) {
          el.classList.add('in')
          setTimeout(() => el.classList.add('srise-done'), 1200)
          sriseRemaining.splice(k, 1)
        }
      }
    }

    window.addEventListener('scroll', checkReveals, { passive: true })
    window.addEventListener('resize', checkReveals, { passive: true })
    window.addEventListener('scroll', checkSrises, { passive: true })
    window.addEventListener('resize', checkSrises, { passive: true })

    checkReveals()
    checkSrises()
    setTimeout(() => { checkReveals(); checkSrises() }, 200)
    const revTimer = setInterval(() => { checkReveals(); checkSrises() }, 350)

    // ── Card spotlight: cursor position CSS vars ────────────────────────────
    const CARD_SEL = '.lc,.agenda,.tr,.sp,.pp,.iv-main,.iv-thumb,.arc'
    function onPointerMove(e: PointerEvent) {
      const card = (e.target as HTMLElement).closest(CARD_SEL) as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
    }
    document.addEventListener('pointermove', onPointerMove as EventListener, { passive: true })

    // ── Stats card deal-in + float ──────────────────────────────────────────
    const statsGrid = document.querySelector<HTMLElement>('.stats-grid')
    let statsObserver: IntersectionObserver | null = null
    if (statsGrid) {
      const cards = Array.from(statsGrid.querySelectorAll<HTMLElement>('.stat-card'))
      const spreads = [
        'translateX(-300px) translateY(80px) rotateZ(-16deg) scale(0.82)',
        'translateX(-110px) translateY(36px) rotateZ(-7deg)  scale(0.92)',
        'translateX( 110px) translateY(36px) rotateZ( 7deg)  scale(0.92)',
        'translateX( 300px) translateY(80px) rotateZ( 16deg) scale(0.82)',
      ]
      cards.forEach((card, i) => {
        card.style.transition = 'none'
        card.style.transform  = spreads[i] ?? ''
        card.style.opacity    = '0'
      })
      let statsTriggered = false
      statsObserver = new IntersectionObserver((entries) => {
        if (statsTriggered || !entries[0].isIntersecting) return
        statsTriggered = true
        statsObserver?.disconnect()
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.transition = 'transform 0.92s cubic-bezier(0.22,1,0.36,1),opacity 0.65s ease'
            card.style.transform  = 'none'
            card.style.opacity    = '1'
            setTimeout(() => {
              card.style.transition = ''
              card.style.transform  = ''
              card.style.opacity    = ''
              card.classList.add('is-floating')
            }, 960)
          }, i * 85)
        })
      }, { threshold: 0.28 })
      statsObserver.observe(statsGrid)
    }

    // ── Keynote photo parallax ──────────────────────────────────────────────
    const MX = 22, MY = 14
    const spbCleanups: Array<() => void> = []
    document.querySelectorAll<HTMLElement>('.spb').forEach(spb => {
      const photo = spb.querySelector<HTMLElement>('.spb-photo')
      if (!photo) return
      let tx = 0, ty = 0, cx = 0, cy = 0
      let raf: number | null = null
      function tick() {
        cx += (tx - cx) * 0.08
        cy += (ty - cy) * 0.08
        photo!.style.transform = `translate3d(${cx.toFixed(2)}px,${cy.toFixed(2)}px,0)`
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(tick)
        else raf = null
      }
      function kick() { if (raf == null) raf = requestAnimationFrame(tick) }
      function onMove(e: PointerEvent) {
        const r = spb.getBoundingClientRect()
        tx = ((e.clientX - r.left) / r.width  - 0.5) * MX * -2
        ty = ((e.clientY - r.top)  / r.height - 0.5) * MY * -2
        kick()
      }
      function onLeave() { tx = 0; ty = 0; kick() }
      spb.addEventListener('pointermove', onMove as EventListener, { passive: true })
      spb.addEventListener('pointerleave', onLeave, { passive: true })
      spbCleanups.push(() => {
        spb.removeEventListener('pointermove', onMove as EventListener)
        spb.removeEventListener('pointerleave', onLeave)
        if (raf) cancelAnimationFrame(raf)
      })
    })

    // ── Track accordion auto-cycle ──────────────────────────────────────────
    const trGrid = document.querySelector<HTMLElement>('#tracks .tr-grid')
    let trTimer: ReturnType<typeof setInterval> | null = null
    if (trGrid) {
      const trCards = Array.from(trGrid.querySelectorAll<HTMLElement>('.tr'))
      let current = 0
      let paused = false

      function openTr(idx: number) {
        current = idx
        trCards.forEach((c, i) => c.classList.toggle('is-open', i === idx))
      }
      function nextTr() { openTr((current + 1) % trCards.length) }

      if (window.innerWidth >= 1024) {
        openTr(0)
        trTimer = setInterval(() => { if (!paused) nextTr() }, 7000)
      }
      trCards.forEach((card, idx) => {
        card.addEventListener('mouseenter', () => {
          if (window.innerWidth < 1024) return
          paused = true
          openTr(idx)
        })
      })
      trGrid.addEventListener('mouseleave', () => { paused = false })
    }

    // ── Cursor ambient ──────────────────────────────────────────────────────
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let ambientRaf: number | null = null
    const ambientEl = document.getElementById('cursor-ambient')
    if (!prefersReducedMotion && ambientEl) {
      const el = ambientEl
      let tx = 0, ty = 0, cx = 0, cy = 0
      const heroEl = document.getElementById('hero')
      function inHero(clientY: number) {
        if (!heroEl) return false
        const r = heroEl.getBoundingClientRect()
        return clientY >= r.top && clientY <= r.bottom
      }
      function ambientTick() {
        cx += (tx - cx) * 0.07
        cy += (ty - cy) * 0.07
        el.style.transform = `translate(${cx.toFixed(1)}px,${cy.toFixed(1)}px)`
        if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) ambientRaf = requestAnimationFrame(ambientTick)
        else ambientRaf = null
      }
      function ambientKick() { if (!ambientRaf) ambientRaf = requestAnimationFrame(ambientTick) }
      function onMouseMove(e: MouseEvent) {
        tx = e.clientX; ty = e.clientY
        const isHome = currentPage === 'home'
        el.classList.toggle('active', isHome && !inHero(e.clientY))
        ambientKick()
      }
      document.addEventListener('mousemove', onMouseMove, { passive: true })
      spbCleanups.push(() => {
        document.removeEventListener('mousemove', onMouseMove)
        if (ambientRaf) cancelAnimationFrame(ambientRaf)
      })
    }

    return () => {
      window.removeEventListener('scroll', checkReveals)
      window.removeEventListener('resize', checkReveals)
      window.removeEventListener('scroll', checkSrises)
      window.removeEventListener('resize', checkSrises)
      clearInterval(revTimer)
      document.removeEventListener('pointermove', onPointerMove as EventListener)
      statsObserver?.disconnect()
      spbCleanups.forEach(fn => fn())
      if (trTimer) clearInterval(trTimer)
    }
  }, [currentPage])
}
