import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi'
import { scaleIn, viewport } from '@/utils/motion'
import GlowCard from './GlowCard'

const statusMap = {
  live:        { label: 'Live',        color: 'text-green-400 bg-green-400/10 border-green-400/20' },
  'in-progress':{ label: 'In Progress', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
  private:     { label: 'Private',     color: 'text-muted bg-white/5 border-white/10'              },
}

export default function ProjectCard({ project, index = 0 }) {
  const status = statusMap[project.status] ?? statusMap.private

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay: index * 0.08 }}
      className="h-full"
    >
      <GlowCard className="p-6 flex flex-col gap-4 h-full group">
        {/* ── Top row ── */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <h3 className="font-display font-bold text-text text-lg leading-tight group-hover:gradient-text transition-all duration-300">
                {project.name}
              </h3>
              {/* type badge */}
              {project.type === 'work'
                ? <span className="tag tag-work text-[10px]">Company</span>
                : <span className="tag text-[10px]">Personal</span>
              }
            </div>
            <p className="font-mono text-[11px] text-muted">{project.tagline}</p>
          </div>

          {/* ── Action buttons ── */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
              >
                <FiExternalLink size={13} />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-8 h-8 rounded-lg glass-light border border-white/[0.08] flex items-center justify-center text-muted hover:text-text hover:border-white/20 transition-all duration-200"
              >
                <FiGithub size={13} />
              </a>
            ) : null}
            {!project.liveUrl && !project.githubUrl && (
              <span className="w-8 h-8 rounded-lg glass-light flex items-center justify-center text-muted/50" title="Private">
                <FiLock size={12} />
              </span>
            )}
          </div>
        </div>

        {/* ── Description ── */}
        <p className="font-body text-sm text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* ── Highlights ── */}
        <div className="flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="font-mono text-[10px] px-2 py-0.5 rounded-lg bg-white/[0.03] text-muted/80 border border-white/[0.06]"
            >
              {h}
            </span>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.05]" />

        {/* ── Tech tags + status ── */}
        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="tag text-[10px]">{t}</span>
            ))}
          </div>
          <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border flex-shrink-0 ${status.color}`}>
            {status.label}
          </span>
        </div>
      </GlowCard>
    </motion.div>
  )
}
