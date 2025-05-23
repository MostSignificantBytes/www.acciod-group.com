import * as React from "react";
import { Link } from "gatsby";

import staticData from '../data/navbar'

import logoAcciod from "../img/logoAcciod.png";
import logoKpOne from "../img/logoKpOne.png";
import linkedin from "../img/social/linkedin.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import github from "../img/social/github.svg";

const Footer = class extends React.Component {
    constructor(props) {
        super(props);
        this.filteredData = staticData.filter(data => data.language === props.language)[0];
    }

    render() {
        return (
            <footer className="footer has-background-black has-text-white-ter">
                <div className="content has-text-centered has-background-grey-light has-text-blue">
                    <div className="container has-background-grey-light has-text-blue">
                        <div style={{ maxWidth: "100vw" }} className="columns">
                            <div className="column is-3">
                                <img
                                    width="724px"
                                    height="309px"
                                    src={logoKpOne}
                                    alt={this.filteredData.logoKpOne}
                                    style={{ width: "auto", maxHeight: "10em" }}
                                />
                            </div>
                            <div className="column is-3"></div>
                            <div className="column is-3"></div>
                            <div className="column is-3">
                                <Link className="navbar-item" to={this.filteredData.nav[4].href}>
                                    {this.filteredData.nav[4].footerTitle}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content has-text-centered has-background-white has-text-black-ter">
                    <div className="container has-background-white has-text-black-ter">
                        <div style={{ maxWidth: "100vw" }} className="columns">
                            <div className="column is-3">
                                <section className="menu">
                                    <span>{this.filteredData.nav[1].title}</span>
                                    <ul className="menu-list">
                                        {this.filteredData.nav[1].subNav.map(subItem => (
                                            <li>
                                                <Link className="navbar-item has-text-black" key={subItem.title} to={subItem.href}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-3">
                                <section className="menu">
                                    <span>{this.filteredData.nav[2].title}</span>
                                    <ul className="menu-list">
                                        {this.filteredData.nav[2].subNav.map(subItem => (
                                            <li>
                                                <Link className="navbar-item has-text-black" key={subItem.title} to={subItem.href}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-3">
                                <section className="menu">
                                    <span>{this.filteredData.nav[3].footerTitle}</span>
                                    <ul className="menu-list">
                                        <li>
                                            <Link className="navbar-item has-text-black" to={this.filteredData.nav[3].href}>
                                                {this.filteredData.nav[3].title}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="navbar-item has-text-black" to={this.filteredData.nav[4].href}>
                                                {this.filteredData.nav[4].title}
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content has-text-centered has-background-black has-text-white-ter">
                    <div className="container has-background-black has-text-white-ter">
                        <div style={{ maxWidth: "100vw" }} className="columns">
                            <div className="column is-2">
                                <img
                                    width="724px"
                                    height="309px"
                                    src={logoAcciod}
                                    alt={this.filteredData.logoAcciod}
                                    style={{ width: "auto", maxHeight: "10em" }}
                                />
                            </div>
                            <div className="column is-2">
                                <Link className="navbar-item has-text-white" to={this.filteredData.legal.href}>
                                    {this.filteredData.legal.title}
                                </Link>
                            </div>
                            <div className="column is-4">
                                <p className="copyright">ACCIOD SAS &copy; 2007 - 2025. Tous droit réservés &copy;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
