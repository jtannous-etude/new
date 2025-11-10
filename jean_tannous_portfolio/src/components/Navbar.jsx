import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar(){
  const { t, i18n } = useTranslation()
  // Force French and disable language switching — button left for UI but inactive
  useEffect(() => {
    if (i18n.language !== 'fr') i18n.changeLanguage('fr')
  }, [i18n])
  const toggleLang = () => { /* intentionally disabled */ }
  return (
    <header className="site-header">
      <div className="nav-inner">
        <nav className="nav-links">
          <Link to="/" className="nav-logo">Jean</Link>
          <Link className="nav-link" to="/projects">{t('nav.projects')}</Link>
          <Link className="nav-link" to="/skills">{t('nav.skills')}</Link>
          <Link className="nav-link" to="/contact">{t('nav.contact')}</Link>
        </nav>
        <div className="nav-actions">
          <button onClick={toggleLang} className="lang-toggle" disabled>FR</button>
        </div>
      </div>
    </header>
  )
}
