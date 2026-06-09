import React from 'react'
import SubtopHeader from '../components/layout/SubtopHeader'
import SpeakersSection from '../sections/SpeakersSection'
import ScheduleSection from '../sections/ScheduleSection'

export default function ProgramPage() {
  return (
    <div id="page-program" className="page active">
      <SubtopHeader />
      <SpeakersSection />
      <ScheduleSection />
    </div>
  )
}
