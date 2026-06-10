import React from 'react';
import { Speaker } from '../_data/types';

interface Props {
  speaker: Speaker;
  onClick?: (speaker: Speaker) => void;
}

export default function SpeakerCard({ speaker, onClick }: Props) {
  return (
    <article
      className={`sc srise${speaker.isTbd ? ' is-tbd' : ''}`}
      style={{ fontSize: 16 }}
      onClick={() => onClick?.(speaker)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="sc-photo">
        {speaker.photoUrl ? (
          <img
            src={speaker.photoUrl}
            alt={speaker.name ?? ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}assets/img/speakers/man.svg`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center', transform: 'scale(1.2) translateY(25%)', transformOrigin: 'bottom center', opacity: 0.4 }}
          />
        )}
      </div>
      <div className="sc-no">{speaker.id}</div>
      <div className="sc-title">
        {speaker.isVideo && (
          <span className="sc-vid-ic" title="영상 강연">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor"/>
              <path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor"/>
            </svg>
          </span>
        )}
        {speaker.title}
      </div>
      <div className="sc-foot">
        {speaker.organization && <div className="sc-co">{speaker.organization}</div>}
        <div className="sc-name">{speaker.isTbd ? 'TBD' : speaker.name}</div>
      </div>
    </article>
  );
}
