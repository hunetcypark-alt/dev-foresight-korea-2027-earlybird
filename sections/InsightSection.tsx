import React, { useRef, useState } from 'react'

const VIDEOS = [
  { id: 'oUKRWztjfeU', title: "작년 행사 참석자가 전하는 '포사이트 코리아 이런 점이 좋았어요!'" },
  { id: 'FpNbvALZbsY', title: '[월간휴넷 포사이트 코리아 2026 프리뷰] Session 1.' },
  { id: 'Jf-q5UycxZE', title: '[월간휴넷 포사이트 코리아 2026 프리뷰] Session 2.' },
  { id: 'E97ubaSDmJg', title: '피크코리아, 경영을 새로 쓰다' },
  { id: 'UE8wSGiSUY8', title: '한국 기업이 집중해야 되는 경영 전략?' },
  { id: 'w1kdDdMTUPU', title: '대한민국 CEO를 대상으로 한 흥미로운 설문 결과?' },
  { id: '48tjZLQwhO0', title: '경제 성장의 원동력은 이것? 그런데 왜 성장은 멈췄을까' },
  { id: 'djDv8E_2BVk', title: '국내 AI 활용과 해외의 차이점은?' },
  { id: 'Vnzc_SDWKqw', title: '대전환의 분기점: 글로벌 경제 전망 2026' },
  { id: 'yYqh4AVyxao', title: '격변기 사업전략의 새로운 프레임워크' },
  { id: 'Ig4pbjy_83w', title: 'AI에 의한 고객 여정의 마지막 진화, 위임하는 종의 탄생' },
  { id: '4oQNeugn4v8', title: '연공서열 파괴, 원점 사고로 다시 만드는 미래 조직' },
  { id: 'lu2HulShvGQ', title: '테크트렌드 2026: AI 전쟁을 미리보다' },
]

export default function InsightSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [modalId, setModalId] = useState<string | null>(null)

  const SLIDE_W = 260 + 12

  const scroll = (dir: -1 | 1) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * SLIDE_W * 3, behavior: 'smooth' })
  }

  return (
    <section className="s" id="insight" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="eyebrow"><span>Insight Preview</span></div>
        <h2 className="s-h" style={{ textAlign: 'center', padding: 0, fontWeight: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          영상으로 먼저 만나보세요
        </h2>
        <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          포럼의 핵심만 담은 트랙별 하이라이트, 지금 바로 미리보기로 확인하세요.
        </p>

        <div className="iv-wrap">
          <button className="iv-arr iv-arr-prev" aria-label="이전" onClick={() => scroll(-1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="iv-viewport" id="iv-viewport">
            <div className="iv-track" id="iv-track" ref={trackRef} style={{ overflowX: 'auto', display: 'flex', gap: 12, scrollbarWidth: 'none' }}>
              {VIDEOS.map((v) => (
                <div key={v.id} className="iv-slide">
                  <a
                    className="iv-card"
                    href="#"
                    onClick={(e) => { e.preventDefault(); setModalId(v.id) }}
                  >
                    <div className="iv-thumb">
                      <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt="" loading="lazy" />
                      <div className="iv-play">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                    <p className="iv-title">{v.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button className="iv-arr iv-arr-next" aria-label="다음" onClick={() => scroll(1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {modalId && (
          <div className="iv-modal" aria-modal="true" role="dialog" style={{ display: 'flex' }}>
            <div className="iv-modal-bg" onClick={() => setModalId(null)} />
            <div className="iv-modal-box">
              <button className="iv-modal-close" aria-label="닫기" onClick={() => setModalId(null)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="iv-modal-player">
                <iframe
                  src={`https://www.youtube.com/embed/${modalId}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
