import { ArrowUpRight, BarChart3, ExternalLink, Radio } from 'lucide-react'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

/* ── Tech Stack ── */
export function TechStack() {
  const tools = [
    'Azure', 'Snowflake', 'dbt', 'Python',
    'SQL', 'Kafka', 'Airflow', 'Databricks', 'BigQuery',
  ]

  return (
    <section className="tech-strip section-pad">
      <div className="tech-logos">
        {tools.map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>
    </section>
  )
}

/* ── Projects ── */
export function Work() {
  return (
    <section className="work section-pad" id="work">
      <div className="section-heading">
        <div>
          <h2>Projects</h2>
        </div>
        <p className="section-note">
          Production-style pipelines, validation logic, and analytics-ready
          data products.
        </p>
      </div>

      <div className="project-grid">
        <article className="project">
          <div className="project-top">
            <span>FINANCIAL TRADE PLATFORM</span>
            <span>GCP</span>
          </div>
          <div className="pipeline-art">
            <div className="data-node node-a">GCS</div>
            <div className="data-node node-b">PySpark</div>
            <div className="data-node node-c">BigQuery</div>
            <div className="connector c-one" />
            <div className="connector c-two" />
            <div className="chart-line">
              <i /><i /><i /><i /><i /><i />
            </div>
          </div>
          <ProjectInfo
            title="Financial Trade Platform"
            text="Built a production-style financial trade platform on GCP using PySpark, implementing 10+ business validation rules and automated reject handling with audit reporting."
            tags={['PySpark', 'BigQuery', 'Airflow', 'Terraform']}
            link="https://github.com/Deep-Dubey/financial-trade-platform"
          />
        </article>

        <article className="project project-alt">
          <div className="project-top">
            <span>ENTERPRISE SALES ETL PIPELINE</span>
            <span>GCP</span>
          </div>
          <div className="signal-art">
            <BarChart3 size={30} />
            <div className="bars">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
            <span className="signal-label">ETL</span>
          </div>
          <ProjectInfo
            title="Enterprise Sales ETL"
            text="Built an enterprise-grade sales ETL pipeline orchestrated with Airflow and executed on Dataproc clusters, with event-driven automation using Cloud Functions."
            tags={['PySpark', 'Dataproc', 'Cloud Functions', 'GitHub Actions']}
            link="https://github.com/Deep-Dubey/enterprise-sales-etl"
          />
        </article>

        <article className="project">
          <div className="project-top">
            <span>BANKING REAL-TIME DATA PLATFORM</span>
            <span>KAFKA</span>
          </div>
          <div className="pipeline-art">
            <div className="data-node node-a">Kafka</div>
            <div className="data-node node-b">Schema</div>
            <div className="data-node node-c">GCS</div>
            <div className="connector c-one" />
            <div className="connector c-two" />
            <div className="chart-line">
              <i /><i /><i /><i /><i /><i />
            </div>
          </div>
          <ProjectInfo
            title="Banking Real-Time Platform"
            text="Built a real-time banking data platform using Apache Kafka and Schema Registry to stream simulated transaction events into Google Cloud Storage for downstream processing."
            tags={['Kafka', 'Airflow', 'GCS', 'Streaming']}
            link="https://github.com/Deep-Dubey/banking-realtime-platform/tree/main/banking-realtime-platform"
          />
        </article>
      </div>
    </section>
  )
}

function ProjectInfo({ title, text, tags, link }) {
  return (
    <div className="project-info">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {link ? (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          View project <ArrowUpRight size={14} />
        </a>
      ) : null}
    </div>
  )
}

/* ── About ── */
export function About({ scrollTo }) {
  return (
    <section className="statement section-pad" id="about">
      <h2>About</h2>
      <p className="statement-copy">
        Data Engineer with 4.4+ years of experience designing and operating batch and
        real-time data pipelines on Azure and Snowflake ecosystems. Specialized in financial services and
        fintech, with expertise in high-volume transactional workloads, data
        governance, and SEBI/RBI regulatory reporting within Agile environments.
      </p>
      <div className="soft-skills">
        <p>Strong communicator with stakeholder presentation experience</p>
        <p>Pipeline reviewer and junior engineer mentor</p>
        <p>Focused on performance, cost optimization, and data quality</p>
      </div>
      <button className="text-link" onClick={() => scrollTo('contact')}>
        Get in touch <ArrowUpRight size={16} />
      </button>
    </section>
  )
}

/* ── Skills (Grouped Card Grid) ── */
export function Stack() {
  const categories = [
    { title: 'Cloud Platforms', tools: ['Microsoft Azure', 'Google Cloud Platform'] },
    { title: 'Data Warehousing', tools: ['Snowflake', 'Azure Synapse', 'BigQuery'] },
    { title: 'Big Data & Streaming', tools: ['PySpark', 'Apache Kafka', 'Schema Registry', 'Dataproc'] },
    { title: 'Transformation & Orchestration', tools: ['dbt', 'Azure Data Factory', 'Apache Airflow', 'Cloud Composer'] },
    { title: 'Languages & Modeling', tools: ['SQL', 'Python', 'Data Modeling', 'Data Validation'] },
    { title: 'Infrastructure & Delivery', tools: ['Terraform', 'GitHub Actions', 'Docker', 'Git', 'CI/CD'] },
    { title: 'Governance & Security', tools: ['RBAC', 'Azure Key Vault', 'SEBI/RBI Reporting', 'Data Quality'] },
    { title: 'Visualization & Analytics', tools: ['Power BI', 'Tableau', 'Chart.js'] },
  ]

  return (
    <section className="section-pad" id="stack">
      <div className="section-heading">
        <div>
          <p className="section-kicker">THE TOOLKIT</p>
          <h2>Technical Skills</h2>
        </div>
      </div>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <h3>{cat.title}</h3>
            <div className="skill-pills">
              {cat.tools.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Contact ── */
export function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-inner">
        <Radio size={19} />
        <h2>Get in touch</h2>
        <a
          className="email-link"
          href="mailto:deepdubey1995@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          deepdubey1995@gmail.com <ArrowUpRight size={19} />
        </a>
        <div className="contact-details">
          <a href="https://www.linkedin.com/in/deep-dubey-140650a6/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Deep-Dubey" target="_blank" rel="noreferrer">GitHub</a>
          <a href="tel:+919052057751">+91 90520 57751</a>
          <a href="https://maps.google.com/?q=Hyderabad,India" target="_blank" rel="noreferrer">Hyderabad, India</a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer>
      <span>&copy; {new Date().getFullYear()} DEEP DUBEY</span>
      <span>DATA ENGINEER</span>
      <div className="social-links">
        <a href="mailto:deepdubey1995@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <SiGmail size={17} />
        </a>
        <a href="https://www.linkedin.com/in/deep-dubey-140650a6/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={17} />
        </a>
        <a href="https://github.com/Deep-Dubey" target="_blank" rel="noreferrer" aria-label="GitHub">
          <SiGithub size={17} />
        </a>
        <a href="/Deep_Dubey.pdf" download="Deep_Dubey_Resume.pdf" aria-label="Download resume">
          <ExternalLink size={13} className="footer-external" />
        </a>
      </div>
    </footer>
  )
}
