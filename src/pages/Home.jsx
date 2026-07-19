import PlayerCard from '../components/PlayerCard'
import { players } from '../data/playersData'

export default function Home({ t }) {
    return (
        <div className="mp-content">
            <p className="mp-hero-text">{t.heroText}</p>

            <section>
                <h2 className="mp-section-title">{t.homeSectionTitle}</h2>
                <div className="mp-pcard-grid">
                    {players.map((p) => (
                        <PlayerCard key={p.id} player={p} t={t} />
                    ))}
                </div>
            </section>
        </div>
    )
}