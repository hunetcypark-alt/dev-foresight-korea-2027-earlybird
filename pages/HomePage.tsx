import React from 'react'
import { PageId } from '../_data/types'
import HeroSection from '../sections/HeroSection'
import KeynoteSection from '../sections/KeynoteSection'
import AboutSection from '../sections/AboutSection'
import TracksSection from '../sections/TracksSection'
import SpeakersSection from '../sections/SpeakersSection'
import ScheduleSection from '../sections/ScheduleSection'
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
      <KeynoteSection />
      <AboutSection />
      <TracksSection />
      <SpeakersSection />
      <ScheduleSection />
      <RegistrationSection onRegisterClick={() => onNavigate('register')} />
      <InsightSection />
      <ArchiveSection />
    </div>
  )
}
