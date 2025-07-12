import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <div>

            <div className="hero productPageHeader">
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

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered aboutPageContent">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-7">
                                        <PageContent className="content" content={content} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

AboutPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <AboutPageTemplate
                language={post.frontmatter.language}
                slug={post.frontmatter.slug}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!, $language: String!) {
        markdownRemark(
            id: { eq: $id }
            frontmatter: {
                language: { eq: $language}
            }
        ) {
            html
            frontmatter {
                language
                slug
                title
            }
        }
    }
`;
