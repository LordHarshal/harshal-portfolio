import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const roles = ['Cyber Security Student', 'Ethical Hacker', 'AI Enthusiast', 'Security Researcher']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan font-mono text-lg mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4"
          >
            Harshal Harikesh Sahani
          </motion.h1>

          <div className="text-3xl md:text-5xl font-bold gradient-text mb-8 min-h-[80px]">
            {roles[roleIndex]}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate text-lg md:text-xl max-w-2xl mb-8 mx-auto md:mx-0"
          >
            A 3rd-year Cyber Security Engineering student passionate about building 
            resilient systems, ethical hacking, and leveraging AI for threat detection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-cyan text-cyan rounded font-mono hover:bg-cyan/10 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
              href="mailto:harshal.18167@sakec.ac.in"
              className="px-8 py-4 bg-cyan text-navy rounded font-mono hover:bg-cyan/90 transition-all duration-300 font-semibold text-center"
            >
              Email Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="text-cyan">
            <FaChevronDown size={30} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
