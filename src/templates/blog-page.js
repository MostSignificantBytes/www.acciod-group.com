import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const BlogPageTemplate = ({
    language,
    slug,
    title,
    keepReading,
    image,
}) => {
    const heroImage = getImage(image) || image;

    return (
        <div>
            <FullWidthImage img={heroImage} title={title}/>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <BlogRoll language={language} keepReading={keepReading}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

BlogPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    keepReading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const BlogPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <BlogPageTemplate
                language={frontmatter.language}
                slug={frontmatter.slug}
                title={frontmatter.title}
                keepReading={frontmatter.keepReading}
                image={frontmatter.image}
            />
        </Layout>
    );
};

BlogPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            language: PropTypes.string,
        }),
    }),
};

export default BlogPage;

export const pageQuery = graphql`
    query BlogPageTemplate($language: String!) {
        markdownRemark(
            frontmatter: {
                templateKey: { eq: "blog-page" }
                language: { eq: $language}
            }
        ) {
            frontmatter {
                language
                slug
                title
                keepReading
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
