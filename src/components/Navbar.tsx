import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '诈骗类型', href: '#fraud-types' },
  { label: '真实案例', href: '#cases' },
  { label: '防骗指南', href: '#guide' },
  { label: '常见问题', href: '#faq' },
  { label: '互动体验', href: '#challenge' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(() =>
    window.location.hash ? window.location.hash : '#home',
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () =>
      setActiveHash(window.location.hash ? window.location.hash : '#home')
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-[0_10px_30px_-16px_rgba(0,0,0,0.55)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
              <Shield className="relative w-5 h-5 text-white" strokeWidth={2.5} />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] tracking-[0.2em] text-slate-400 font-semibold uppercase">
                Macau Student
              </span>
              <span className="text-base md:text-lg font-bold gradient-text">
                Anti-Fraud Hub
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  activeHash === link.href ? 'nav-link-active' : ''
                }`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12 + i * 0.05, duration: 0.5 }}
                aria-current={activeHash === link.href ? 'page' : undefined}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#challenge"
              className="btn-primary !px-6 !py-2.5 text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              开始学习
            </motion.a>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:bg-white/5 active:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/5 glass-strong"
          >
            <div className="container-page py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl transition-colors ${
                    activeHash === link.href
                      ? 'text-white bg-white/[0.06]'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                  aria-current={activeHash === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#challenge"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full mt-3"
              >
                开始学习
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
