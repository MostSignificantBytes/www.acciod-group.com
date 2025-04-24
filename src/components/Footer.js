import * as React from "react";
import { Link } from "gatsby";

import staticData from '../data/navbar'

import logo from "../img/logoMSBclair.png";
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
                <div className="content has-text-centered">
                    <img
                        width="724px"
                        height="309px"
                        src={logo}
                        alt="MSB"
                        style={{ width: "auto", maxHeight: "10em" }}
                    />
                </div>
                <div className="content has-text-centered has-background-black has-text-white-ter">
                    <div className="container has-background-black has-text-white-ter">
                        <div style={{ maxWidth: "100vw" }} className="columns">
                            <div className="column is-3">
                                <section className="menu">
                                    <ul className="menu-list">
                                        <li>
                                            <Link className="navbar-item" to={this.filteredData.nav[0].href}>
                                                {this.filteredData.nav[0].title}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="navbar-item" to={this.filteredData.nav[1].href}>
                                                {this.filteredData.nav[1].title}
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-3">
                                <section>
                                    <ul className="menu-list">
                                        <li>
                                            <Link className="navbar-item" to={this.filteredData.nav[2].href}>
                                                {this.filteredData.nav[2].title}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="navbar-item" to={this.filteredData.nav[3].href}>
                                                {this.filteredData.nav[3].title}
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-3">
                                <section>
                                    <ul className="menu-list">
                                        <li>
                                            <Link className="navbar-item" to={this.filteredData.nav[4].href}>
                                                {this.filteredData.nav[4].title}
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-3 social">
                                <div className="columns">
                                    <div className="column">
                                        <a title="linkedin" href="https://fr.linkedin.com/company/msbytes">
                                            <img
                                                src={linkedin}
                                                alt="Linkedin"
                                                style={{ width: "1em", height: "1em" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="column"></div>
                                    <div className="column">
                                        <a title="github" href="https://github.com/MostSignificantBytes">
                                            <img
                                                src={github}
                                                alt="Github"
                                                style={{ width: "1em", height: "1em" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="column"></div>
                                    <div className="column">
                                        <a title="twitter" href="https://twitter.com/msbcompany">
                                            <img
                                                src={twitter}
                                                alt="Twitter"
                                                style={{ width: "1em", height: "1em" }}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column"></div>
                                    <div className="column">
                                        <a title="instagram" href="https://www.instagram.com/mostsignificantbytes">
                                            <img
                                                src={instagram}
                                                alt="Instagram"
                                                style={{ width: "1em", height: "1em" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="column"></div>
                                    <div className="column">
                                        <a title="facebook" href="https://www.facebook.com/msbytes">
                                            <img
                                                className="fas fa-lg"
                                                src={facebook}
                                                alt="Facebook"
                                                style={{ width: "1em", height: "1em" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="column"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content has-text-centered">
                    <p className="copyright">MSB SAS &copy; 2017 - 2022</p>
                </div>
            </footer>
        );
    }
};

export default Footer;
