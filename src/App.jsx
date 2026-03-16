import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Home from './pages/Home'
import LuxuryVipApp from './pages/cases/LuxuryVipApp'
import AcademicPlatform from './pages/cases/AcademicPlatform'
import DigitalLearning from './pages/cases/DigitalLearning'
import ArtsEducation from './pages/cases/ArtsEducation'

// Agentation: visual annotation tool for AI-assisted batch editing
// Only active in development (npm run dev). Not included in production build.
let Agentation = null
if (import.meta.env.DEV) {
  try {
    const mod = await import('agentation')
    Agentation = mod.Agentation
  } catch (e) {
    // agentation not installed — run: npm install agentation
  }
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cases/luxury-vip-app" element={<LuxuryVipApp />} />
          <Route path="/cases/academic-platform" element={<AcademicPlatform />} />
          <Route path="/cases/digital-learning" element={<DigitalLearning />} />
          <Route path="/cases/arts-education" element={<ArtsEducation />} />
        </Routes>
      </AnimatePresence>
      {Agentation && <Agentation />}
    </>
  )
}
