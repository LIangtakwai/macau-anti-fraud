import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import MouseLight from './components/MouseLight'
import ParticleBackground from './components/ParticleBackground'
import FraudTypes from './components/FraudTypes'
import CaseLibrary from './components/CaseLibrary'
import Guide from './components/Guide'
import FAQ from './components/FAQ'
import LearningGame from './components/LearningGame'

export default function App() {
  const pages = useMemo(
    () => [
      { hash: '#home', node: <Hero /> },
      { hash: '#fraud-types', node: <FraudTypes /> },
      { hash: '#cases', node: <CaseLibrary /> },
      { hash: '#guide', node: <Guide /> },
      { hash: '#faq', node: <FAQ /> },
      { hash: '#challenge', node: <LearningGame /> },
    ],
    [],
  )

  const normalizeHash = (h: string) => {
    const found = pages.find((p) => p.hash === h)
    return found ? found.hash : '#home'
  }

  const [route, setRoute] = useState(() => normalizeHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(normalizeHash(window.location.hash))
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [pages])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [route])

  return (
    <div className="relative min-h-screen w-full bg-dark-900 text-white overflow-x-hidden">
      <MouseLight />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-100"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_10%,rgba(139,92,246,0.13),transparent_60%)]" />
        <div className="absolute inset-0 opacity-70">
          <ParticleBackground />
        </div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {pages.find((p) => p.hash === route)?.node}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
