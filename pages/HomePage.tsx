import React from 'react'
import { PageId } from '../_data/types'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ConceptSection from '../sections/ConceptSection'
import StatsSection from '../sections/StatsSection'
import SpeakersSection from '../sections/SpeakersSection'
import RegistrationSection from '../sections/RegistrationSection'
import InsightSection from '../sections/InsightSection'
import ArchiveSection from '../sections/ArchiveSection'

interface Props {
  onNavigate: (page: PageId) => void
}

export default function HomePage({ onNavigate }: Props) {
  return (
    <div id="page-home" className="page active">
      <HeroSection onNavigate={() => onNavigate('register')} />
      <AboutSection />
      <ConceptSection />
      <StatsSection />
      <SpeakersSection
        onProfileClick={() => onNavigate('ceo')}
        onProgramClick={() => onNavigate('program')}
      />
      <div className="reg-archive-wrap">
        <RegistrationSection onRegisterClick={() => onNavigate('register')} />
        <div className="insight-archive-wrap">
          <InsightSection />
          <ArchiveSection />
        </div>
      </div>
    </div>
  )
}
