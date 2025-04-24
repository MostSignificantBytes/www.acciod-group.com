import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
    language,
    slug,
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
    seeAllActivities,
    latestStories,
    keepReading,
    ourBlog,
}) => {
    const heroImage = getImage(image) || image;

    return (
        <div>
            <FullWidthImage img={heroImage} title={title} subheading={heading} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">
                                    <div className="content">
                                        <div className="tile">
                                            <h1 className="title">{mainpitch.title}</h1>
                                        </div>
                                        <div className="tile">
                                            <h2 className="subtitle">{mainpitch.description}</h2>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <h3 className="has-text-weight-semibold is-size-2">
                                                {intro.heading}
                                            </h3>
                                            <p>{intro.description}</p>
                                        </div>
                                    </div>
                                    <Features gridItems={intro.blurbs} />
                                    <div className="columns">
                                        <div className="column is-12 has-text-centered">
                                            <Link className="btn" to={(language === 'fr' ? '' : '/' + language) + "/activities/"}>
                                                {seeAllActivities}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {latestStories}
                                        </h3>
                                        <BlogRoll language={language} keepReading={keepReading}/>
                                        <div className="column is-12 has-text-centered">
                                            <Link className="btn" to={(language === 'fr' ? '' : '/' + language) + "/blog/"}>
                                                {ourBlog}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    seeAllActivities: PropTypes.string,
    latestStories: PropTypes.string,
    keepReading: PropTypes.string,
    ourBlog: PropTypes.string,
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                language={frontmatter.language}
                slug={frontmatter.slug}
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
                seeAllActivities={frontmatter.seeAllActivities}
                latestStories={frontmatter.latestStories}
                keepReading={frontmatter.keepReading}
                ourBlog={frontmatter.ourBlog}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            language: PropTypes.string,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate($language: String!) {
        markdownRemark(
            frontmatter: {
                templateKey: { eq: "index-page" }
                language: { eq: $language}
            }
        ) {
            frontmatter {
                language
                slug
                title
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                heading
                mainpitch {
                    title
                    description
                }
                intro {
                    heading
                    description
                    blurbs {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                            }
                        }
                        text
                    }
                }
                seeAllActivities
                latestStories
                keepReading
                ourBlog
            }
        }
    }
`;
