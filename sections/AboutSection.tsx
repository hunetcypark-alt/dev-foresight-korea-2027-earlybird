import React from 'react'

export default function AboutSection() {
  return (
    <section className="s s-intro" id="intro" style={{ paddingTop: 120 }}>
      <div className="intro-bg" aria-hidden="true" />
      <div className="intro-bottom-dim" aria-hidden="true" />
      <div className="wrap">
        <div className="intro-eyebrow reveal">About · Foresight Korea</div>
        <div className="intro-cols" style={{ textAlign: 'left' }}>
          <h2 className="intro-h reveal" style={{ fontSize: 40 }}>국내외 경영자와 석학이 모이는<br />국내 최고 수준의 비즈니스 포럼</h2>
          <div className="intro-text reveal">
            <p className="lead">FORESIGHT KOREA는 국내외 경영자, 기업 리더, 석학이 한자리에 모여 격변하는 경영 환경에 대응할 전략과 해법을 모색하는 국내 최고 수준의 비즈니스 포럼입니다.</p>
            <p>기업 운영 전반에 걸친 주요 의제를 심도 있게 다루며, 조직 혁신을 촉진하고 경영 역량을 한층 강화할 수 있는 기회를 제공합니다. 조직의 방향성과 경쟁력을 강화할 실질적인 전략 포럼, FORESIGHT KOREA에서 지금 우리 기업에 꼭 필요한 답을 찾아보시기 바랍니다.</p>
            <div className="intro-domains">
              <span>거시환경</span>
              <span>경영전략·혁신</span>
              <span>AX · Tech</span>
              <span>마케팅</span>
              <span>조직인사·리더십</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
