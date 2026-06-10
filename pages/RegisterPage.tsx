import React, { useState } from 'react'
import { PageId } from '../_data/types'

interface Props {
  onNavigate?: (page: PageId) => void
}

export default function RegisterPage({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'register' | 'confirm'>('register')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const BASE = import.meta.env.BASE_URL

  return (
    <div id="page-register" className="page active" style={{ background: '#f7f8fa', minHeight: '100vh' }}>
      <div className="wrap">
        <div className="reg-inner">
          <header className="pgsec-head">
            <h2 className="pgsec-title">Register</h2>
          </header>

          <div className="reg-tab-bar">
            <button
              id="reg-tab-register"
              className={`reg-tab-btn${activeTab === 'register' ? ' reg-tab-active' : ''}`}
              onClick={() => setActiveTab('register')}
            >등록하기</button>
            <button
              id="reg-tab-confirm"
              className={`reg-tab-btn${activeTab === 'confirm' ? ' reg-tab-active' : ''}`}
              onClick={() => setActiveTab('confirm')}
            >등록확인</button>
          </div>

          {activeTab === 'register' && (
            <div id="reg-panel-register">
              <div className="reg-thumb-grid">
                <div className="reg-thumb">
                  <img src={`${BASE}assets/img/reg-allpass.jpg`} alt="" className="reg-thumb-img" />
                  <div className="reg-thumb-grad" />
                  <div className="reg-thumb-badge"><span>ALL</span><span>PASS</span></div>
                  <div className="reg-thumb-foot">
                    <p className="reg-thumb-incl">include</p>
                    <p className="reg-thumb-feats">OFFLINE / LIVE / VOD / 강연자료</p>
                  </div>
                </div>
                <div className="reg-thumb">
                  <img src={`${BASE}assets/img/reg-livepass.jpg`} alt="" className="reg-thumb-img" />
                  <div className="reg-thumb-grad" />
                  <div className="reg-thumb-badge"><span>LIVE</span><span>PASS</span></div>
                  <div className="reg-thumb-foot">
                    <p className="reg-thumb-incl">include</p>
                    <p className="reg-thumb-feats">LIVE / VOD / 강연자료</p>
                  </div>
                </div>
              </div>
              <p className="reg-vod-note">*VOD 학습기간 : 한 달</p>
              <div className="reg-apply-list">
                <a href="#" className="reg-apply-item">
                  <div>
                    <div className="reg-apply-name">개인 신청하기</div>
                    <div className="reg-apply-sub">최대 4인</div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#20222d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#" className="reg-apply-item">
                  <div>
                    <div className="reg-apply-name">단체 신청하기</div>
                    <div className="reg-apply-sub">5인 이상</div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#20222d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'confirm' && (
            <div id="reg-panel-confirm">
              <div className="reg-thumb-grid">
                <div className="reg-thumb">
                  <img src={`${BASE}assets/img/reg-allpass.jpg`} alt="" className="reg-thumb-img" />
                  <div className="reg-thumb-grad" />
                  <div className="reg-thumb-badge"><span>ALL</span><span>PASS</span></div>
                  <div className="reg-thumb-foot">
                    <p className="reg-thumb-incl">include</p>
                    <p className="reg-thumb-feats">OFFLINE / LIVE / VOD / 강연자료</p>
                  </div>
                </div>
                <div className="reg-thumb">
                  <img src={`${BASE}assets/img/reg-livepass.jpg`} alt="" className="reg-thumb-img" />
                  <div className="reg-thumb-grad" />
                  <div className="reg-thumb-badge"><span>LIVE</span><span>PASS</span></div>
                  <div className="reg-thumb-foot">
                    <p className="reg-thumb-incl">include</p>
                    <p className="reg-thumb-feats">LIVE / VOD / 강연자료</p>
                  </div>
                </div>
              </div>
              <p className="reg-vod-note">*VOD 학습기간 : 한 달</p>
              <p className="reg-confirm-desc">등록 시 입력하신 이름과 휴대폰번호 뒷자리를 입력해 주세요.</p>
              <div className="reg-confirm-form">
                <input
                  type="text"
                  placeholder="이름을 입력해 주세요"
                  className="reg-finput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="휴대폰번호 뒷자리 네자리를 입력해 주세요"
                  maxLength={4}
                  className="reg-finput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="reg-btns">
                <button className="reg-btn reg-btn--outline">참석확인증 발급</button>
                <button className="reg-btn reg-btn--dark">등록확인</button>
              </div>
              <div className="reg-btns-mob">
                <button className="reg-btn reg-btn--dark reg-btn--full">확인</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
