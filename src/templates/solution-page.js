import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import staticData from '../data/navbar'

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const SolutionPageTemplate = ({
    language,
    slug,
    title,
    content,
    contentComponent,
}) => {

	const PageContent = contentComponent || Content;
    const FilteredData = staticData.filter(data => data.language === language)[0];

	return (
        <div>

            <div className="hero productPageHeader">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <h2>
                                    {FilteredData.nav[2].title} > {title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered productPageTitle">
                            <div className="column is-10">
                                <h2>
                                    {title}
                                </h2>
                            </div>
                        </div>
                        <div className="columns is-centered productPageContent">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-10">
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

SolutionPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

const SolutionPage = ({ data }) => {
    const { markdownRemark: page } = data;

    return (
        <Layout>
            <SolutionPageTemplate
                language={page.frontmatter.language}
                slug={page.frontmatter.slug}
                title={page.frontmatter.title}
                content={page.html}
                contentComponent={HTMLContent}
            />
        </Layout>
    );
};

SolutionPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            language: PropTypes.string,
        }),
    }),
};

export default SolutionPage;

export const pageQuery = graphql`
    query ProductByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                language
                slug
            }
        }
    }
`;