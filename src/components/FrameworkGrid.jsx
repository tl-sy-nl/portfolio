import { Link } from 'react-router-dom'

const framework = [
  { dimension: 'Imagining futures', title: 'Beyond 100%', path: '/cases/beyond-100' },
  { dimension: 'Who gets heard', title: 'Out/Edge', path: '/cases/out-edge' },
  { dimension: 'Who gets heard', title: 'The Air We Share', path: '/cases/air-spaces' },
  { dimension: 'What systems cannot hold', title: 'Lockdown as Catalyst', path: '/cases/arts-education' },
  { dimension: 'What systems cannot hold', title: 'Invisible Infrastructure', path: '/cases/academic-platform' },
]

export default function FrameworkGrid({ currentPath }) {
  return (
    <nav className="framework-grid" aria-label="Research framework">
      {/* Row 1: dimension labels (not clickable, just text) */}
      <div className="framework-grid__labels">
        {framework.map(f => (
          <span key={f.title} className="framework-grid__dimension">{f.dimension}</span>
        ))}
      </div>
      {/* Row 2: case title cells (clickable links) */}
      <div className="framework-grid__cases">
        {framework.map(f => {
          const isCurrent = currentPath === f.path
          return (
            <Link
              key={f.title}
              to={f.path}
              className={`framework-grid__cell${isCurrent ? ' framework-grid__cell--current' : ''}`}
              aria-current={isCurrent ? 'page' : undefined}
            >
              <span className="framework-grid__title">{f.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
