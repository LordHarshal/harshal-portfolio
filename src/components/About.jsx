import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const technologies = [
    'Python', 'JavaScript', 'C/C++',
    'React', 'Node.js', 'TailwindCSS',
    'Kali Linux', 'Wireshark', 'Metasploit',
    'Burp Suite', 'Nmap', 'SQL/NoSQL',
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-light-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            <span className="text-cyan font-mono text-2xl">01. </span>
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate text-lg mb-4">
              Hello! I'm Harshal, a 3rd-year Cyber Security Engineering student at{' '}
              <span className="text-cyan">Shah & Anchor Kutchhi Engineering College (SAKEC)</span>.
              My journey into cybersecurity began with curiosity about how systems work—and 
              more importantly, how they can be protected.
            </p>
            <p className="text-slate text-lg mb-4">
              I specialize in <span className="text-cyan">ethical hacking</span>,
              <span className="text-cyan"> penetration testing</span>, and building
              <span className="text-cyan"> AI-powered security solutions</span>. I've worked 
              on projects ranging from phishing detection systems to secure banking applications.
            </p>
            <p className="text-slate text-lg mb-6">
              Here are some technologies I've been working with:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="text-slate font-mono text-sm flex items-center"
                >
                  <span className="text-cyan mr-2">▹</span> {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Profile Image */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <img 
                  src="/profile.png" 
                  alt="Harshal Sahani"
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist - shows gradient
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                {/* Fallback gradient box if image doesn't load */}
                <div 
                  className="w-full h-96 bg-gradient-to-br from-cyan to-purple rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ display: 'none' }}
                ></div>
              </div>
              
              {/* Cyan overlay on hover */}
              <div className="absolute inset-0 bg-cyan/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
              
              {/* Border frame effect */}
              <div className="absolute inset-0 border-2 border-cyan rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
