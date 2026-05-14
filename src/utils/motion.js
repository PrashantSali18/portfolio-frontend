/**
 * Shared Framer Motion animation variants.
 * Import and use in any component for consistent animations.
 *
 * Usage:
 *   import { fadeUp, staggerContainer } from '@/utils/motion'
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
 *     <motion.h2 variants={fadeUp}>...</motion.h2>
 *   </motion.div>
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/**
 * Wrap a group of children in this to stagger their animations.
 * @param {number} stagger - delay between children (seconds)
 * @param {number} delayChildren - delay before first child
 */
export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const navbarVariants = {
  hidden: { y: -70, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const slideDown = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

/** Standard viewport trigger settings for whileInView */
export const viewport = { once: true, margin: '-80px' }
