import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileSpreadsheet,
  GitBranch,
  Layers,
  Radio,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import {
  SiApacheairflow,
  SiApachekafka,
  SiDatabricks,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGooglebigquery,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSnowflake,
  SiTerraform,
  SiGithub,
  SiGmail,
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const projectGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
}

const projectVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

/* ── Tech Stack ── */
export function TechStack() {
  const tools = [
    { name: 'Azure', icon: Cloud },
    { name: 'Snowflake', icon: SiSnowflake },
    { name: 'dbt', icon: Workflow },
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: Database },
    { name: 'Kafka', icon: SiApachekafka },
    { name: 'Airflow', icon: SiApacheairflow },
    { name: 'Databricks', icon: SiDatabricks },
    { name: 'BigQuery', icon: SiGooglebigquery },
  ]

  return (
    <section className="tech-strip section-pad">
      <div className="tech-logos">
        {tools.map((t) => (
          <span key={t.name} className="tech-pill">
            <t.icon size={14} aria-hidden="true" />
            {t.name}
          </span>
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

      <motion.div
        className="project-grid"
        variants={projectGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.article className="project" variants={projectVariants}>
          <div className="project-top">
            <span>FINANCIAL TRADE PLATFORM</span>
            <span>GCP</span>
          </div>
          <div className="project-visual">
            <img src="/projects/financial_trade_platform.jpg" alt="Financial trade data pipeline project artwork" />
          </div>
          <ProjectInfo
            title="Financial Trade Platform"
            text="Built a production-style financial trade platform on GCP using PySpark, implementing 10+ business validation rules and automated reject handling with audit reporting."
            tags={['PySpark', 'BigQuery', 'Airflow', 'Terraform']}
            link="https://github.com/Deep-Dubey/financial-trade-platform"
          />
        </motion.article>

        <motion.article className="project project-alt" variants={projectVariants}>
          <div className="project-top">
            <span>ENTERPRISE SALES ETL PIPELINE</span>
            <span>GCP</span>
          </div>
          <div className="project-visual">
            <img src="/projects/enterprise_sales_etl.jpg" alt="Enterprise sales ETL project artwork" />
          </div>
          <ProjectInfo
            title="Enterprise Sales ETL"
            text="Built an enterprise-grade sales ETL pipeline orchestrated with Airflow and executed on Dataproc clusters, with event-driven automation using Cloud Functions."
            tags={['PySpark', 'Dataproc', 'Cloud Functions', 'GitHub Actions']}
            link="https://github.com/Deep-Dubey/enterprise-sales-etl"
          />
        </motion.article>

        <motion.article className="project" variants={projectVariants}>
          <div className="project-top">
            <span>BANKING REAL-TIME DATA PLATFORM</span>
            <span>KAFKA</span>
          </div>
          <div className="project-visual">
            <img src="/projects/banking_realtime_platform.jpg" alt="Banking real-time data platform project artwork" />
          </div>
          <ProjectInfo
            title="Banking Real-Time Platform"
            text="Built a real-time banking data platform using Apache Kafka and Schema Registry to stream simulated transaction events into Google Cloud Storage for downstream processing."
            tags={['Kafka', 'Airflow', 'GCS', 'Streaming']}
            link="https://github.com/Deep-Dubey/banking-realtime-platform/tree/main/banking-realtime-platform"
          />
        </motion.article>
      </motion.div>
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
    { title: 'Azure Data Platform', icon: Cloud, tools: ['Azure SQL Database', 'Azure Synapse Analytics (Spark & SQL)', 'Azure Data Factory', 'Azure Databricks', 'ADLS Gen2', 'Blob Storage', 'Azure Functions', 'Azure Key Vault', 'Azure Monitor'] },
    { title: 'Warehousing & Data Layer', icon: Database, tools: ['Snowflake', 'Azure Synapse Analytics / SQL DW', 'BigQuery', 'SQL Server', 'Azure SQL', 'MySQL', 'MongoDB'] },
    { title: 'Big Data & Streaming', icon: Layers, tools: ['PySpark', 'Spark', 'Databricks', 'Apache Kafka (topics, Schema Registry)'] },
    { title: 'Transformation & ETL/ELT', icon: Workflow, tools: ['dbt (Data Build Tool)', 'Azure Data Factory Pipelines', 'Data Modeling', 'Data Cleansing'] },
    { title: 'Orchestration', icon: Workflow, tools: ['Apache Airflow', 'Cloud Composer', 'Scheduled Pipelines'] },
    { title: 'Languages', icon: Code2, tools: ['SQL', 'Python', 'Spark / Python'] },
    { title: 'Governance & Compliance', icon: ShieldCheck, tools: ['Data Quality & Validation', 'Control Monitoring', 'Data Inventory Management', 'Role-Based Access Control', 'Azure Key Vault', 'SEBI/RBI Regulatory & Audit Reporting'] },
    { title: 'Infrastructure & CI/CD', icon: GitBranch, tools: ['Terraform', 'GitHub Actions', 'OIDC Authentication', 'Azure Monitor', 'CI/CD', 'Git', 'Docker'] },
    { title: 'Google Cloud Platform', icon: Cloud, tools: ['GCS', 'BigQuery', 'Dataproc', 'Cloud Composer'] },
    { title: 'Visualization & Productivity', icon: BarChart3, tools: ['Power BI', 'Tableau', 'Chart.js', 'MS Excel', 'MS Word', 'MS PowerPoint'] },
    { title: 'Domain Expertise', icon: Briefcase, tools: ['Financial Services & Fintech', 'Lending & Investment Platforms', 'Transaction Data Processing', 'Data Security & Access Control', 'SEBI/RBI Regulatory & Audit Reporting', 'Compliance Analytics'] },
    { title: 'Ways of Working', icon: FileSpreadsheet, tools: ['Agile/Scrum', 'Performance Optimization'] },
  ]
  const toolIcons = {
    'Apache Airflow': SiApacheairflow,
    'Apache Kafka (topics, Schema Registry)': SiApachekafka,
    'Cloud Composer': SiGooglecloud,
    Docker: SiDocker,
    Git: SiGit,
    'GitHub Actions': SiGithubactions,
    BigQuery: SiGooglecloud,
    GCS: SiGooglecloud,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Python: SiPython,
    Snowflake: SiSnowflake,
    Terraform: SiTerraform,
  }

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
              {cat.tools.map((tool) => {
                const Icon = toolIcons[tool] ?? cat.icon
                return (
                  <span key={tool} className="pill">
                    <Icon size={14} aria-hidden="true" />
                    {tool}
                  </span>
                )
              })}
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
