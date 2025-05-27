import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import SimpleSlider from "../components/SimpleSlider";

// eslint-disable-next-line
export const IndexPageTemplate = ({
    language,
    slug,
    title,
    slider1,
    paragraph1,
    paragraph2,
    slider2,
    paragraph3,
    blurb1,
    paragraph4,
    paragraph5,
    blurb2,
    paragraph6,
    paragraph7,
    paragraph8,
    paragraph9,
    paragraph10,
    video,
    blurb3,
    paragraph11,
}) => {
    return (
        <div>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">

                                    <SimpleSlider />

                                    <div className="columns">
                                        <div className="column is-12">
                                            <h3 className="has-text-weight-semibold is-size-2">
                                                {paragraph1.title}
                                            </h3>
                                            <p>{paragraph1.text}</p>
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
    title: PropTypes.string,
    slider1: PropTypes.object,
    paragraph1: PropTypes.object,
    paragraph2: PropTypes.object,
    slider2: PropTypes.object,
    paragraph3: PropTypes.object,
    blurb1: PropTypes.array,
    paragraph4: PropTypes.object,
    paragraph5: PropTypes.object,
    blurb2: PropTypes.array,
    paragraph6: PropTypes.object,
    paragraph7: PropTypes.object,
    paragraph8: PropTypes.object,
    paragraph9: PropTypes.object,
    paragraph10: PropTypes.object,
    video: PropTypes.object,
    blurb3: PropTypes.array,
    paragraph11: PropTypes.object,
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                language={frontmatter.language}
                slug={frontmatter.slug}
                title={frontmatter.title}
                slider1={frontmatter.slider1}
                paragraph1={frontmatter.paragraph1}
                paragraph2={frontmatter.paragraph2}
                slider2={frontmatter.slider2}
                paragraph3={frontmatter.paragraph3}
                blurb1={frontmatter.blurb1}
                paragraph4={frontmatter.paragraph4}
                paragraph5={frontmatter.paragraph5}
                blurb2={frontmatter.blurb2}
                paragraph6={frontmatter.paragraph6}
                paragraph7={frontmatter.paragraph7}
                paragraph8={frontmatter.paragraph8}
                paragraph9={frontmatter.paragraph9}
                paragraph10={frontmatter.paragraph10}
                video={frontmatter.video}
                blurb3={frontmatter.blurb3}
                paragraph11={frontmatter.paragraph11}
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

                slider1 {
                    title
                    elements {
                        image
                        text
                    }
                    button
                }
                paragraph1 {
                    title
                    text
                }
                paragraph2 {
                    title
                    text
                }
                slider2 {
                    elements {
                        image
                        text
                    }
                }
                paragraph3 {
                    button
                }
                blurb1 {
                    title
                    elements {
                        image
                        title
                        text1
                        text2
                    }
                }
                paragraph4 {
                    title
                    subtitle
                    text
                }
                paragraph5 {
                    title
                    text1
                    text2
                }
                blurb2 {
                    elements {
                        title
                        text
                    }
                }
                paragraph6 {
                    button
                }
                paragraph7 {
                    title
                    text
                }
                paragraph8 {
                    title
                    text1
                    text2
                }
                paragraph9 {
                    text
                }
                paragraph10 {
                    title
                }
                video {
                    url
                }
                blurb3 {
                    title1
                    title2
                    title3
                    title4
                    elements {
                        image
                        title
                    } 
                }
                paragraph11 {
                    title
                    text1
                    text2
                    button
                }
            }
        }
    }
`;
