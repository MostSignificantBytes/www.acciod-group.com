import React from "react";
import { Link } from "gatsby";
import logo from "../img/logoMSB.png";

import staticData from '../data/navbar'
import LanguageSwitcher from './LanguageSwitcher'

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
        this.navData.shift(); // Remove the first element as we don't want to see the homepage in the menu, it's accessed via the logo
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
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to={this.filteredData.path} className="navbar-item" title={this.filteredData.logo}>
                            <img width="776px" height="280px" src={logo} alt="{this.filteredData.logo}" style={{ width: "auto" }} />
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
                        <div className="navbar-start has-text-centered">
                            {this.navData.map(item => (
                                <Link className={`navbar-item${this.slug === item.href ? ' is-active' : ''}`} key={item.title} to={item.href}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="navbar-end has-text-centered">
                            <LanguageSwitcher slug={this.slug} />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
