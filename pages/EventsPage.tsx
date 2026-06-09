import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'
import { FORUM_EVENTS } from '../_data/events'
import EventCard from '../components/EventCard'

export default function EventsPage() {
  return (
    <div id="page-events" className="page active" style={{ background: '#03040a', minHeight: '100vh' }}>
      <SubtopHeader />
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="eyebrow"><span>EVENTS</span></div>
        <h2 className="s-h">현장 이벤트</h2>
        <p className="s-sub">포럼 현장에서 만나는 특별한 경험</p>
        <div className="ev-grid">
          {FORUM_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
