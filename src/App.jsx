import './App.css'

const metrics = [
  { value: '30-day', label: 'audit and action plan' },
  { value: '1 view', label: 'of pipeline health' },
  { value: 'Weekly', label: 'KPI visibility for leaders' },
]

const services = [
  {
    title: 'RevOps Audit',
    description:
      'Identify the leaks in your funnel, process, and CRM before they slow growth further.',
    points: ['Lifecycle stage cleanup', 'Lead routing review', 'Forecast and reporting gaps'],
  },
  {
    title: 'Systems & Automation',
    description:
      'Tighten the handoff between marketing, sales, and customer success with practical automation.',
    points: ['HubSpot optimization', 'SLA workflows', 'Dashboards that teams actually use'],
  },
  {
    title: 'Fractional RevOps Leadership',
    description:
      'Get strategic RevOps support without hiring a full-time operator too early.',
    points: ['Leadership cadence', 'Quarterly planning', 'Cross-functional enablement'],
  },
]

const process = [
  {
    title: 'Diagnose',
    text: 'Review your funnel, CRM setup, reporting, and handoffs to pinpoint where revenue is getting stuck.',
  },
  {
    title: 'Implement',
    text: 'Prioritize the highest-impact fixes and build clean automations, definitions, and dashboards.',
  },
  {
    title: 'Enable',
    text: 'Train the team, document the process, and leave you with a system that is easy to maintain.',
  },
]

const outcomes = [
  'Cleaner CRM data and lifecycle stages',
  'Faster lead response and fewer dropped handoffs',
  'Forecast reviews grounded in reliable numbers',
  'A GTM system that scales with your next growth stage',
]

function App() {
  return (
    <div className="page" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          <span>RevOps</span> Growth Studio
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#results">Outcomes</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="btn btn-small btn-primary"
          href="mailto:hello@yourrevops.co?subject=RevOps%20Strategy%20Call"
        >
          Book a call
        </a>
      </header>

      <main>
        <section className="section hero">
          <div className="hero-copy">
            <p className="eyebrow">RevOps consulting for growing B2B teams</p>
            <h1>Turn messy pipeline operations into predictable revenue.</h1>
            <p className="lead">
              Fix the systems behind missed follow-ups, unreliable forecasts, and CRM chaos.
              Position your RevOps service with a clear offer, strong messaging, and a direct
              conversion path.
            </p>

            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="mailto:hello@yourrevops.co?subject=I%20need%20RevOps%20help"
              >
                Start a conversation
              </a>
              <a className="btn btn-secondary" href="#services">
                Explore services
              </a>
            </div>

            <div className="stat-row">
              {metrics.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <span className="panel-badge">Signature Offer</span>
            <h2>90-day RevOps sprint</h2>
            <p>
              A focused engagement to clean up your revenue engine and help leadership trust the
              numbers again.
            </p>

            <ul className="check-list">
              <li>CRM and lifecycle stage redesign</li>
              <li>Lead routing, ownership, and SLA improvements</li>
              <li>Executive dashboards and forecast hygiene</li>
              <li>Playbooks for sales, marketing, and CS handoffs</li>
            </ul>

            <div className="stack-tags" aria-label="Common RevOps tools">
              <span>HubSpot</span>
              <span>Salesforce</span>
              <span>Zapier</span>
              <span>Looker Studio</span>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="RevOps focus areas">
          <div className="proof-pill">Lead routing</div>
          <div className="proof-pill">Forecasting</div>
          <div className="proof-pill">CRM hygiene</div>
          <div className="proof-pill">GTM handoffs</div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>
              <h2>How your offer shows up on the site</h2>
            </div>
            <p>
              This page positions your work around clarity, operational rigor, and measurable
              revenue improvement instead of vague consulting language.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt-section" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Process</p>
              <h2>A consulting flow that feels practical and credible</h2>
            </div>
            <p>
              Buyers want to know what working with you actually looks like. This section keeps it
              simple and concrete.
            </p>
          </div>

          <div className="timeline">
            {process.map((step, index) => (
              <article className="timeline-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="results">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Outcomes</p>
              <h2>What clients should expect after engagement</h2>
            </div>
            <p>
              Keep the promise focused on operational clarity, team alignment, and confidence in
              the numbers.
            </p>
          </div>

          <div className="results-grid">
            <article className="result-card result-card-large">
              <h3>Common pain points you can solve</h3>
              <ul className="result-list">
                {outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>

            <article className="result-card accent-card">
              <p className="eyebrow">Ideal clients</p>
              <h3>Seed to Series B teams</h3>
              <p>
                Best for B2B companies with traction, a growing GTM team, and systems starting to
                break under complexity.
              </p>
              <a className="text-link" href="#contact">
                Add your booking link →
              </a>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-banner">
            <div>
              <p className="eyebrow">Ready to launch?</p>
              <h2>Your React site is ready for Vercel.</h2>
              <p>
                Update the email address and CTA links with your real contact details, then connect
                the repo to Vercel for a quick static deployment.
              </p>
            </div>

            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href="mailto:hello@yourrevops.co?subject=Let%27s%20talk%20RevOps"
              >
                Email your leads
              </a>
              <a
                className="btn btn-secondary"
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
              >
                Deploy on Vercel
              </a>
              <span className="note">Tip: replace `hello@yourrevops.co` with your real inbox.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        Built with React + Vite for a fast, Vercel-ready consulting website.
      </footer>
    </div>
  )
}

export default App
