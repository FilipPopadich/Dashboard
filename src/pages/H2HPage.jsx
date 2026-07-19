import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import GenericAvatar from '../components/GenericAvatar'
import RadarComparison from '../components/RadarComparison'
import StatBarChart, { countMetrics } from '../components/StatBarChart'
import H2HTrendChart from '../components/H2HTrendChart'
import { getPlayer, careerStats, trendableStats } from '../data/playersData'

function KpiRow({ label, valueA, valueB, colorA, colorB }) {
    const numA = typeof valueA === 'string' ? parseFloat(valueA.replace(/[^0-9.]/g, '')) : valueA
    const numB = typeof valueB === 'string' ? parseFloat(valueB.replace(/[^0-9.]/g, '')) : valueB
    const max = Math.max(numA || 0, numB || 0, 1)
    const widthA = Math.max(((numA || 0) / max) * 100, 4)
    const widthB = Math.max(((numB || 0) / max) * 100, 4)

    return (
        <div className="mp-h2hp-kpi-row">
            <span className="mp-h2hp-kpi-val" style={{ color: colorA }}>{valueA}</span>
            <span className="mp-h2hp-kpi-label">{label}</span>
            <span className="mp-h2hp-kpi-val text-end" style={{ color: colorB }}>{valueB}</span>
            <div className="mp-h2hp-kpi-track">
                <div className="mp-h2hp-kpi-bar mp-h2hp-kpi-bar-a" style={{ width: `${widthA}%`, background: colorA }} />
                <div className="mp-h2hp-kpi-bar mp-h2hp-kpi-bar-b" style={{ width: `${widthB}%`, background: colorB }} />
            </div>
        </div>
    )
}

function AvatarWithRank({ player }) {
    return (
        <div className="mp-h2hp-avatar-wrap">
            <GenericAvatar color={player.color} size={110} />
            <span className="mp-h2hp-rank-badge" style={{ background: player.color }}>
                #{player.ranking}
            </span>
        </div>
    )
}

export default function H2HPage({ t }) {
    const { idA, idB } = useParams()
    const playerA = getPlayer(idA)
    const playerB = getPlayer(idB)
    const [countMetric, setCountMetric] = useState(countMetrics[0])
    const [trendMetric, setTrendMetric] = useState(trendableStats[0])

    if (!playerA || !playerB) return <Navigate to="/" replace />

    const statsA = careerStats[playerA.id]
    const statsB = careerStats[playerB.id]

    return (
        <div className="mp-content mx-auto" style={{ maxWidth: 980 }}>
            <Link to={`/player/${playerA.id}`} className="mp-back-link">
                <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
                {t.backToProfile}
            </Link>

            <section className="mp-h2hp-hero">
                <div className="mp-h2hp-side">
                    <AvatarWithRank player={playerA} />
                    <span className="mp-h2hp-name-pill" style={{ background: playerA.color, color: '#07090f' }}>
                        {playerA.name}
                        <img className="mp-h2hp-flag" src={playerA.flagImg} alt={playerA.country} />
                    </span>
                </div>

                <div className="mp-h2hp-vs-circle">
                    <span>{t.h2hVsLabel}</span>
                </div>

                <div className="mp-h2hp-side">
                    <AvatarWithRank player={playerB} />
                    <span className="mp-h2hp-name-pill" style={{ background: playerB.color, color: '#07090f' }}>
                        {playerB.name}
                        <img className="mp-h2hp-flag" src={playerB.flagImg} alt={playerB.country} />
                    </span>
                </div>
            </section>

            <section className="mp-card mp-h2hp-kpis">
                <KpiRow label="YTD W/L" valueA={`${playerA.ytdWins}/${playerA.ytdLosses}`} valueB={`${playerB.ytdWins}/${playerB.ytdLosses}`} colorA={playerA.color} colorB={playerB.color} />
                <KpiRow label={t.kpiTitles} valueA={playerA.titles} valueB={playerB.titles} colorA={playerA.color} colorB={playerB.color} />
                <KpiRow label={t.kpiSlams} valueA={playerA.slams} valueB={playerB.slams} colorA={playerA.color} colorB={playerB.color} />
                <KpiRow label={t.careerMatches} valueA={statsA.matches} valueB={statsB.matches} colorA={playerA.color} colorB={playerB.color} />
                <KpiRow label={t.prizeMoney} valueA={playerA.prizeMoney} valueB={playerB.prizeMoney} colorA={playerA.color} colorB={playerB.color} />
            </section>

            <div className="row g-4 mt-1">
                <div className="col-12 col-lg-6">
                    <RadarComparison t={t} player={playerA} opponent={playerB} standalone />
                </div>
                <div className="col-12 col-lg-6">
                    <StatBarChart t={t} player={playerA} opponent={playerB} metric={countMetric} onMetricChange={setCountMetric} />
                </div>
            </div>

            <H2HTrendChart t={t} player={playerA} opponent={playerB} metric={trendMetric} onMetricChange={setTrendMetric} />
        </div>
    )
}