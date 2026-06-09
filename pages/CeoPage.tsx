import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'

export default function CeoPage() {
  return (
    <div id="page-ceo" className="page active">
      <SubtopHeader />
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="ceo-layout">
          <aside className="ceo-aside">
            <img src="/assets/img/ceo-photo.png" alt="대표이사" className="ceo-photo-img" />
          </aside>
          <div className="ceo-body">
            <div className="eyebrow"><span>CEO REMARKS</span></div>
            <h2 className="s-h" style={{ textAlign: 'left' }}>AI 대전환의 시대,<br />경영자의 나침반이 되겠습니다</h2>
            <div className="ceo-text">
              <p>2027년, 우리는 AI 전환의 변곡점에 서 있습니다. FORESIGHT KOREA 2027은 이 시대를 이끌어갈 경영자들을 위해 깊이 있는 인사이트를 제공합니다.</p>
            </div>
            <div className="ceo-sig">
              <div className="ceo-sig-name">조영탁</div>
              <div className="ceo-sig-role">(주)휴넷 대표이사</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
