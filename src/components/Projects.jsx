import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { projectsData } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-light-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            <span className="text-cyan font-mono text-2xl">03. </span>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-navy rounded-lg border border-lightest-navy hover:border-cyan transition-all duration-300 card-hover overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan text-4xl">📁</div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-cyan transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-lightest-slate mb-2">
                  {project.title}
                </h3>
                <p className="text-slate text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-cyan bg-lightest-navy px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
