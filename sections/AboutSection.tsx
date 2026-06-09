import React from 'react'

export default function AboutSection() {
  const tags = ['거시환경', '경영전략·혁신', 'AX·Tech', '마케팅', '조직인사·리더십']
  return (
    <section className="s s-intro centered" id="about">
      <div className="wrap">
        <div className="eyebrow intro-eyebrow"><span>FORESIGHT KOREA 2027</span></div>
        <h2 className="s-h intro-h">
          CEO가 직접 선택하는<br />최고 수준의 경영 포럼
        </h2>
        <div className="intro-cols">
          <p>급변하는 경영환경 속에서 미래를 내다보는 인사이트, FORESIGHT KOREA 2027이 제공합니다. 국내외 최정상 전문가들이 전하는 경영전략, AI 전환, 글로벌 트렌드를 한자리에서 만나보세요.</p>
        </div>
        <div className="intro-domains">
          {tags.map((tag) => (
            <span key={tag} className="intro-domain-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
