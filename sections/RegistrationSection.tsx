import React from 'react'
import { TICKETS } from '../_data/tickets'
import TicketCard from '../components/TicketCard'

interface Props {
  onRegisterClick?: () => void
}

export default function RegistrationSection({ onRegisterClick }: Props) {
  return (
    <section className="s" id="registration">
      <div className="wrap">
        <div className="eyebrow"><span>REGISTRATION</span></div>
        <h2 className="s-h">등록 및 가격</h2>
        <p className="s-sub">얼리버드 혜택을 놓치지 마세요</p>
        <div className="reg-tickets">
          {TICKETS.map((ticket, i) => (
            <TicketCard key={i} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  )
}
