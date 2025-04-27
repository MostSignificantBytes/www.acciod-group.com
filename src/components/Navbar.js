import React from "react";
import { Link } from "gatsby";

import staticData from '../data/navbar'
import LanguageSwitcher from './LanguageSwitcher'

import logoAcciod from "../img/logoAcciod.png";
import logoKpOne from "../img/logoKpOne.png";
import twitter from "../img/social/twitter.svg";
import linkedin from "../img/social/linkedin.svg";

const _ = require('lodash')

/* eslint-disable */
const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
        this.slug = props.slug;
        this.filteredData = staticData.filter(data => data.language === props.language)[0];
        this.navData = _.cloneDeep(this.filteredData.nav);
    }

    toggleHamburger() {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                            navBarActiveClass: "is-active",
                        })
                    : this.setState({
                            navBarActiveClass: "",
                        });
            }
        );
    }

    render() {
        return (
            <>
            <nav
                className="navbar has-background-black"
                role="navigation"
                aria-label="secondary-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to={this.filteredData.path} className="navbar-item" title={this.filteredData.logoAcciod}>
                            <img width="776px" height="280px" src={logoAcciod} alt={this.filteredData.logoAcciod} style={{ width: "auto" }} />
                        </Link>
                    </div>
                    <div className="navbar-end has-text-centered">
                        <div className="navbar-item">
                            <a title="twitter" href="https://twitter.com/msbcompany">
                                <img
                                    src={twitter}
                                    alt="Twitter"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a title="linkedin" href="https://fr.linkedin.com/company/msbytes">
                                <img
                                    src={linkedin}
                                    alt="Linkedin"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                        </div>
                        <LanguageSwitcher slug={this.slug} />
                    </div>
                </div>
            </nav>
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to={this.filteredData.path} className="navbar-item" title={this.filteredData.logoKpOne}>
                            <img width="776px" height="280px" src={logoKpOne} alt={this.filteredData.logoKpOne} style={{ width: "auto" }} />
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            id="burger-menu"
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            role="navigation"
                            tabIndex={0}
                            onKeyPress={() => this.toggleHamburger()}
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                        <div className="navbar-end has-text-centered">
                            {this.navData.map(item => (
                                item.subNav && item.subNav.length > 0 ? (
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <Link className={`navbar-link${this.slug === item.href ? ' is-active' : ''}`} key={item.title} to={item.href}>
                                            {item.title}
                                        </Link>
                                        <div className="navbar-dropdown">
                                            {item.subNav.map(subItem => (
                                                <Link className={`navbar-item${this.slug === subItem.href ? ' is-active' : ''}`} key={subItem.title} to={subItem.href}>
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className={`navbar-item${this.slug === item.href ? ' is-active' : ''}`} key={item.title} to={item.href}>
                                        {item.title}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            </>
        );
    }
};

export default Navbar;
