import React, { useState, useEffect } from 'react'
import { PageId } from './_data/types'
import GnbTop from './components/layout/GnbTop'
import GnbNav from './components/layout/GnbNav'
import MobileDrawer from './components/layout/MobileDrawer'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProgramPage from './pages/ProgramPage'
import RegisterPage from './pages/RegisterPage'
import FaqPage from './pages/FaqPage'
import CeoPage from './pages/CeoPage'
import EventsPage from './pages/EventsPage'
import { useInteractions } from './hooks/useInteractions'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Inject the original styles.css
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `${import.meta.env.BASE_URL}assets/styles.css`
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  useInteractions(currentPage)

  const navigate = (page: PageId) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':     return <HomePage onNavigate={navigate} />
      case 'ceo':      return <CeoPage />
      case 'program':  return <ProgramPage />
      case 'register': return <RegisterPage onNavigate={navigate} />
      case 'events':   return <EventsPage />
      case 'faq':      return <FaqPage />
      default:         return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <>
      <GnbTop onMyForumClick={() => navigate('home')} />
      <GnbNav currentPage={currentPage} onNavigate={navigate} onDrawerOpen={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} currentPage={currentPage} onNavigate={navigate} onClose={() => setDrawerOpen(false)} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  )
}
