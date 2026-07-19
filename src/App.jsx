import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import LangToggle from './components/LangToggle'
import Home from './pages/Home'
import PlayerProfile from './pages/PlayerProfile'
import H2HPage from './pages/H2HPage'
import { translations } from './i18n/translations'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    const [lang, setLang] = useState('en')
    const t = translations[lang]

    return (
        <div className="mp-shell">
            <ScrollToTop />
            <Sidebar t={t} />

            <div className="mp-main">
                <header className="mp-topbar">
                    <div>
                        <p className="mp-eyebrow-top">{t.tagline}</p>
                        <h1 className="mp-title">{t.brand}</h1>
                    </div>
                    <LangToggle lang={lang} onChange={setLang} label={t.langLabel} />
                </header>

                <Routes>
                    <Route path="/" element={<Home t={t} />} />
                    <Route path="/player/:id" element={<PlayerProfile t={t} />} />
                    <Route path="/h2h/:idA/:idB" element={<H2HPage t={t} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App