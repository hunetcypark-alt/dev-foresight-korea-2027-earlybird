import React from 'react'

const BASE = import.meta.env.BASE_URL

interface Props {
  onNavigate?: (page: 'register') => void
}

export default function HeroSection({ onNavigate }: Props) {
  return (
    <section id="hero">
      <video id="hero-video" autoPlay muted loop playsInline>
        <source src={`${BASE}assets/hero.mp4`} type="video/mp4" />
      </video>
      <div id="hero-dim" />

      <div id="hb" style={{ height: 800, padding: '100px 60px 0', fontWeight: 800, margin: '6px 0 0' }}>
        <div id="lw">
          <img src={`${BASE}assets/img/fk-symbol.svg`} alt="Foresight Korea" style={{ width: 180 }} />
        </div>

        <p className="kicker" />
        <h1 className="ht1" style={{ fontSize: 60, fontWeight: 700 }}>2027년을 미리본다</h1>
        <h1 className="ht2" style={{ fontSize: 60 }} />
        <p
          className="hsub"
          id="hero-sub"
          style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 24, color: 'rgb(226,238,255)', margin: '0 0 40px', lineHeight: 1, letterSpacing: '0.5px' }}
        >
          <strong>AX</strong>&nbsp;&nbsp;·&nbsp;&nbsp;Transforming into an AI-Native Company
        </p>

        <div className="ctas" style={{ flexDirection: 'column', margin: '40px 0 0' }}>
          <a
            href="#"
            className="cbtn"
            id="hero-cta"
            onClick={(e) => { e.preventDefault(); onNavigate?.('register') }}
            style={{ width: 402, justifyContent: 'center', padding: '16px 24px', height: 'auto', fontSize: 16 }}
          >
            <span>등록하기</span> <span className="arrow">→</span>
          </a>
          <span
            className="chint"
            id="hero-hint"
            style={{ fontFamily: 'Pretendard', fontWeight: 600, fontSize: 16, letterSpacing: 0 }}
          >
            <span className="dim">EARLY BIRD</span>얼리버드 2차 마감 D-79
          </span>
        </div>
      </div>

      <div id="meta" style={{ padding: '36px 60px' }}>
        <div className="mi">
          <span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Date</span>
          <span className="mv" style={{ fontSize: 16 }}>2026.10.01 <span className="sub" style={{ fontSize: 16 }}>(목)</span></span>
        </div>
        <div className="mi">
          <span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Venue</span>
          <span className="mv" style={{ fontSize: 16 }}>그랜드 인터컨티넨탈 서울 파르나스</span>
        </div>
        <div className="mi">
          <span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Theme</span>
          <span className="mv" style={{ fontSize: 16 }}>AX: Transforming into an AI-Native Company</span>
        </div>
        <div className="mi">
          <span className="mk" style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: 12 }}>Host</span>
          <span className="mv" style={{ fontSize: 16 }}>휴넷CEO 포럼</span>
        </div>
      </div>
    </section>
  )
}
