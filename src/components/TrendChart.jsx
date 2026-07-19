import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts'
import { seasonTrend, trendableStats } from '../data/playersData'

function CustomTooltip({ active, payload, label, t, metric, color, name }) {
    if (!active || !payload || !payload.length) return null
    return (
        <div className="mp-tooltip">
            <div className="mp-tooltip-title">
                {t.tooltipSeason} {label}
            </div>
            <div className="mp-tooltip-row">
                <span className="mp-dot" style={{ background: color }} />
                <span>{name}</span>
                <span className="mp-tooltip-val">{payload[0].value}%</span>
            </div>
        </div>
    )
}

export default function TrendChart({ t, player, metric, onMetricChange }) {
    const data = seasonTrend[player.id]

    return (
        <div className="mp-card" id="trend">
            <div className="mp-card-head">
                <span className="mp-eyebrow">01</span>
                <h3>{t.trendTitle}</h3>
                <p className="mp-context">{t.trendContext}</p>
            </div>

            <div className="mp-controls-row">
                <label className="mp-select-label">
                    {t.metricLabel}
                    <select
                        className="mp-select"
                        value={metric}
                        onChange={(e) => onMetricChange(e.target.value)}
                    >
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
                </div>
            </div>

            <div className="mp-chart-wrap">
                <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={data} margin={{ top: 10, right: 24, left: 4, bottom: 0 }}>
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
                            content={
                                <CustomTooltip t={t} metric={metric} color={player.color} name={player.name} />
                            }
                        />
                        <Line
                            type="monotone"
                            dataKey={metric}
                            stroke={player.color}
                            strokeWidth={3}
                            dot={{ r: 3, fill: player.color, strokeWidth: 0 }}
                            activeDot={{ r: 5 }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}