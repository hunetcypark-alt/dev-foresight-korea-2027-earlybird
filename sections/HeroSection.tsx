import React from 'react'

interface Props {
  onNavigate?: (page: 'register') => void
}

export default function HeroSection({ onNavigate }: Props) {
  return (
    <section id="hero">
      <div id="hb">
        {/* Video background */}
        <video id="hero-video" autoPlay muted loop playsInline>
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        {/* FK Symbol logo */}
        <div id="lw" aria-hidden="true">
          <img src="/assets/img/fk-symbol.svg" alt="" className="lw-img" />
        </div>

        {/* Headline */}
        <div id="hb-text">
          <div className="eyebrow hb-eyebrow"><span>THE ULTIMATE CEO FORUM</span></div>
          <h1 className="hb-title">
            {/* PC */}
            <span className="br-pc">FORESIGHT<br />KOREA 2027</span>
            {/* Mobile (same, handled by CSS) */}
            <span className="br-mob">FORESIGHT<br />KOREA<br />2027</span>
          </h1>
          <p className="hb-sub">AX: Transforming into an AI-Native Company</p>
          <div className="hb-cta">
            <button
              className="hb-btn hb-btn--primary"
              onClick={() => onNavigate?.('register')}
            >
              지금 등록하기
            </button>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div id="meta">
        <div className="mi">
          <span className="mk">Date</span>
          <span className="mv">2026.10.01 <span className="sub">(목)</span></span>
        </div>
        <div className="mi">
          <span className="mk">Venue</span>
          <span className="mv">그랜드 인터컨티넨탈 서울 파르나스</span>
        </div>
        <div className="mi">
          <span className="mk">Pass</span>
          <span className="mv">ALL PASS · LIVE PASS</span>
        </div>
        <div className="mi">
          <span className="mk">Theme</span>
          <span className="mv">AX: Transforming into an AI-Native Company</span>
        </div>
      </div>
    </section>
  )
}
