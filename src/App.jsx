import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Home from './pages/Home'
import LuxuryVipApp from './pages/cases/LuxuryVipApp'
import AcademicPlatform from './pages/cases/AcademicPlatform'
import ArtsEducation from './pages/cases/ArtsEducation'
import Beyond100 from './pages/cases/Beyond100'
import OutEdge from './pages/cases/OutEdge'
import AirSpaces from './pages/cases/AirSpaces'

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
          <Route path="/cases/arts-education" element={<ArtsEducation />} />
          <Route path="/cases/beyond-100" element={<Beyond100 />} />
          <Route path="/cases/out-edge" element={<OutEdge />} />
          <Route path="/cases/air-spaces" element={<AirSpaces />} />
        </Routes>
      </AnimatePresence>
      {Agentation && <Agentation />}
    </>
  )
}
