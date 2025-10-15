import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Articles', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-mono"
          >
            <span className="text-cyan">&lt;</span>
            <span className="text-white">HS</span>
            <span className="text-cyan">/&gt;</span>
          </motion.a>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-sm text-slate hover:text-cyan transition-colors"
                >
                  <span className="text-cyan">0{index + 1}.</span> {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/LordHarshal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-cyan transition-colors"
              title="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/harshal-sahani-9aa555203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-cyan transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:harshal.18167@sakec.ac.in"
              className="text-slate hover:text-cyan transition-colors"
              title="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
