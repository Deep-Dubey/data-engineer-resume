import { ArrowUpRight, Download } from 'lucide-react'

export default function Hero({ scrollTo }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">DATA ENGINEER</p>
        <h1>Deep Dubey</h1>
        <p className="hero-intro">
          4.4+ years building secure, scalable data pipelines for financial
          services across Azure and Snowflake ecosystems.
        </p>
        <div className="hero-actions">
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
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-metric">
          <span>EXPERIENCE</span>
          <strong>
            4.4<b>+</b>
          </strong>
          <div className="metric-rule" />
          <small>Azure - Snowflake - DBT - Python</small>
        </div>
      </div>
    </section>
  )
}
