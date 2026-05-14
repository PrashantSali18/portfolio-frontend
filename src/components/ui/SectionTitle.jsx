import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/utils/motion'

export default function SectionTitle({ number, title, highlight, subtitle }) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mb-14"
    >
      {number && (
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs text-accent tracking-widest uppercase mb-4"
        >
          {number}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display font-bold text-4xl md:text-5xl text-text leading-tight"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="font-body text-muted mt-4 max-w-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
