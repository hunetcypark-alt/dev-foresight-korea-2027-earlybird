import React from 'react'
import { KEYNOTE_SPEAKER } from '../_data/speakers'

interface Props {
  onProfileClick?: () => void
}

export default function KeynoteSection({ onProfileClick }: Props) {
  const { title, organization, name, role } = KEYNOTE_SPEAKER
  return (
    <div className="spb spb-keynote" id="kn-banner" style={{ '--acc': '#5a8dff' } as React.CSSProperties}>
      <div className="spb-bg" aria-hidden="true" />
      <div className="kn-wave-b" aria-hidden="true" />
      <div className="spb-photo">
        <img src="/assets/img/ceo-photo.png" alt="키노트 연사" />
      </div>
      <div className="spb-inner">
        <div className="eyebrow spb-kn-eyebrow"><span>KEYNOTE</span></div>
        <h3 className="spb-title">
          AX: Transforming into{' '}
          <br className="br-mob" />an<br className="br-pc" /> AI-Native Company
        </h3>
        <div className="spb-meta">
          <div className="spb-company">{organization}</div>
          <div className="spb-kn-name-row">
            <div className="spb-name">{name} <span>{role}</span></div>
            <button className="spb-kn-profile-btn" id="kn-profile-btn" type="button" onClick={onProfileClick}>
              연사 소개
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
