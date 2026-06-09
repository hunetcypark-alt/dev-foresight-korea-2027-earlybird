import React from 'react'
import { FORUM_ARCHIVES } from '../_data/archive'

export default function ArchiveSection() {
  // sort ascending so 2025 is first (left)
  const sorted = [...FORUM_ARCHIVES].sort((a, b) => a.year - b.year)
  return (
    <section className="s" id="archive" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="eyebrow"><span>Forum Archive</span></div>
        <h2 className="s-h" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>지난 포럼 다시보기</h2>
        <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>FORESIGHT KOREA의 누적된 인사이트를 살펴보세요.</p>
        <div className="arc-grid">
          {sorted.map((item) => (
            <a key={item.year} href={item.url} className="arc">
              <div className="arc-yr">{item.year}</div>
              <div className="arc-info">
                <div className="arc-t">{item.title}</div>
                <div className="arc-d" style={{ fontSize: 14 }}>{item.date}</div>
              </div>
              <div className="arc-link">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
