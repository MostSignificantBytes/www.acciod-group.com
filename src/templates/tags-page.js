import * as React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

// eslint-disable-next-line
export const TagsPageTemplate = ({
    language,
    slug,
    pageTitle,
    siteTitle,
    group
}) => {
    return (
        <section className="section">
            <Helmet title={pageTitle + " - " + siteTitle} />
            <div className="container content">
                <div className="columns">
                    <div
                        className="column is-10 is-offset-1"
                        style={{ marginBottom: "6rem" }}
                    >
                        <h1 className="title is-size-2 is-bold-light">{pageTitle}</h1>
                        <ul className="taglist">
                            {group.map((tag) => (
                                <li key={tag.fieldValue}>
                                    <Link to={(language === 'fr' ? '' : '/' + language) + "/tags/" + kebabCase(tag.fieldValue) + "/"}>
                                        {tag.fieldValue} ({tag.totalCount})
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

TagsPageTemplate.propTypes = {
    language: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired,
    group: PropTypes.object.isRequired,
};

const TagsPage = ({ data }) => {
    const { site: website } = data;
    const { markdownRemark: post } = data;
    const { allMarkdownRemark: tags } = data;

    return (
        <Layout>
            <TagsPageTemplate
                language={post.frontmatter.language}
                slug={post.frontmatter.slug}
                pageTitle={post.frontmatter.title}
                siteTitle={website.siteMetadata.title}
                group={tags.group}
            />
        </Layout>
    );
};

TagsPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TagsPage;

export const tagsPageQuery = graphql`
    query TagsPage($id: String!, $language: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(
            id: {
                eq: $id
            }
            frontmatter: {
                language: {
                    eq: $language
                }
            }
        ) {
            html
            id
            frontmatter {
                language
                slug
                title
            }
        }
        allMarkdownRemark(
            limit: 1000, 
            filter: {
                frontmatter: {
                    language: {
                        eq: $language
                    }
                }
            }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
