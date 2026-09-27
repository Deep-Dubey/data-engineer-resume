import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const experience = [
  {
    period: 'MAY 2024 — PRESENT',
    company: 'KFIN TECHNOLOGIES LTD',
    role: 'Software Engineer (LAMF)',
    summary: 'Designed and maintained financial data pipelines feeding the LAMF (Loan Against Mutual Fund) lending platform, integrating high-volume transactional data into Snowflake using Azure Data Factory for regulatory and business reporting.',
    points: [
      'Designed and maintained financial data pipelines for the LAMF lending platform, integrating high-volume transactional data into Snowflake using Azure Data Factory for regulatory and business reporting.',
      'Built and optimized DBT/SQL transformation workflows and migrated legacy data extracts to an Azure Data Factory-based ingestion process, improving data processing efficiency by 35% and cutting manual intervention by 30%.',
      'Implemented data validation and monitoring checks on critical lending and transaction pipelines, improving data accuracy and reducing downstream reporting errors by 20% to support audit and compliance needs.',
      'Debugged and resolved production data issues on customer-facing financial platforms, reducing client issue turnaround time by 40%.',
      'Developed compliance and business dashboards using Chart.js and Power BI, translating warehouse data into real-time insights for finance and risk stakeholders within Agile sprints.',
    ],
  },
  {
    period: 'SEP 2022 — DEC 2023',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Developer (Group SIP Platform)',
    summary: 'Built and maintained data pipelines for the Group SIP platform, extracting and transforming investor contribution and transaction data into a central warehouse using SQL and scheduled jobs.',
    points: [
      'Built and maintained data pipelines for the Group SIP platform, extracting and transforming investor contribution and transaction data into a central warehouse using SQL and scheduled jobs.',
      'Designed data models and transformation logic to consolidate SIP contribution, portfolio, and corporate data, improving data processing efficiency by 25% and reducing reporting turnaround by 20%.',
      'Built and optimized scheduled data ingestion pipelines pulling data from backend financial data warehouses for Group SIP reporting, improving data refresh performance by 15%; implemented data validation checks and role-based access control to secure sensitive investor data.',
      'Participated in sprint planning, code reviews, and Agile ceremonies; worked with data and business teams to translate Group SIP reporting requirements into reliable data pipelines and dashboards.',
    ],
  },
  {
    period: 'DEC 2021 — AUG 2022',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Trainee (Group Insurance Policy Management Portal)',
    summary: 'Assisted in building ETL scripts to ingest, clean, and structure policy and claims data from multiple source systems into standardized formats for downstream reporting.',
    points: [
      'Assisted in building ETL scripts to ingest, clean, and structure policy and claims data from multiple source systems into standardized formats for downstream reporting.',
      'Wrote SQL queries to extract, clean, and validate policy issuance and claims data, supporting accurate downstream reporting.',
      'Collaborated with design and data teams to convert business requirements into data-driven reporting layouts, gaining hands-on experience in Agile development and version control with Git.',
      'Supported reporting flows and data transformation tasks while learning production-ready engineering and teamwork practices.',
    ],
  },
]

export function Metrics() {
  return <section className="metrics section-pad"><div className="metric-item"><strong>4<span>+</span></strong><p>YEARS BUILDING<br />DATA SYSTEMS</p></div><div className="metric-item"><strong>35<span>%</span></strong><p>PIPELINE<br />EFFICIENCY GAIN</p></div><div className="metric-item"><strong>40<span>%</span></strong><p>FASTER ISSUE<br />TURNAROUND</p></div><div className="metric-item"><strong>8.27</strong><p>MCA<br />CGPA</p></div></section>
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = experience[activeIndex]

  return (
    <section className="experience section-pad" id="experience">
      <div className="section-heading">
        <div>
          <p className="section-kicker">PROFESSIONAL EXPERIENCE</p>
          <h2>Experience that<br /><em>drives trust.</em></h2>
        </div>
        <p className="section-note">Production-grade pipelines, data quality, and compliance-minded engineering for financial platforms.</p>
      </div>

      <div className="experience-layout">
        <div className="experience-tabs" role="tablist" aria-label="Career experience">
          {experience.map((item, index) => (
            <button
              key={`${item.company}-${item.period}`}
              type="button"
              className={`experience-tab ${index === activeIndex ? 'active' : ''}`}
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.period}</span>
              <strong>{item.company}</strong>
            </button>
          ))}
        </div>

        <div className="experience-panel" role="tabpanel" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <h3>{activeItem.role}</h3>
              <p className="experience-company">{activeItem.company}</p>
              <p className="experience-summary">{activeItem.summary}</p>
              <ul>
                {activeItem.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return <section className="education section-pad"><div><p className="section-kicker">EDUCATION</p><h2>Built on a<br /><em>strong base.</em></h2></div><div className="education-card"><div><span>JUNE 2019 — JULY 2022</span><h3>Master of Computer Applications (MCA)</h3><p>Birla Institute of Technology, Mesra</p></div><strong>8.27 <small>CGPA</small></strong></div></section>
}
