import React from 'react'
import { Link } from 'gatsby'

import nav from '../data/navbar'

const LanguageSwitcher = ({ slug }) => {

    let activeLanguage = slug.startsWith('/en/') ? 'en' : 'fr'
    let url = slug.startsWith('/en/') ? slug.replace('/en/', '/') : slug.replace('/', '/en/')

    return (
        nav.map(item => (
            <Link className={`navbar-item${activeLanguage === item.language ? ' is-active' : ''}`} key={item.language} to={url}>
                {item.language}
            </Link>
        ))
    )
}

export default LanguageSwitcher
