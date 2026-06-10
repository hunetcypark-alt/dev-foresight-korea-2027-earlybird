import React from 'react';
import { Ticket, TicketPass } from '../_data/types';

function PassRow({ pass }: { pass: TicketPass }) {
  const fmt = (n: number) => n.toLocaleString('ko-KR')
  return (
    <div className="tkt-pass">
      <div className="tkt-pass-tag">{pass.label}</div>
      {pass.originalPrice && (
        <div className="tkt-pass-ori">정가 <s>{fmt(pass.originalPrice)}원</s></div>
      )}
      <div className="tkt-pass-now">
        <span className="tkt-price">{fmt(pass.price)}<span className="won">원</span></span>
        {pass.discountRate && (
          <span className="tkt-disc">{Math.round(pass.discountRate * 100)}%할인</span>
        )}
      </div>
    </div>
  )
}

interface Props {
  ticket: Ticket;
  onRegisterClick?: () => void;
}

export default function TicketCard({ ticket, onRegisterClick }: Props) {
  const statusLabel = ticket.status === 'ended' ? '판매종료' : ticket.status === 'selling' ? '판매중' : '판매예정'
  return (
    <div className="tkt" data-status={ticket.status} data-deadline={ticket.deadline}>
      <div className="tkt-stub">
        <div className="tkt-stub-top">
          <span className="tkt-status">{statusLabel}</span>
          <span className="tkt-date">{ticket.dateLabel}</span>
        </div>
        <div className="tkt-tier">{ticket.tier}</div>
      </div>
      <div className="tkt-body">
        {ticket.passes.map((pass) => (
          <PassRow key={pass.type} pass={pass} />
        ))}
      </div>
      {ticket.status === 'selling' ? (
        <a
          className="tkt-cta"
          href="#"
          onClick={(e) => { e.preventDefault(); onRegisterClick?.() }}
        >지금 등록하기 →</a>
      ) : (
        <span className="tkt-cta">{statusLabel}</span>
      )}
    </div>
  )
}
