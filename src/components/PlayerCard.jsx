import { Link } from 'react-router-dom'
import GenericAvatar from './GenericAvatar'

export default function PlayerCard({ player, t }) {
    return (
        <Link to={`/player/${player.id}`} className="mp-pcard" style={{ '--pc': player.color }}>
            <GenericAvatar color={player.color} size={72} />
            <h3 className="mp-pcard-name">{player.name}</h3>
            <span className="mp-pcard-rank">
                {t.rankPrefix} #{player.ranking}
            </span>
            <img className="mp-pcard-flag" src={player.flagImg} alt={player.country} />
            <span className="mp-pcard-cta">{t.viewProfile} →</span>
        </Link>
    )
}