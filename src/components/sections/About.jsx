import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewport } from '@/utils/motion'
import { STATS } from '@/utils/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import GlowCard from '@/components/ui/GlowCard'
import Container from '@/components/layout/Container'

const techHighlights = ['React', 'Spring Boot', 'Node.js', 'Java 21', 'MongoDB', 'MySQL']

export default function About() {
  return (
    <section id="about" className="relative">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionTitle
              number="01 / About"
              title="From Blueprints"
              highlight="to Backends"
            />

            <motion.div variants={fadeUp} className="space-y-4 font-body text-muted leading-relaxed mb-8">
              <p>
                I hold a{' '}
                <span className="text-text font-medium">Diploma in Civil Engineering</span> — an
                unusual starting point for a software developer. That foundation in structural
                thinking and precision is exactly how I approach building software.
              </p>
              <p>
                I completed my{' '}
                <span className="text-text font-medium">B.Tech in Information Technology</span>{' '}
                from G.H. Raisoni Institute, Jalgaon (CGPA: 7.67), and have been building
                production-grade full-stack applications professionally and independently ever since.
              </p>
              <p>
                Currently a{' '}
                <span className="text-text font-medium">Frontend Developer at Leapot Technologies, Pune</span>,
                where I ship the company website, build internal products like CapSure, and lead
                delivery for international clients. Outside work, I build DevConnect and
                WorkLog Enterprise to sharpen my full-stack and Java depth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {techHighlights.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats + info cards */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-4"
          >
            {/* Stats grid */}
            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <GlowCard key={s.label} className="p-5">
                  <div className="font-display font-bold text-3xl gradient-text mb-1">{s.value}</div>
                  <div className="font-body text-xs text-muted uppercase tracking-wider">{s.label}</div>
                </GlowCard>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeRight}>
              <GlowCard className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg flex-shrink-0">🎓</div>
                <div>
                  <div className="font-body font-semibold text-text text-sm">B.Tech — Information Technology</div>
                  <div className="font-body text-xs text-muted mt-0.5">G.H. Raisoni Institute, Jalgaon · 7.67 CGPA</div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeRight}>
              <GlowCard className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center text-lg flex-shrink-0">🏛️</div>
                <div>
                  <div className="font-body font-semibold text-text text-sm">Diploma — Civil Engineering</div>
                  <div className="font-body text-xs text-muted mt-0.5">R.C. Patel Polytechnic, Shirpur · 81.47%</div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeRight}>
              <GlowCard className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-lg flex-shrink-0">📍</div>
                <div>
                  <div className="font-body font-semibold text-text text-sm">Pune, Maharashtra, India</div>
                  <div className="font-body text-xs text-muted mt-0.5">Open to remote & relocation opportunities</div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
