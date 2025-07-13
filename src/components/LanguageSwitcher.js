import React from 'react'

import planet from "../img/planet.svg";

const LanguageSwitcher = ({ slug }) => {

    let newLanguage = slug.startsWith('/en/') ? 'Français' : 'English'
    let url = slug.startsWith('/en/') ? slug.replace('/en/', '/') : slug.replace('/', '/en/')

    return (
        <a class="navbar-item languageSwitcher" href={url}>
            <span>|</span>
            <img
                src={planet}
                alt="Language"
                style={{ width: "24px", height: "24px" }}
            />
            <span>&nbsp;{newLanguage}</span>
        </a>
    )
}

export default LanguageSwitcher
