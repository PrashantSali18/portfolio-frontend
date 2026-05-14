import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp, viewport } from '@/utils/motion'
import projects from '@/data/projects'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import Container from '@/components/layout/Container'

const FILTERS = [
  { label: 'All',      value: 'all'      },
  { label: 'Personal', value: 'personal' },
  { label: 'Work',     value: 'work'     },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const displayed = filter === 'all'
    ? projects
    : projects.filter((p) => p.type === filter)

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-cyan/[0.05] blur-[130px] rounded-full pointer-events-none" />

      <Container>
        {/* Title + filter row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionTitle number="04 / Projects" title="What I've" highlight="Built" />

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex items-center gap-2 flex-shrink-0 pb-1"
          >
            {FILTERS.map((f) => (
              <motion.button
                key={f.value}
                variants={fadeUp}
                onClick={() => setFilter(f.value)}
                className={`font-mono text-[11px] px-4 py-1.5 rounded-full border transition-all duration-200 capitalize ${
                  filter === f.value
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-muted hover:border-accent/40 hover:text-text'
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
