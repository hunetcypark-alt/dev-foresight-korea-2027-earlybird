import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'
import { FAQ_ITEMS } from '../_data/faq'
import FaqItem from '../components/FaqItem'

export default function FaqPage() {
  return (
    <div id="page-faq" className="page active" style={{ background: '#fff', minHeight: '100vh' }}>
      <SubtopHeader />
      <div className="wrap faq-body">
        <div className="faq-sec">
          <h2 className="faq-sec-title">자주 묻는 질문</h2>
          {FAQ_ITEMS.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
