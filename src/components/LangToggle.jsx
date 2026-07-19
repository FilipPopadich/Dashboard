import './LangToggle.css'

export default function LangToggle({ lang, onChange, label }) {
    return (
        <div className="lt-wrap">
            <div className={`lt-nav ${lang === 'fr' ? 'is-fr' : 'is-en'}`} role="radiogroup" aria-label={label}>
                <div className="lt-bubble" aria-hidden="true"></div>
                <button
                    type="button"
                    role="radio"
                    aria-checked={lang === 'en'}
                    className={`lt-item ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => onChange('en')}
                >
                    EN
                </button>
                <button
                    type="button"
                    role="radio"
                    aria-checked={lang === 'fr'}
                    className={`lt-item ${lang === 'fr' ? 'active' : ''}`}
                    onClick={() => onChange('fr')}
                >
                    FR
                </button>
            </div>
        </div>
    )
}