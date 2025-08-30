import React from "react";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { navigate } from "gatsby-link";

import Layout from "../components/Layout";

// eslint-disable-next-line
export const ContactPageTemplate = ({
    language,
    slug,
    title,
    subtitle,
    part1,
    part2,
    part3,
    part4,
    send,
    contact,
    handleSubmit,
    handleChange,
}) => {
    const [disableSubmitButton, setDisableSubmitButton] = React.useState(true);

    function handleReCAPTCHA() {
        setDisableSubmitButton(false);
    }

    return (
        <div>

            <div className="hero contactPageHeader">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <h2>
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero contactPage">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-7">
                                <h3>{subtitle}</h3>
                                <form
                                    name="acciod-contact"
                                    method="post"
                                    action={(language === 'fr' ? '' : '/' + language) + "/contact/thanks/"}
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    data-netlify-recaptcha="true"
                                    onSubmit={handleSubmit}
                                >
                                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div hidden>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="bot-field" onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className="formSection">
                                        <h4>{part1.title}</h4>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"name"}
                                                onChange={handleChange}
                                                id={"name"}
                                                required={true}
                                                placeholder={part1.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"email"}
                                                onChange={handleChange}
                                                id={"email"}
                                                required={true}
                                                placeholder={part1.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"phone"}
                                                onChange={handleChange}
                                                id={"phone"}
                                                required={true}
                                                placeholder={part1.phone}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"function"}
                                                onChange={handleChange}
                                                id={"function"}
                                                required={true}
                                                placeholder={part1.function}
                                            />
                                        </div>
                                    </div>
                                    <div className="formSection">
                                        <h4>{part2.title}</h4>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"company"}
                                                onChange={handleChange}
                                                id={"company"}
                                                required={true}
                                                placeholder={part2.company}
                                            />
                                        </div>
                                    </div>
                                    <div className="formSection">
                                        <h4>{part3.title}</h4>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type={"text"}
                                                name={"form"}
                                                onChange={handleChange}
                                                id={"form"}
                                                required={true}
                                                placeholder={part3.form}
                                            />
                                        </div>
                                    </div>
                                    <div className="formSection">
                                        <h4>{part4.title}</h4>
                                    </div>
                                    <div className="formText">
                                        <p>{part4.text}</p>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox" htmlFor={"agreement"}>
                                                <input
                                                    className="checkbox"
                                                    type={"checkbox"}
                                                    name={"agreement"}
                                                    onChange={handleChange}
                                                    id={"agreement"}
                                                    required={false}
                                                />
                                                {part4.agreement}
                                            </label>
                                        </div>
                                    </div>
                                    <ReCAPTCHA sitekey="6Lc7F7grAAAAAOX-8DQKTqvtl8Sa4zkGtZjt8p1H" onChange={handleReCAPTCHA}/>
                                    <div className="field">
                                        <button className="button is-link" type="submit" disabled={disableSubmitButton}>
                                            {send}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="column is-3">
                                <div className="box">
                                    <h4>{contact.france.title}</h4>
                                    <p>{contact.france.street}</p>
                                    <p>{contact.france.city}</p>
                                    <h4>{contact.uk.title}</h4>
                                    <p>{contact.uk.street}</p>
                                    <p>{contact.uk.city}</p>
                                    <h4>{contact.phone.title}</h4>
                                    <p>{contact.phone.number}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

ContactPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    part1: PropTypes.object,
    part2: PropTypes.object,
    part3: PropTypes.object,
    part4: PropTypes.object,
    send: PropTypes.string,
    contact: PropTypes.object,
    handleSubmit: PropTypes.object,
    handleChange: PropTypes.object,
};

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
        this.frontmatter = this.props.data.markdownRemark.frontmatter;
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch((error) => alert(error));
    };

    render() {
        return (
            <Layout>
                <ContactPageTemplate
                    language={this.frontmatter.language}
                    slug={this.frontmatter.slug}
                    title={this.frontmatter.title}
                    subtitle={this.frontmatter.subtitle}
                    part1={this.frontmatter.part1}
                    part2={this.frontmatter.part2}
                    part3={this.frontmatter.part3}
                    part4={this.frontmatter.part4}
                    send={this.frontmatter.send}
                    contact={this.frontmatter.contact}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </Layout>
        );
    };
};

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            language: PropTypes.string,
        }),
    }),
};

export const pageQuery = graphql`
    query ContactPageTemplate($language: String!) {
        markdownRemark(
            frontmatter: {
                templateKey: { eq: "contact-page" }
                language: { eq: $language}
            }
        ) {
            frontmatter {
                language
                slug
                title
                subtitle
                part1 {
                    title
                    name
                    email
                    phone
                    function
                }
                part2 {
                    title
                    company
                }
                part3 {
                    title
                    form
                }
                part4 {
                    title
                    text
                    agreement
                }
                send
                contact {
                    france {
                        title
                        street
                        city
                    }
                    uk {
                        title
                        street
                        city
                    }
                    phone {
                        title
                        number
                    }
                }
            }
        }
    }
`;
