import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import parse from 'html-react-parser';

import staticData from '../data/navbar'

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ProductPageTemplate = ({
    language,
    slug,
    title,
    subtitle1,
    subtitle2,
    quote,
    why,
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
                                <h3>
                                    {subtitle1}
                                </h3>
                                <h3>
                                    {subtitle2}
                                </h3>
                            </div>
                        </div>
                        <div className="columns is-centered productPageContent">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-7">
                                        <PageContent className="content" content={content} />
                                    </div>
                                    <div className="column is-4">
                                        <div className="box">
                                            <h4>{FilteredData.nav[2].subtitle}</h4>
                                            <hr/>
                                            {FilteredData.nav[2].subNav.map(item => (
                                                (item.title !== title) ? 
                                                (
                                                <div>
                                                    <Link key={item.title} to={item.href}>
                                                        {item.title}
                                                    </Link>
                                                </div>
                                                ) : null
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {(!!quote) ? (
            <div className="hero productPageQuote">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <p>{quote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}

            {(!!why) ? (
            <div>

            <div className="hero productPageWhyParagraph1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="box">
                                    <h3>{why.paragraph1title1}</h3>
                                    <p>{why.paragraph1text1}</p>
                                    <h3>{why.paragraph1title2}</h3>
                                    <p>{why.paragraph1text2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero productPageWhyParagraph2">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div>
                                    <h3>{why.paragraph2title}</h3>
                                    <div>
                                        <img src="/img/icons8-innovation-128.png" alt={why.paragraph2title} className="image is-inline-block"/>
                                    </div>
                                    <h4>{why.paragraph2text}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-4">
                                        <h3>{why.paragraph2element1title}</h3>
                                        <p>{why.paragraph2element1text}</p>
                                    </div>
                                    <div className="column is-4">
                                        <h3>{why.paragraph2element2title}</h3>
                                        <p>{why.paragraph2element2text}</p>
                                    </div>
                                    <div className="column is-4">
                                        <h3>{why.paragraph2element3title}</h3>
                                        <p>{why.paragraph2element3text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero productPageWhyParagraph3">
                <div classname="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-6">
                                        <img src="/img/181023_163754.png" alt="{why.paragraph3text}"/>
                                    </div>
                                    <div className="column is-6 is-vcenter">
                                        <p>{why.paragraph3text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            ) : null}

        </div>
    );
};

ProductPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    subtitle1: PropTypes.string,
    subtitle2: PropTypes.string,
    quote: PropTypes.string,
    why: PropTypes.object,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

const ProductPage = ({ data }) => {
    const { markdownRemark: page } = data;

    return (
        <Layout>
            <ProductPageTemplate
                language={page.frontmatter.language}
                slug={page.frontmatter.slug}
                title={page.frontmatter.title}
                subtitle1={page.frontmatter.subtitle1}
                subtitle2={page.frontmatter.subtitle2}
                quote={page.frontmatter.quote}
                why={page.frontmatter.why}
                content={page.html}
                contentComponent={HTMLContent}
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

export const pageQuery = graphql`
    query ProductByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                subtitle1
                subtitle2
                quote
                why {
                    paragraph1title1
                    paragraph1text1
                    paragraph1title2
                    paragraph1text2
                    paragraph2title
                    paragraph2text
                    paragraph2element1title
                    paragraph2element1text
                    paragraph2element2title
                    paragraph2element2text
                    paragraph2element3title
                    paragraph2element3text
                    paragraph3text
                }
                language
                slug
            }
        }
    }
`;