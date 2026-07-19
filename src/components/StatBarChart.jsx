import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts'
import { careerStats, statFields } from '../data/playersData'

export const countMetrics = [...statFields.serve, ...statFields.return].filter((f) => !f.pct).map((f) => f.key)

function CustomTooltip({ active, payload }) {
    if (!active || !payload || !payload.length) return null
    const row = payload[0].payload
    return (
        <div className="mp-tooltip">
            <div className="mp-tooltip-title">{row.name}</div>
            <div className="mp-tooltip-row">
                <span className="mp-dot" style={{ background: row.color }} />
                <span className="mp-tooltip-val">{row.value.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default function StatBarChart({ t, player, opponent, metric, onMetricChange }) {
    const data = [
        { id: player.id, name: player.name, value: careerStats[player.id][metric], color: player.color },
        { id: opponent.id, name: opponent.name, value: careerStats[opponent.id][metric], color: opponent.color },
    ]

    return (
        <div className="mp-card h-100">
            <div className="mp-card-head">
                <span className="mp-eyebrow">02</span>
                <h3>{t.statBarTitle}</h3>
                <p className="mp-context">{t.statBarContext}</p>
            </div>

            <div className="mp-controls-row">
                <label className="mp-select-label">
                    {t.statLabel}
                    <select className="mp-select" value={metric} onChange={(e) => onMetricChange(e.target.value)}>
                        {countMetrics.map((m) => (
                            <option key={m} value={m}>
                                {t[m]}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="mp-chart-wrap">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} layout="vertical" margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                        <CartesianGrid stroke="var(--line)" horizontal={false} />
                        <XAxis
                            type="number"
                            tick={{ fill: 'var(--muted)', fontSize: 12, fontFamily: 'var(--mono)' }}
                            axisLine={{ stroke: 'var(--line)' }}
                            tickLine={false}
                        />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fill: 'var(--text-h)', fontSize: 14 }}
                            axisLine={false}
                            tickLine={false}
                            width={140}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--hover)' }} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} isAnimationActive={false} barSize={44}>
                            {data.map((d) => (
                                <Cell key={d.id} fill={d.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}