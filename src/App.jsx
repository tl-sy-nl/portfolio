import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import AcademicPlatform from './pages/cases/AcademicPlatform'
import ArtsEducation from './pages/cases/ArtsEducation'
import Beyond100 from './pages/cases/Beyond100'
import OutEdge from './pages/cases/OutEdge'
import AirSpaces from './pages/cases/AirSpaces'

export default function App() {
  const location = useLocation()
  const navType = useNavigationType()

  /* Scroll to top on forward navigation; preserve position on back/forward */
  useEffect(() => {
    if (navType !== 'POP') window.scrollTo(0, 0)
  }, [location.pathname, navType])

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cases/academic-platform" element={<AcademicPlatform />} />
          <Route path="/cases/arts-education" element={<ArtsEducation />} />
          <Route path="/cases/beyond-100" element={<Beyond100 />} />
          <Route path="/cases/out-edge" element={<OutEdge />} />
          <Route path="/cases/air-spaces" element={<AirSpaces />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
