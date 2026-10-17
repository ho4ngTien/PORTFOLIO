import { BriefcaseBusiness, Code2, MonitorSmartphone } from 'lucide-react'

const figures = [
  { value: '04', label: 'Featured projects', icon: BriefcaseBusiness },
  { value: '06+', label: 'Tools in my daily stack', icon: Code2 },
  { value: '100%', label: 'Responsive by default', icon: MonitorSmartphone },
]

export function Stats() {
  return (
    <section aria-label="Portfolio highlights" className="stats-band">
      <div className="stats-grid">
        {figures.map(({ value, label, icon: Icon }) => (
          <div className="stat-item" data-reveal key={label}>
            <Icon aria-hidden="true" size={23} strokeWidth={1.6} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}