import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-light-navy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            <span className="text-cyan font-mono text-2xl">05. </span>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto mb-6"></div>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a 
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy border border-lightest-navy rounded text-lightest-slate focus:border-cyan focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy border border-lightest-navy rounded text-lightest-slate focus:border-cyan focus:outline-none transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-navy border border-lightest-navy rounded text-lightest-slate focus:border-cyan focus:outline-none transition-colors resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-cyan text-navy rounded font-mono font-semibold hover:bg-cyan/90 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
