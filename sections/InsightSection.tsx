import React from 'react'
import { INSIGHT_VIDEOS } from '../_data/videos'

export default function InsightSection() {
  return (
    <section className="s" id="insight">
      <div className="wrap">
        <div className="eyebrow"><span>INSIGHT PREVIEW</span></div>
        <h2 className="s-h">미리 만나는 인사이트</h2>
        <p className="s-sub">FORESIGHT KOREA의 깊이 있는 콘텐츠를 미리 경험해보세요</p>
        <div className="iv2-grid">
          {INSIGHT_VIDEOS.map((video) => (
            <div key={video.id} className="iv2">
              <div className="iv2-embed">
                <iframe
                  src={video.embedSrc}
                  title={video.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <p className="iv-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
