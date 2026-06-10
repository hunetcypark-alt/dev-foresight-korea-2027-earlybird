import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'
import { FORUM_EVENTS } from '../_data/events'
import EventCard from '../components/EventCard'

export default function EventsPage() {
  return (
    <div id="page-events" className="page active" style={{ background: '#03040a', minHeight: '100vh' }}>
      <SubtopHeader />
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 120 }}>
        <header className="pgsec-head">
          <h2 className="pgsec-title ev-page-title">Events</h2>
        </header>
        <p className="ev-sub">| 행사 당일 현장 이벤트로 ALL PASS 참가자에게 제공됩니다.</p>
        <div className="ev-grid">
          {FORUM_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
