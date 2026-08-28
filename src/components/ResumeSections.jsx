const experience = [
  {
    period: 'MAY 2024 — PRESENT',
    company: 'KFIN TECHNOLOGIES LTD',
    role: 'Software Engineer',
    summary: 'Building the LAMF (Loan Against Mutual Fund) platform for secure, high-volume financial workflows.',
    points: [
      'Optimized Redux state management for 25% faster UI rendering and improved responsiveness.',
      'Resolved production issues 40% faster through systematic debugging and observability practices.',
      'Built Chart.js dashboards and analytics components for business insight visualization.',
      'Integrated secure REST APIs, webhook services, and monitoring tools for real-time transaction tracking.',
    ],
  },
  {
    period: 'SEP 2022 — DEC 2023',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Frontend Developer',
    summary: 'Delivered secure, mobile-first investor and corporate workflows across theme-based dashboards.',
    points: [
      'Developed reusable React components and responsive interfaces with Tailwind CSS.',
      'Implemented JWT authentication and role-based access control for secure application access.',
      'Integrated APIs and optimized frontend performance to improve load time and usability.',
    ],
  },
  {
    period: 'DEC 2021 — AUG 2022',
    company: 'EXAVALU SOLUTIONS INDIA PVT LTD',
    role: 'Trainee Developer',
    summary: 'Built a strong foundation in React, APIs, responsive UI, debugging, and Agile delivery.',
    points: [
      'Created dynamic UI components and integrated RESTful APIs.',
      'Resolved cross-browser issues and collaborated with design teams on responsive layouts.',
    ],
  },
]

export function Metrics() {
  return <section className="metrics section-pad"><div className="metric-item"><strong>4<span>+</span></strong><p>YEARS BUILDING<br />FOR THE WEB</p></div><div className="metric-item"><strong>25<span>%</span></strong><p>FASTER UI<br />RENDERING</p></div><div className="metric-item"><strong>40<span>%</span></strong><p>FASTER ISSUE<br />TURNAROUND</p></div><div className="metric-item"><strong>8.27</strong><p>MCA<br />CGPA</p></div></section>
}

export function Experience() {
  return <section className="experience section-pad" id="experience"><div className="section-heading"><div><p className="section-kicker">CAREER SIGNAL / 2021—PRESENT</p><h2>Experience that<br /><em>ships.</em></h2></div><p className="section-note">Product thinking, production discipline,<br />and a bias toward measurable outcomes.</p></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.period}`}><div className="experience-meta"><span>{item.period}</span><strong>{item.company}</strong></div><div className="experience-body"><h3>{item.role}</h3><p className="experience-summary">{item.summary}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
}

export function Education() {
  return <section className="education section-pad"><div><p className="section-kicker">EDUCATION</p><h2>Built on a<br /><em>strong base.</em></h2></div><div className="education-card"><div><span>2019 — 2022</span><h3>Master of Computer Applications</h3><p>Birla Institute of Technology, Mesra</p></div><strong>8.27 <small>CGPA</small></strong></div></section>
}
