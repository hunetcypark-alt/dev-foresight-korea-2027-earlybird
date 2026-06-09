import React from 'react'
import { TRACKS } from '../_data/tracks'
import TrackCard from '../components/TrackCard'

export default function TracksSection() {
  return (
    <section className="s" id="tracks">
      <div className="wrap">
        <div className="eyebrow"><span>PROGRAM TRACKS</span></div>
        <h2 className="s-h">5개 트랙, 30개 세션</h2>
        <p className="s-sub">경영의 모든 영역을 커버하는 전문 트랙</p>
        <div className="tr-grid">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  )
}
