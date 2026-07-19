import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import { seasonTrend, trendableStats } from '../data/playersData'

export default function H2HTrendChart({ t, player, opponent, metric, onMetricChange }) {
    const dataA = seasonTrend[player.id]
    const dataB = seasonTrend[opponent.id]

    const merged = dataA.map((row, idx) => ({
        season: row.season,
        [player.id]: row[metric],
        [opponent.id]: dataB[idx][metric],
    }))

    return (
        <div className="mp-card mt-4">
            <div className="mp-card-head">
                <span className="mp-eyebrow">03</span>
                <h3>{t.h2hTrendTitle}</h3>
                <p className="mp-context">{t.h2hTrendContext}</p>
            </div>

            <div className="mp-controls-row">
                <label className="mp-select-label">
                    {t.metricLabel}
                    <select className="mp-select" value={metric} onChange={(e) => onMetricChange(e.target.value)}>
                        {trendableStats.map((stat) => (
                            <option key={stat} value={stat}>
                                {t[stat]}
                            </option>
                        ))}
                    </select>
                </label>
                <div className="mp-legend">
                    <span className="mp-legend-item">
                        <span className="mp-dot" style={{ background: player.color }} />
                        {player.name}
                    </span>
                    <span className="mp-legend-item">
                        <span className="mp-dot" style={{ background: opponent.color }} />
                        {opponent.name}
                    </span>
                </div>
            </div>

            <div className="mp-chart-wrap">
                <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={merged} margin={{ top: 10, right: 24, left: 4, bottom: 0 }}>
                        <CartesianGrid stroke="var(--line)" vertical={false} />
                        <XAxis
                            dataKey="season"
                            tick={{ fill: 'var(--muted)', fontSize: 13, fontFamily: 'var(--mono)' }}
                            axisLine={{ stroke: 'var(--line)' }}
                            tickLine={false}
                            padding={{ left: 24, right: 24 }}
                        />
                        <YAxis
                            tick={{ fill: 'var(--muted)', fontSize: 13, fontFamily: 'var(--mono)' }}
                            axisLine={false}
                            tickLine={false}
                            width={44}
                            tickFormatter={(v) => `${v}%`}
                        />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (!active || !payload || !payload.length) return null
                                return (
                                    <div className="mp-tooltip">
                                        <div className="mp-tooltip-title">{t.tooltipSeason} {label}</div>
                                        {payload.map((p, i) => (
                                            <div key={i} className="mp-tooltip-row">
                                                <span className="mp-dot" style={{ background: p.color }} />
                                                <span>{p.dataKey === player.id ? player.name : opponent.name}</span>
                                                <span className="mp-tooltip-val">{p.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey={player.id}
                            name={player.name}
                            stroke={player.color}
                            strokeWidth={3}
                            dot={{ r: 3, fill: player.color, strokeWidth: 0 }}
                            activeDot={{ r: 5 }}
                            isAnimationActive={false}
                        />
                        <Line
                            type="monotone"
                            dataKey={opponent.id}
                            name={opponent.name}
                            stroke={opponent.color}
                            strokeWidth={3}
                            dot={{ r: 3, fill: opponent.color, strokeWidth: 0 }}
                            activeDot={{ r: 5 }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}