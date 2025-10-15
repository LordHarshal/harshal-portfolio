import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillsData } from '../data/skills'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
            <span className="text-cyan font-mono text-2xl">02. </span>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-light-navy p-6 rounded-lg border border-lightest-navy"
            >
              <h3 className="text-2xl font-bold text-cyan mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-lightest-slate font-medium">{skill.name}</span>
                      <span className="text-cyan font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-navy rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                        className="bg-gradient-to-r from-cyan to-purple h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
