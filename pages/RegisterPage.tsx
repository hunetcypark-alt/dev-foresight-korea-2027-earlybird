import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'
import { PageId } from '../_data/types'
import RegistrationSection from '../sections/RegistrationSection'

interface Props {
  onNavigate: (page: PageId) => void
}

export default function RegisterPage({ onNavigate }: Props) {
  return (
    <div id="page-register" className="page active" style={{ background: '#f7f8fa', minHeight: '100vh' }}>
      <SubtopHeader />
      <RegistrationSection />
    </div>
  )
}
