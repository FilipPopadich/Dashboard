import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import GenericAvatar from '../components/GenericAvatar'
import StatGrid from '../components/StatGrid'
import TrendChart from '../components/TrendChart'
import H2HSection from '../components/H2HSection'
import { getPlayer, careerStats } from '../data/playersData'

export default function PlayerProfile({ t }) {
    const { id } = useParams()
    const player = getPlayer(id)
    const [trendMetric, setTrendMetric] = useState('winRate')
    const [h2hOpponentId, setH2hOpponentId] = useState('')

    if (!player) return <Navigate to="/" replace />

    const stats = careerStats[player.id]

    return (
        <div className="mp-content">
            <Link to="/" className="mp-back-link">
                <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
                {t.backToHome}
            </Link>

            <section className="mp-profile-header" style={{ '--pc': player.color }}>
                <GenericAvatar color={player.color} size={88} />
                <div className="mp-profile-heading">
                    <span className="mp-profile-flag">
                        <img className="mp-profile-flag-img" src={player.flagImg} alt={player.country} /> {player.country}
                    </span>
                    <h1 className="mp-profile-name" style={{ color: player.color }}>
                        {player.name}
                    </h1>
                    <div className="mp-profile-bio">
                        <span>Age: {player.age}</span>
                        <span className="mp-bio-sep">•</span>
                        <span>{player.height}</span>
                        <span className="mp-bio-sep">•</span>
                        <span>{player.weight}</span>
                        <span className="mp-bio-sep">•</span>
                        <span>{player.plays}</span>
                        <span className="mp-bio-sep">•</span>
                        <span>Backhand: {player.backhand}</span>
                    </div>
                </div>
                <div className="mp-profile-kpis">
                    <div>
                        <span className="mp-kpi-val" style={{ color: player.color }}>#{player.ranking}</span>
                        <span className="mp-kpi-label">{t.kpiRanking}</span>
                    </div>
                    <div>
                        <span className="mp-kpi-val" style={{ color: player.color }}>{player.slams}</span>
                        <span className="mp-kpi-label">{t.kpiSlams}</span>
                    </div>
                    <div>
                        <span className="mp-kpi-val" style={{ color: player.color }}>{player.titles}</span>
                        <span className="mp-kpi-label">{t.kpiTitles}</span>
                    </div>
                    <div>
                        <span className="mp-kpi-val" style={{ color: player.color }}>
                            {player.ytdWins}-{player.ytdLosses}
                        </span>
                        <span className="mp-kpi-label">YTD W/L</span>
                    </div>
                    <div>
                        <span className="mp-kpi-val" style={{ color: player.color }}>
                            {player.prizeMoney}
                        </span>
                        <span className="mp-kpi-label">{t.prizeMoney}</span>
                    </div>
                </div>
            </section>

            <div className="mp-card mb-4">
                <div className="mp-card-head">
                    <span className="mp-eyebrow">{t.careerLabel}</span>
                    <h3>{player.name}</h3>
                </div>
                <StatGrid t={t} stats={stats} />
            </div>

            <div className="mb-4">
                <TrendChart t={t} player={player} metric={trendMetric} onMetricChange={setTrendMetric} />
            </div>

            <H2HSection
                key={id}
                t={t}
                player={player}
                opponentId={h2hOpponentId}
                onOpponentChange={setH2hOpponentId}
            />
        </div>
    )
}