import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'
import { players, careerStats } from '../data/playersData'

function getRadarData(playerId) {
    const stats = careerStats[playerId]
    const acesPerMatch = stats.matches > 0 ? stats.aces / stats.matches : 0
    return {
        servePower: acesPerMatch,
        serveAccuracy: stats.firstServePct,
        returnGame: stats.returnPointsWonPct,
        clutch: stats.breakPointsSavedPct,
        consistency: stats.totalPointsWonPct,
    }
}

const allRadarData = players.map((p) => ({ id: p.id, ...getRadarData(p.id) }))
const maxValues = {
    servePower: Math.max(...allRadarData.map((d) => d.servePower), 1),
    serveAccuracy: Math.max(...allRadarData.map((d) => d.serveAccuracy), 1),
    returnGame: Math.max(...allRadarData.map((d) => d.returnGame), 1),
    clutch: Math.max(...allRadarData.map((d) => d.clutch), 1),
    consistency: Math.max(...allRadarData.map((d) => d.consistency), 1),
}

function normalize(value, max) {
    return Math.round((value / max) * 100)
}

function getNormalizedRadar(playerId) {
    const raw = getRadarData(playerId)
    return {
        servePower: normalize(raw.servePower, maxValues.servePower),
        serveAccuracy: normalize(raw.serveAccuracy, maxValues.serveAccuracy),
        returnGame: normalize(raw.returnGame, maxValues.returnGame),
        clutch: normalize(raw.clutch, maxValues.clutch),
        consistency: normalize(raw.consistency, maxValues.consistency),
    }
}

export default function RadarComparison({ t, player, opponent, standalone = false }) {
    if (!opponent) return null

    const p1Radar = getNormalizedRadar(player.id)
    const p2Radar = getNormalizedRadar(opponent.id)

    const dimensions = [
        { key: 'servePower', label: t.radarServePower },
        { key: 'serveAccuracy', label: t.radarServeAccuracy },
        { key: 'returnGame', label: t.radarReturnGame },
        { key: 'clutch', label: t.radarClutch },
        { key: 'consistency', label: t.radarConsistency },
    ]

    const data = dimensions.map((d) => ({
        dimension: d.label,
        [player.id]: p1Radar[d.key],
        [opponent.id]: p2Radar[d.key],
    }))

    return (
        <div className={`mp-card h-100${standalone ? '' : ' mt-4'}`}>
            <div className="mp-card-head">
                <span className="mp-eyebrow">01</span>
                <h3>{t.radarTitle}</h3>
                <p className="mp-context">{t.radarContext}</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={data} outerRadius="75%">
                    <PolarGrid stroke="var(--line)" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: 'var(--muted)', fontSize: 11, fontFamily: 'var(--mono)' }} />
                    <Radar name={player.name} dataKey={player.id} stroke={player.color} fill={player.color} fillOpacity={0.2} strokeWidth={2} />
                    <Radar name={opponent.name} dataKey={opponent.id} stroke={opponent.color} fill={opponent.color} fillOpacity={0.2} strokeWidth={2} />
                    <Tooltip
                        content={({ active, payload, label }) => {
                            if (!active || !payload || !payload.length) return null
                            return (
                                <div className="mp-tooltip">
                                    <div className="mp-tooltip-title">{label}</div>
                                    {payload.map((p, i) => (
                                        <div key={i} className="mp-tooltip-row">
                                            <span className="mp-dot" style={{ background: p.color }} />
                                            <span>{p.name}</span>
                                            <span className="mp-tooltip-val">{p.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}