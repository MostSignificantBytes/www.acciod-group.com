import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const ThanksPageTemplate = ({ title, text }) => {

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
                                <h3>{text}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

ThanksPageTemplate.propTypes = {
    slug: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const ThanksPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <ThanksPageTemplate
                slug={post.frontmatter.slug}
                language={post.frontmatter.language}
                title={post.frontmatter.title}
                text={post.frontmatter.text}
            />
        </Layout>
    );
};

ThanksPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ThanksPage;

export const thanksPageQuery = graphql`
    query ThanksPage($id: String!, $language: String!) {
        markdownRemark(
            id: { eq: $id }
            frontmatter: {
                language: { eq: $language}
            }
        ) {
            frontmatter {
                language
                slug
                title
                text
            }
        }
    }
`;
