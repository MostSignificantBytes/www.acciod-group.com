import React from 'react'
import { Link } from 'gatsby'

import nav from '../data/navbar'

import planet from "../img/planet.svg";

const LanguageSwitcher = ({ slug }) => {

    let newLanguage = slug.startsWith('/en/') ? 'Français' : 'English'
    let url = slug.startsWith('/en/') ? slug.replace('/en/', '/') : slug.replace('/', '/en/')

    return (
        <a class="navbar-item" href={url}>
            <span style={{ padding: "0 0.75em 0 0" }}>|</span>
            <img
                src={planet}
                alt="Language"
                style={{ width: "1.25em", height: "1.25em" }}
            />
            <span>&nbsp;{newLanguage}</span>
        </a>
    )
}

export default LanguageSwitcher
