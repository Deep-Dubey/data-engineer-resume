import { useState } from 'react'

const experience = [
  {
    period: 'MAY 2024 — PRESENT',
    company: 'KFIN TECHNOLOGIES LTD',
    role: 'Software Engineer',
    summary: 'Built and maintained data workflows for the LAMF (Loan Against Mutual Fund) platform to support secure, high-volume financial operations.',
    points: [
      'Designed and optimized ETL/data pipeline workflows to process loan and transaction data with improved reliability and performance.',
      'Built and maintained data integrations across APIs, databases, and internal services for real-time financial reporting.',
      'Improved data quality and observability by monitoring pipeline health, reducing issues, and strengthening validation checks.',
      'Collaborated with product and engineering teams to support analytics dashboards, reporting needs, and operational insights.',
    ],
  },
  {
    period: 'SEP 2022 — DEC 2023',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Developer',
    summary: 'Delivered secure, mobile-first investor and corporate workflows across theme-based dashboards using React, Tailwind CSS, and REST APIs.',
    points: [
      'Built reusable UI components and responsive dashboard interfaces that improved usability across investor and corporate workflows.',
      'Implemented JWT authentication and role-based access control to secure application access for multiple user groups.',
      'Integrated third-party APIs and optimized frontend performance, reducing load time and improving overall responsiveness by 20%.',
      'Collaborated with design and backend teams to refine user experiences and resolve cross-browser issues efficiently.',
    ],
  },
  {
    period: 'DEC 2021 — AUG 2022',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Trainee',
    summary: 'Built a strong foundation in React, REST APIs, responsive UI design, debugging, and Agile delivery for internal product features.',
    points: [
      'Created dynamic frontend components and integrated RESTful APIs to support real-time application functionality.',
      'Resolved cross-browser and UI issues while collaborating closely with design teams on responsive layouts.',
      'Worked in an Agile environment, contributing to sprint delivery and improving code quality through iterative feedback.',
      'Learned and applied modern frontend practices including component state management and debugging workflows.',
    ],
  },
]

export function Metrics() {
  return <section className="metrics section-pad"><div className="metric-item"><strong>4<span>+</span></strong><p>YEARS BUILDING<br />FOR THE WEB</p></div><div className="metric-item"><strong>25<span>%</span></strong><p>FASTER UI<br />RENDERING</p></div><div className="metric-item"><strong>40<span>%</span></strong><p>FASTER ISSUE<br />TURNAROUND</p></div><div className="metric-item"><strong>8.27</strong><p>MCA<br />CGPA</p></div></section>
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = experience[activeIndex]

  return (
    <section className="experience section-pad" id="experience">
      <div className="section-heading">
        <div>
          <p className="section-kicker">CAREER SIGNAL / 2021—PRESENT</p>
          <h2>Experience that<br /><em>ships.</em></h2>
        </div>
        <p className="section-note">Product thinking, production discipline,<br />and a bias toward measurable outcomes.</p>
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
          <h3>{activeItem.role}</h3>
          <p className="experience-company">{activeItem.company}</p>
          <p className="experience-summary">{activeItem.summary}</p>
          <ul>
            {activeItem.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return <section className="education section-pad"><div><p className="section-kicker">EDUCATION</p><h2>Built on a<br /><em>strong base.</em></h2></div><div className="education-card"><div><span>2019 — 2022</span><h3>Master of Computer Applications</h3><p>Birla Institute of Technology, Mesra</p></div><strong>8.27 <small>CGPA</small></strong></div></section>
}
