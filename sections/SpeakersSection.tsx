import React, { useState } from 'react'
import { SPEAKERS } from '../_data/speakers'
import { TRACKS } from '../_data/tracks'
import SpeakerCard from '../components/SpeakerCard'
import KeynoteSection from './KeynoteSection'
import { Speaker } from '../_data/types'

interface Props {
  onProfileClick?: () => void
  onProgramClick?: () => void
}

const TRACK_NAV = [
  { id: 'sp-trz-a', color: '#3cc6ff', label: 'TRACK A', sub: '거시환경' },
  { id: 'sp-trz-b', color: '#4aa6ff', label: 'TRACK B', sub: '경영전략' },
  { id: 'sp-trz-c', color: '#5a8dff', label: 'TRACK C', sub: 'AX · Tech' },
  { id: 'sp-trz-d', color: '#6f7bf0', label: 'TRACK D', sub: '마케팅' },
  { id: 'sp-trz-e', color: '#8b5cf6', label: 'TRACK E', sub: '조직·리더십' },
]

export default function SpeakersSection({ onProfileClick, onProgramClick }: Props) {
  const [activeNav, setActiveNav] = useState('sp-trz-a')

  const scrollToTrack = (id: string) => {
    setActiveNav(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="s" id="speakers" style={{ padding: '0 0 100px' }}>
      <div className="sp-bg" aria-hidden="true">
        <div className="sp-arcs" />
        <div className="sp-arcs sp-arcs-hi" />
      </div>
      <div className="sp-portal" aria-hidden="true" />

      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="silg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0"   stopColor="#90c0ff" stopOpacity="0.72"/>
            <stop offset="0.5" stopColor="#5a8dff" stopOpacity="0.50"/>
            <stop offset="1"   stopColor="#2a50c8" stopOpacity="0.22"/>
          </linearGradient>
        </defs>
        <symbol id="avatar-sil" viewBox="0 0 454 482">
          <path d="M150.993 36.4C131.715 66.203 133.349 101.351 139.729 134.768C136.83 135.174 134 136.506 132.945 139.475C129.787 148.359 133.662 160.556 136.301 169.329C138.062 175.183 143.629 183.898 148.146 188.047C149.986 189.534 152.497 190.702 154.67 191.711C155.658 194.724 156.121 198.726 156.875 201.921C158.127 207.332 159.524 212.815 161.25 218.085C163.314 224.388 166.686 230.119 169.676 235.818C170.662 237.699 169.409 246.501 169.034 249.016C168.461 252.869 167.541 258.841 165.563 262.294C162.235 267.621 154.877 271.229 149.8 274.746C147.64 276.244 145.577 277.551 143.439 279.151C141.039 280.781 138.325 283.556 135.648 284.616C128.817 287.321 121.894 289.961 115.083 292.719C97.8531 299.534 80.7094 306.564 63.6559 313.809C55.0491 317.466 47.4751 319.659 39.5814 325.396C30.0759 332.321 21.9541 342.181 16.8831 352.819C11.411 364.296 10.541 378.751 9.2487 391.206L5.52023 428.691C4.53428 438.264 3.49277 447.831 2.3958 457.391C1.4404 465.534 0.5812 473.381 0 481.556H453.128L452.128 470.689C450.643 457.456 449.118 444.329 447.901 431.559C446.731 419.101 445.496 406.649 444.198 394.204C442.733 380.821 441.566 365.269 436.163 352.951C431.133 341.479 422.118 331.164 411.706 324.214C403.946 319.034 397.571 317.426 389.338 313.931C376.101 308.194 362.778 302.646 349.381 297.289C342.578 294.524 335.578 291.571 328.776 288.976C320.518 285.829 315.803 284.561 308.833 278.841C303.918 274.924 294.461 270.241 290.061 266.486C285.178 262.319 283.368 242.329 282.906 236.144C284.133 233.588 285.908 231.104 287.203 228.545C291.538 219.992 294.086 210.772 296.238 201.47C296.966 198.336 297.401 194.654 298.471 191.658C300.331 190.506 302.841 189.754 304.743 188.319C306.893 186.698 308.226 184.74 309.768 182.571C315.883 173.98 318.448 164.928 320.096 154.629C320.851 149.905 321.751 141.844 318.691 137.659C317.211 135.635 315.523 135.178 313.221 134.934C318.178 111.812 321.823 71.192 305.951 50.6018C302.413 46.0113 296.046 43.8068 290.323 43.334C294.183 29.7525 288.113 21.003 276.511 13.8318C238.038 -9.94724 176.785 -3.47077 150.993 36.4Z" fill="url(#silg)"/>
        </symbol>
      </svg>

      <KeynoteSection onProfileClick={onProfileClick} />

      <div className="wrap">
        <nav className="sp-track-nav" id="sp-track-nav" aria-label="트랙 바로가기">
          <div className="sp-track-nav-inner">
            {TRACK_NAV.map((t, i) => (
              <button
                key={t.id}
                className={`sp-track-btn${activeNav === t.id ? ' on' : ''}`}
                style={{ '--t-acc': t.color } as React.CSSProperties}
                onClick={() => scrollToTrack(t.id)}
              >
                {t.label}<br />
                <span style={{ fontSize: 10, fontWeight: 500, opacity: 0.65, letterSpacing: '0.02em' }}>{t.sub}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="sp-list">
          {TRACKS.map((track, idx) => {
            const trackSpeakers = SPEAKERS.filter((s) => s.trackId === track.id)
            return (
              <div
                key={track.id}
                className="trz"
                id={`sp-trz-${track.id.toLowerCase()}`}
                style={{ '--acc': track.accentColor, ...(idx === 0 ? { padding: '80px 0 0' } : {}) } as React.CSSProperties}
              >
                <div className="trz-head srise">
                  <div className="trz-eyebrow">
                    <span className="trz-eyebrow-track">TRACK {track.letter}</span>
                    <span className="trz-eyebrow-cat">{track.name}</span>
                  </div>
                </div>
                <div className="trz-row">
                  {trackSpeakers.map((speaker) => (
                    <SpeakerCard key={speaker.id} speaker={speaker} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="sp-more-wrap">
          <a
            href="#"
            className="sp-more-btn"
            onClick={(e) => { e.preventDefault(); onProgramClick?.() }}
          >
            Program &amp; Speakers 전체 보기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
