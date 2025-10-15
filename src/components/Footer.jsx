import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-navy border-t border-lightest-navy">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-cyan font-mono text-xl mb-4">Harshal Sahani</h3>
            <p className="text-slate text-sm mb-4">
              Cyber Security Engineering student passionate about ethical hacking, 
              penetration testing, and building AI-powered security solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/LordHarshal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-cyan transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.linkedin.com/in/harshal-sahani-9aa555203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-cyan transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:harshal.18167@sakec.ac.in"
                className="text-slate hover:text-cyan transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-cyan font-mono text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Articles', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate hover:text-cyan transition-colors text-sm"
                  >
                    <span className="text-cyan mr-2">▹</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cyan font-mono text-xl mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-slate text-sm">
              <li>
                <strong className="text-lightest-slate">Email:</strong>
                <br />
                <a href="mailto:harshal.18167@sakec.ac.in" className="hover:text-cyan transition-colors">
                  harshal.18167@sakec.ac.in
                </a>
              </li>
              <li>
                <strong className="text-lightest-slate">Location:</strong>
                <br />
                Mumbai, India
              </li>
              <li>
                <strong className="text-lightest-slate">Education:</strong>
                <br />
                SAKEC - B.Tech Cyber Security
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lightest-navy pt-8 text-center">
          <p className="text-slate text-sm flex items-center justify-center gap-2">
            Designed & Built with 
            <FaHeart className="text-cyan animate-pulse" /> 
            by <span className="text-cyan font-semibold">Harshal Sahani</span>
          </p>
          <p className="text-slate text-xs mt-2">
            © {currentYear} All Rights Reserved | Cyber Security Portfolio
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
