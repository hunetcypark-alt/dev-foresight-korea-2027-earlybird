import React, { useState } from 'react'
import { SPEAKERS } from '../_data/speakers'
import { TRACKS } from '../_data/tracks'
import SpeakerCard from '../components/SpeakerCard'
import SessionModal from '../components/SessionModal'
import { Speaker } from '../_data/types'

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  return (
    <section className="s" id="speakers">
      <div className="wrap">
        <div className="eyebrow"><span>PROGRAM &amp; SPEAKERS</span></div>
        <h2 className="s-h">연사 및 세션</h2>
        <p className="s-sub">각 분야 최고 전문가들이 전하는 깊이 있는 인사이트</p>
      </div>

      {TRACKS.map((track) => {
        const trackSpeakers = SPEAKERS.filter((s) => s.trackId === track.id)
        return (
          <div key={track.id} className="sp-track" id={`sp-trz-${track.id.toLowerCase()}`}>
            <div className="wrap">
              <div className="trz-title" style={{ color: track.accentColor }}>
                Track {track.letter} · {track.name}
              </div>
              <div className="trz-row">
                {trackSpeakers.map((speaker) => (
                  <SpeakerCard
                    key={speaker.id}
                    speaker={speaker}
                    onClick={setSelectedSpeaker}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}

      {selectedSpeaker && (
        <SessionModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </section>
  )
}
