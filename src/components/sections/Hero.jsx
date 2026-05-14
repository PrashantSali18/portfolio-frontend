import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { staggerContainer, fadeUp, viewport } from '@/utils/motion'
import { HERO_ROLES, SITE, LINKS } from '@/utils/constants'
import MagneticButton from '@/components/ui/MagneticButton'
import NoiseBackground from '@/components/effects/NoiseBackground'
import GridOverlay from '@/components/effects/GridOverlay'
import Container from '@/components/layout/Container'

export default function Hero() {
  const roleRef = useRef(null)

  /* Typewriter effect */
  useEffect(() => {
    let i = 0, c = 0, deleting = false, t

    const tick = () => {
      const word = HERO_ROLES[i % HERO_ROLES.length]
      if (!roleRef.current) return
      roleRef.current.textContent = word.slice(0, c + (deleting ? 0 : 1))

      if (!deleting) {
        c++
        if (c === word.length) { deleting = true; t = setTimeout(tick, 1800); return }
      } else {
        c--
        if (c < 0) { c = 0; deleting = false; i++ }
      }
      t = setTimeout(tick, deleting ? 48 : 88)
    }

    t = setTimeout(tick, 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <NoiseBackground />
      <GridOverlay />

      <Container>
        <motion.div
          variants={staggerContainer(0.14, 0.2)}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Available pill */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted/80 tracking-widest uppercase border border-border glass px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold leading-none tracking-tight mb-5"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 8rem)' }}
          >
            <span className="text-text">Prashant </span>
            <span className="gradient-text">Sali</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeUp} className="h-10 flex items-center justify-center mb-6">
            <span className="font-display text-xl md:text-2xl text-muted">
              <span ref={roleRef} className="text-violet" />
              <span className="text-accent animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="font-body text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            Building production-grade web apps end-to-end — responsive React frontends
            to secure Java & Node.js backends. Based in Pune, India.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <MagneticButton href="#projects" variant="primary" size="lg">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline" size="lg">
              Get in Touch
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
            {[
              { icon: FiGithub,   href: LINKS.github,   label: 'GitHub'   },
              { icon: FiLinkedin, href: LINKS.linkedin,  label: 'LinkedIn' },
              { href: `mailto:${SITE.email}`, label: 'Email', text: true  },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.text ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-violet transition-colors duration-200 uppercase tracking-wider"
              >
                {s.icon && <s.icon size={14} />}
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity"
          >
            <a href="#about" aria-label="Scroll to about">
              <FiArrowDown size={18} className="text-muted animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
