import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const ThanksPageTemplate = ({ title, text }) => {

    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </section>
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
