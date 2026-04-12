import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function FadeIn({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView
        ? { opacity: 1, y: 0 }
        : prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({ children, className = '', staggerDelay = 0.08 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInChild({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: prefersReducedMotion
          ? { duration: 0.01 }
          : { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function ClipReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
      animate={inView
        ? prefersReducedMotion ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
        : {}}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PageTransition({ children }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="page-wrapper"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
      transition={prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
