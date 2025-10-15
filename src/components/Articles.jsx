import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { articlesData } from '../data/articles'

const Articles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="articles" ref={ref} className="py-20 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            <span className="text-cyan font-mono text-2xl">04. </span>
            Articles & Writings
          </h2>
          <div className="w-20 h-1 bg-cyan"></div>
          <p className="text-slate mt-4">
            Deep dives into cybersecurity, technology, and personal development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articlesData.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-light-navy p-6 rounded-lg border border-lightest-navy hover:border-cyan transition-all duration-300 card-hover block"
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-cyan text-xs font-mono bg-lightest-navy px-3 py-1 rounded">
                  {article.date}
                </span>
                <span className="text-purple text-xs font-mono bg-lightest-navy px-3 py-1 rounded">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-lightest-slate mb-3 hover:text-cyan transition-colors">
                {article.title}
              </h3>
              <p className="text-slate text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center text-cyan font-mono text-sm hover:underline group">
                Read Full Article
                <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
