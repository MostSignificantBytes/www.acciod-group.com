import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Skills from "../components/Skills";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ProductPageTemplate = ({
    language,
    slug,
    image,
    title,
    heading,
    description,
    intro,
    main,
    testimonials,
    fullImage,
    skills,
}) => {
    const heroImage = getImage(image) || image;
    const fullWidthImage = getImage(fullImage) || fullImage;

    return (
        <div className="content">
            <FullWidthImage img={heroImage} title={title} imgPosition = "bottom left"/>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-7 is-offset-1">
                                <h3 className="has-text-weight-semibold is-size-2">
                                    {intro.heading}
                                </h3>
                                <p>{intro.description}</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <Features gridItems={intro.blurbs} /> 
                                <div className="columns">
                                    <div className="column is-7">
                                        <h3 className="has-text-weight-semibold is-size-3">
                                            {main.heading}
                                        </h3>
                                        <p>{main.description}</p>
                                    </div>
                                </div>
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <article className="tile is-child">
                                                    <PreviewCompatibleImage imageInfo={main.image1} />
                                                </article>
                                            </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child">
                                                    <PreviewCompatibleImage imageInfo={main.image2} />
                                                </article>
                                            </div>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child">
                                                <PreviewCompatibleImage imageInfo={main.image3} />
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <Testimonials testimonials={testimonials} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h2 className="has-text-weight-semibold is-size-2">
                                    {skills.heading}
                                </h2>
                                <div className="tile is-ancestor">
                                    <div className="tile is-vertical">
                                        <div className="tile is-parent">
                                            <article className="tile is-child">
                                                <PreviewCompatibleImage imageInfo={skills.image} />
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <p className="is-size-5">{skills.description}</p>
                                <Skills data={skills.list} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ProductPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    skills: PropTypes.shape({
        heading: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        description: PropTypes.string,
        list: PropTypes.array,
    }),
};

const ProductPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ProductPageTemplate
                language={frontmatter.language}
                slug={frontmatter.slug}
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                intro={frontmatter.intro}
                main={frontmatter.main}
                testimonials={frontmatter.testimonials}
                fullImage={frontmatter.full_image}
                skills={frontmatter.skills}
            />
        </Layout>
    );
};

ProductPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            language: PropTypes.string,
        }),
    }),
};

export default ProductPage;

export const productPageQuery = graphql`
    query ProductPage($id: String!, $language: String!) {
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
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                heading
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                            }
                        }
                        text
                    }
                    heading
                    description
                }
                main {
                    heading
                    description
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
                            }
                        }
                    }
                    image2 {
                        alt
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
                            }
                        }
                    }
                    image3 {
                        alt
                        image {
                            childImageSharp {
                                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
                            }
                        }
                    }
                }
                testimonials {
                    author
                    quote
                }

                full_image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                skills {
                    heading
                    image {
                        alt
                        image {
                            childImageSharp {
                                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                            }
                        }
                    }
                    description
                    list {
                        description
                        items
                        name
                    }
                }
            }
        }
    }
`;
