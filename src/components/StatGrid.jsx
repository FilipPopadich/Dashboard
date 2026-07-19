import { statFields } from '../data/playersData'

function StatRow({ t, field, value }) {
    const display = field.pct ? `${value}%` : value.toLocaleString()
    return (
        <div className="mp-stat-row">
            <span className="mp-stat-label">{t[field.key]}</span>
            <span className="mp-stat-value">{display}</span>
        </div>
    )
}

export default function StatGrid({ t, stats }) {
    return (
        <div className="mp-stat-columns">
            <div className="mp-stat-col">
                <h4 className="mp-stat-col-title">{t.serveStatsTitle}</h4>
                {statFields.serve.map((field) => (
                    <StatRow key={field.key} t={t} field={field} value={stats[field.key]} />
                ))}
            </div>
            <div className="mp-stat-col">
                <h4 className="mp-stat-col-title">{t.returnStatsTitle}</h4>
                {statFields.return.map((field) => (
                    <StatRow key={field.key} t={t} field={field} value={stats[field.key]} />
                ))}
            </div>
        </div>
    )
}