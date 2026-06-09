import React from 'react'
import { SCHEDULE } from '../_data/schedule'

export default function ScheduleSection() {
  return (
    <section className="s" id="timetable">
      <div className="wrap">
        <div className="eyebrow"><span>TIMETABLE</span></div>
        <h2 className="s-h">2026.10.01 (목) 타임테이블</h2>
        <div className="pgtl-wrap">
          {/* Track header */}
          <div className="pgtl-row pgtl-row--head">
            <div className="pgtl-time" />
            {['A', 'B', 'C', 'D', 'E'].map((letter) => (
              <div key={letter} className="pgtl-track-head">{letter}</div>
            ))}
          </div>

          {SCHEDULE.map((row, idx) => {
            if (row.type === 'keynote' || row.type === 'lunch' || row.type === 'closing') {
              return (
                <div key={idx} className={`pgtl-row pgtl-row--${row.type}`}>
                  <div className="pgtl-time">
                    <span>{row.timeStart}</span>
                    <span>{row.timeEnd}</span>
                  </div>
                  <div className="pgtl-full-label">{row.label}</div>
                </div>
              )
            }
            return (
              <div key={idx} className="pgtl-row pgtl-row--track">
                <div className="pgtl-time">
                  <span>{row.timeStart}</span>
                  <span>{row.timeEnd}</span>
                </div>
                {row.sessions?.map((sess) => (
                  <div
                    key={sess.trackId}
                    className="pgtl-cell"
                    style={{ '--track-color': sess.accentColor } as React.CSSProperties}
                  >
                    <div className="pgtl-cell-title">{sess.title}</div>
                    <div className={`pgtl-cell-speaker${!sess.isConfirmed ? ' tbd' : ''}`}>
                      {sess.speaker}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
