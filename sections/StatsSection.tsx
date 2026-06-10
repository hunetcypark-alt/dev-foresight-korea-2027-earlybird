import React from 'react'

export default function StatsSection() {
  return (
    <section className="s s-stats" id="stats">
      <div className="st-bg" aria-hidden="true">
        <div className="st-bloom" />
      </div>
      <div className="stats-bg-title" aria-hidden="true">FORESIGHT</div>

      <div className="wrap">
        <h2 className="s-h reveal">숫자로 증명하는<br /><em>포럼의 가치</em></h2>

        <ul className="stats-grid">
          <li className="stat-card" style={{ '--acc': '#3cc6ff' } as React.CSSProperties}>
            <div className="stat-inner">
              <div className="stat-deco" aria-hidden="true">
                <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="8" width="40" height="64" rx="20" fill="white"/>
                  <path d="M22 58C22 92 44 110 70 110C96 110 118 92 118 58" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="70" y1="110" x2="70" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="42" y1="130" x2="98" y2="130" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-bot" />
              <span className="stat-edge" />
              <strong className="stat-num">32</strong>
              <em className="stat-label">Speakers</em>
              <p className="stat-desc">업계 및 학계<br />최고 전문가들의<br />현장 인사이트</p>
            </div>
          </li>

          <li className="stat-card" style={{ '--acc': '#4aa6ff' } as React.CSSProperties}>
            <div className="stat-inner">
              <div className="stat-deco" aria-hidden="true">
                <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="16" width="48" height="13" rx="6.5" fill="white"/>
                  <rect x="64" y="16" width="66" height="13" rx="6.5" fill="white"/>
                  <rect x="10" y="37" width="72" height="13" rx="6.5" fill="white"/>
                  <rect x="88" y="37" width="42" height="13" rx="6.5" fill="white"/>
                  <rect x="10" y="58" width="36" height="13" rx="6.5" fill="white"/>
                  <rect x="52" y="58" width="52" height="13" rx="6.5" fill="white"/>
                  <rect x="10" y="79" width="58" height="13" rx="6.5" fill="white"/>
                  <rect x="74" y="79" width="56" height="13" rx="6.5" fill="white"/>
                  <rect x="10" y="100" width="44" height="13" rx="6.5" fill="white"/>
                  <rect x="60" y="100" width="70" height="13" rx="6.5" fill="white"/>
                </svg>
              </div>
              <div className="stat-bot" />
              <span className="stat-edge" />
              <strong className="stat-num">30</strong>
              <em className="stat-label">Sessions</em>
              <p className="stat-desc">기조연설부터<br />트랙 심화까지<br />총 30개 프로그램</p>
            </div>
          </li>

          <li className="stat-card" style={{ '--acc': '#5a8dff' } as React.CSSProperties}>
            <div className="stat-inner">
              <div className="stat-deco" aria-hidden="true">
                <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6"   y="42"  width="20" height="98"  rx="10" fill="white"/>
                  <rect x="32"  y="22"  width="20" height="118" rx="10" fill="white"/>
                  <rect x="60"  y="6"   width="20" height="134" rx="10" fill="white"/>
                  <rect x="88"  y="22"  width="20" height="118" rx="10" fill="white"/>
                  <rect x="114" y="42"  width="20" height="98"  rx="10" fill="white"/>
                </svg>
              </div>
              <div className="stat-bot" />
              <span className="stat-edge" />
              <strong className="stat-num">5</strong>
              <em className="stat-label">Tracks</em>
              <p className="stat-desc">경제·경영전략·AX<br />마케팅·조직 전략<br />5개 전문 트랙</p>
            </div>
          </li>

          <li className="stat-card" style={{ '--acc': '#8b5cf6' } as React.CSSProperties}>
            <div className="stat-inner">
              <div className="stat-deco" aria-hidden="true">
                <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="18" r="5.5" fill="white" fillOpacity=".28"/>
                  <circle cx="56" cy="18" r="5.5" fill="white" fillOpacity=".28"/>
                  <circle cx="84" cy="18" r="5.5" fill="white" fillOpacity=".28"/>
                  <circle cx="112" cy="18" r="5.5" fill="white" fillOpacity=".28"/>
                  <circle cx="21" cy="52" r="7"   fill="white" fillOpacity=".46"/>
                  <circle cx="51" cy="52" r="7"   fill="white" fillOpacity=".46"/>
                  <circle cx="81" cy="52" r="7"   fill="white" fillOpacity=".46"/>
                  <circle cx="111" cy="52" r="7"  fill="white" fillOpacity=".46"/>
                  <circle cx="21" cy="90" r="9"   fill="white" fillOpacity=".68"/>
                  <circle cx="51" cy="90" r="9"   fill="white" fillOpacity=".68"/>
                  <circle cx="81" cy="90" r="9"   fill="white" fillOpacity=".68"/>
                  <circle cx="111" cy="90" r="9"  fill="white" fillOpacity=".68"/>
                  <circle cx="21" cy="124" r="11" fill="white"/>
                  <circle cx="51" cy="124" r="11" fill="white"/>
                  <circle cx="81" cy="124" r="11" fill="white"/>
                  <circle cx="111" cy="124" r="11" fill="white"/>
                </svg>
              </div>
              <div className="stat-bot" />
              <span className="stat-edge" />
              <strong className="stat-num">1,200<span className="stat-plus">+</span></strong>
              <em className="stat-label">Attendees</em>
              <p className="stat-desc">2026년 현장에서<br />함께한 경영자들이<br />선택한 포럼</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
