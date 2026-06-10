import React, { useEffect, useRef } from 'react'
import { TICKETS } from '../_data/tickets'
import TicketCard from '../components/TicketCard'

interface Props {
  onRegisterClick?: () => void
}

export default function RegistrationSection({ onRegisterClick }: Props) {
  const countRef = useRef<HTMLDivElement>(null)
  const capRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sellingTicket = TICKETS.find(t => t.status === 'selling')
    if (!sellingTicket?.deadline || !countRef.current) return

    const deadline = new Date(sellingTicket.deadline).getTime()

    const update = () => {
      const now = Date.now()
      const diff = deadline - now
      if (diff <= 0) return

      const days = Math.floor(diff / 86400000)
      const hours = Math.floor((diff % 86400000) / 3600000)
      const mins = Math.floor((diff % 3600000) / 60000)
      const secs = Math.floor((diff % 60000) / 1000)

      const el = countRef.current
      if (!el) return
      const set = (c: string, v: string) => {
        const node = el.querySelector(`[data-c="${c}"]`)
        if (node) node.textContent = v.padStart(2, '0')
      }
      set('days', String(days))
      set('hours', String(hours))
      set('mins', String(mins))
      set('secs', String(secs))

      if (capRef.current) {
        capRef.current.textContent = `${sellingTicket.tier} 마감까지`
      }
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="s" id="purchase">
      <div className="wrap">
        <div className="eyebrow"><span>Registration</span></div>

        <div id="reg-block">
          <h2 className="s-h reg-title">가장 합리적인 금액으로 지금 합류하세요.</h2>

          <div className="reg-count-wrap">
            <div className="reg-count-cap" id="reg-count-cap" ref={capRef} style={{ fontSize: 16, textAlign: 'center' }} />
            <div className="reg-count" id="reg-count" ref={countRef} style={{ gap: 8 }}>
              <div className="rc-unit"><span className="rc-num" data-c="days">--</span><span className="rc-lab">DAYS</span></div>
              <span className="rc-sep">:</span>
              <div className="rc-unit"><span className="rc-num" data-c="hours">--</span><span className="rc-lab">HOURS</span></div>
              <span className="rc-sep">:</span>
              <div className="rc-unit"><span className="rc-num" data-c="mins">--</span><span className="rc-lab">MINUTES</span></div>
              <span className="rc-sep">:</span>
              <div className="rc-unit"><span className="rc-num" data-c="secs">--</span><span className="rc-lab">SECONDS</span></div>
            </div>
          </div>

          <div className="reg-tickets" id="reg-tickets">
            {TICKETS.map((ticket, i) => (
              <TicketCard key={i} ticket={ticket} onRegisterClick={onRegisterClick} />
            ))}
          </div>

          <div className="reg-note" style={{ fontSize: 16 }}>
            * 개인 등록은 최대 4인까지 가능하며, 5인 이상은 단체 등록으로 문의해 주세요.
          </div>
        </div>
      </div>
    </section>
  )
}
