import { NavLink } from 'react-router-dom'
import { LayoutDashboard } from 'lucide-react'
import { players } from '../data/playersData'

export default function Sidebar({ t }) {
    return (
        <aside className="mp-sidebar">
            <div className="mp-sidebar-brand">
                <span className="mp-sidebar-mark">
                    <span className="mp-sidebar-dot" />
                </span>
                <span>{t.brand}</span>
            </div>

            <nav className="mp-sidebar-nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `mp-sidebar-link ${isActive ? 'is-active' : ''}`}
                >
                    <LayoutDashboard size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{t.navHome}</span>
                </NavLink>

                <p className="mp-sidebar-group-label">
                    <span>{t.navPlayers}</span>
                </p>

                {players.map((p) => (
                    <NavLink
                        key={p.id}
                        to={`/player/${p.id}`}
                        className={({ isActive }) => `mp-sidebar-link ${isActive ? 'is-active' : ''}`}
                        style={{ '--pc': p.color }}
                    >
                        <span className="mp-sidebar-player-dot" />
                        <span>{p.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}