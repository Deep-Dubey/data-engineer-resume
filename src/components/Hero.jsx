import { ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const heroCopyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function Hero({ scrollTo }) {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-copy"
        variants={heroCopyVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="eyebrow" variants={heroItemVariants}>DATA ENGINEER</motion.p>
        <motion.h1 variants={heroItemVariants}>Deep Dubey</motion.h1>
        <motion.p className="hero-intro" variants={heroItemVariants}>
          4.4+ years building secure, scalable data pipelines for financial
          services across Azure and Snowflake ecosystems.
        </motion.p>
        <motion.div className="hero-actions" variants={heroItemVariants}>
          <button
            className="button-primary"
            onClick={() => scrollTo('experience')}
          >
            View experience <ArrowUpRight size={17} />
          </button>
          <a
            className="button-secondary"
            href="/Deep_Dubey.pdf"
            download="Deep_Dubey_Resume.pdf"
          >
            Download CV <Download size={15} />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
      >
        <div className="hero-metric">
          <span>EXPERIENCE</span>
          <strong>
            4.4<b>+</b>
          </strong>
          <div className="metric-rule" />
          <small>Azure - Snowflake - DBT - Python</small>
        </div>
      </motion.div>
    </section>
  )
}
