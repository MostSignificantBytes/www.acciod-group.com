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
                className="navbar navbar-fixed has-background-black"
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
                            <a title="twitter" href="https://twitter.com/ACCIOD_">
                                <img
                                    src={twitter}
                                    alt="Twitter"
                                    style={{ width: "24px", height: "24px" }}
                                />
                            </a>
                        </div>
                        <div className="navbar-item linkedin">
                            <a title="linkedin" href="https://www.linkedin.com/company/1793406?trk=tyah&trkInfo=clickedVertical%3Acompany%2Cidx%3A1-1-1%2CtarId%3A1433769600112%2Ctas%3Aacciod">
                                <img
                                    src={linkedin}
                                    alt="Linkedin"
                                    style={{ width: "28px", height: "28px" }}
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
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <Link to={this.filteredData.path} className="navbar-item" title={this.filteredData.logoKpOne}>
                            <img width="776px" height="280px" src={logoKpOne} alt={this.filteredData.logoKpOne} style={{ width: "auto" }} />
                        </Link>
                    </div>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                        <div className="navbar-end has-text-centered">
                            {this.navData.map(item => (
                                item.subNav && item.subNav.length > 0 ? (
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <div className="navbar-item">{item.title}</div>
                                        <div className="navbar-dropdown">
                                            {item.subNav.map(subItem => (
                                                <Link className={`navbar-item${this.slug === subItem.href ? ' is-active' : ''}`} key={subItem.title} to={subItem.href}>
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className={`navbar-item${this.slug === item.href ? ' is-active' : ''}${item.href.startsWith('tel') ? ' button' : ''}`} key={item.title} to={item.href}>
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
