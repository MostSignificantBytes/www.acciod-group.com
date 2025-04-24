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
    name,
    email,
    message,
    send,
    handleSubmit,
    handleChange,
}) => {
    const [disableSubmitButton, setDisableSubmitButton] = React.useState(true);

    function handleReCAPTCHA() {
        setDisableSubmitButton(false);
    }

    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1>{title}</h1>
                    <form
                        name="contact"
                        method="post"
                        action={(language === 'fr' ? '' : '/' + language) + "/contact/thanks/"}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
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
                        <div className="field">
                            <label className="label" htmlFor={"name"}>
                                {name}
                            </label>
                            <div className="control">
                                <input
                                    className="input"
                                    type={"text"}
                                    name={"name"}
                                    onChange={handleChange}
                                    id={"name"}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor={"email"}>
                                {email}
                            </label>
                            <div className="control">
                                <input
                                    className="input"
                                    type={"email"}
                                    name={"email"}
                                    onChange={handleChange}
                                    id={"email"}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor={"message"}>
                                {message}
                            </label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    name={"message"}
                                    onChange={handleChange}
                                    id={"message"}
                                    required={true}
                                />
                            </div>
                        </div>
                        <ReCAPTCHA sitekey="6LcD8PgfAAAAANLnYT04Au6f29fzQjfxOBCYxVgC" onChange={handleReCAPTCHA}/>
                        <div className="field">
                            <button className="button is-link" type="submit" disabled={disableSubmitButton}>
                                {send}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

ContactPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    send: PropTypes.string,
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
                    name={this.frontmatter.name}
                    email={this.frontmatter.email}
                    message={this.frontmatter.message}
                    send={this.frontmatter.send}
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
                name
                email
                message
                send
            }
        }
    }
`;
