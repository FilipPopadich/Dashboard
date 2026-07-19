import { useNavigate } from 'react-router-dom'
import { players, getPlayer } from '../data/playersData'
import GenericAvatar from './GenericAvatar'

export default function H2HSection({ t, player, opponentId, onOpponentChange }) {
    const navigate = useNavigate()
    const opponents = players.filter((p) => p.id !== player.id)
    const opponent = opponentId ? getPlayer(opponentId) : null

    return (
        <div className="mp-card text-center" id="h2h">
            <div className="mp-card-head">
                <span className="mp-eyebrow">03</span>
                <h3>{t.h2hTitle}</h3>
                <p className="mp-context">{t.h2hContext}</p>
            </div>

            <div className="mp-h2h-picker">
                <div className="mp-h2h-side">
                    <GenericAvatar color={player.color} size={44} />
                    <span style={{ color: player.color }}>{player.name}</span>
                </div>
                <span className="mp-h2h-vs">vs</span>
                <div className="mp-h2h-side">
                    {opponent && <GenericAvatar color={opponent.color} size={44} />}
                    <select
                        className="mp-select"
                        value={opponentId}
                        onChange={(e) => onOpponentChange(e.target.value)}
                        aria-label={t.h2hCompareLabel}
                    >
                        <option value="">{t.h2hSelectPrompt}</option>
                        {opponents.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button
                    type="button"
                    className="mp-h2h-cta-btn"
                    disabled={!opponent}
                    onClick={() => opponent && navigate(`/h2h/${player.id}/${opponent.id}`)}
                >
                    {t.h2hCtaButton}
                </button>
            </div>
        </div>
    )
}