import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import parse from 'html-react-parser';

import staticData from '../data/navbar'

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const SolutionPageTemplate = ({
    language,
    slug,
    title,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    content,
    contentComponent,
}) => {

    const FilteredData = staticData.filter(data => data.language === language)[0];

    const cleanHTMLString = string => string
        .trim()
        .replace(/\r?\n|\r/g, "") // removes multiple lines
        .replace(/\s\s+/g, '') // removes extra white spaces

    let parser = stringToParse => {
        let dom = document.createElement('div');
        let cleanedString = cleanHTMLString(stringToParse);
        dom.innerHTML = cleanedString;
        return dom.firstChild;
    }

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

            <div className="hero solutionPagePart1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <h3>
                                    {paragraph1.title1}
                                </h3>
                                <h3>
                                    {paragraph1.title2}
                                </h3>
                                <p>
                                    {parse(paragraph1.text)}
                                </p>
                                {(!!paragraph1.img) ? (<img src={"/img/" + paragraph1.img} alt={paragraph1.title2}/>) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero solutionPagePart2">
                <div className="hero-body">
                    <div className="container">
                        {(!!paragraph2.img) ? (
                        <div className="columns is-centered">
                            <div className="column is-5">
                                <img src={"/img/" + paragraph2.img} alt={paragraph1.title2}/>
                            </div>
                            <div className="column is-5">
                                <div className="box">
                                    <p>{parse(paragraph2.text1part1)} <span>{paragraph2.text1part2}</span></p>
                                    <p>{parse(paragraph2.text2part1)} <span>{paragraph2.text2part2}</span></p>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className="columns is-centered">
                            <div className="column is-3"></div>
                            <div className="column is-7">
                                <div className="box">
                                    <p>{parse(paragraph2.text1part1)} <span>{paragraph2.text1part2}</span></p>
                                    <p>{parse(paragraph2.text2part1)} <span>{paragraph2.text2part2}</span></p>
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <p>{paragraph2.text3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero solutionPagePart3">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <h3>{paragraph3.title}</h3>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-3">
                                <img src={"/img/" + paragraph3.img} alt={paragraph3.title}/>
                            </div>
                            <div className="column is-7">
                                <div className="box">
                                    {(!!paragraph3.text0) ? (<p>{parse(paragraph3.text0)}</p>) : null}
                                    {(!!paragraph3.text0) ? (<div className="box"><h4>{paragraph3.subtitle}</h4></div>) : <h4>{paragraph3.subtitle}</h4>}
                                    <p>{parse(paragraph3.text1)}</p>
                                    <p>{parse(paragraph3.text2)}</p>
                                    {(!!paragraph3.text3) ? (<p>{parse(paragraph3.text3)}</p>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {(!!paragraph4.title) ? (
            <div className="hero solutionPagePart4">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-3">
                                <h3>{paragraph4.title}</h3>
                                {(!!paragraph4.img) ? (<img src={"/img/" + paragraph4.img} alt={paragraph4.title}/>) : null}
                            </div>
                            <div className="column is-7">
                                <div className="box">
                                    {(!!paragraph4.subtitle1) ? (<h4>{paragraph4.subtitle1}</h4>) : null}
                                    <p>{parse(paragraph4.text1)}</p>
                                    {(!!paragraph4.subtitle2) ? (<h4>{paragraph4.subtitle2}</h4>) : null}
                                    <p>{parse(paragraph4.text2)}</p>
                                    {(!!paragraph4.text3) ? (<p>{parse(paragraph4.text3)}</p>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
            <div className="hero solutionPagePart4 centeredVersion">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="box">
                                    <h3>{paragraph4.subtitle1}</h3>
                                    <img src={"/img/" + paragraph4.subimg} alt={paragraph4.subtitle1}/>
                                    <p>{parse(paragraph4.text1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

            <div className="hero solutionPagePart3">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <h3>{paragraph5.title}</h3>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-3">
                                <img src={"/img/" + paragraph5.img} alt={paragraph5.title}/>
                            </div>
                            <div className="column is-7">
                                <div className="box">
                                    <h4>{paragraph5.subtitle}</h4>
                                    <p>{parse(paragraph5.text1)}</p>
                                    <p>{parse(paragraph5.text2)}</p>
                                    {(!!paragraph5.text3) ? (<p>{parse(paragraph5.text3)}</p>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {(!!paragraph6.title) ? (
            <div className="hero solutionPagePart6">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <h3>{paragraph6.title}</h3>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-3">
                                <p>{parse(paragraph6.text1)}</p>
                                <p>{parse(paragraph6.text2)}</p>
                            </div>
                            <div className="column is-7">
                                <div className="box">
                                    <p>{parse(paragraph6.text3)}</p>
                                    <p>{parse(paragraph6.text4)}</p>
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

SolutionPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    paragraph1: PropTypes.object,
    paragraph2: PropTypes.object,
    paragraph3: PropTypes.object,
    paragraph4: PropTypes.object,
    paragraph5: PropTypes.object,
    paragraph6: PropTypes.object,
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
                paragraph1={page.frontmatter.paragraph1}
                paragraph2={page.frontmatter.paragraph2}
                paragraph3={page.frontmatter.paragraph3}
                paragraph4={page.frontmatter.paragraph4}
                paragraph5={page.frontmatter.paragraph5}
                paragraph6={page.frontmatter.paragraph6}
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
                paragraph1 {
                    title1
                    title2
                    text
                    img
                }
                paragraph2 {
                    img
                    text1part1
                    text1part2
                    text2part1
                    text2part2
                    text3
                }
                paragraph3 {
                    img
                    title
                    text0
                    subtitle
                    text1
                    text2
                    text3
                }
                paragraph4 {
                    img
                    title
                    subtitle1
                    subimg
                    text1
                    subtitle2
                    text2
                    text3
                }
                paragraph5 {
                    img
                    title
                    subtitle
                    text1
                    text2
                    text3
                }
                paragraph6 {
                    title
                    text1
                    text2
                    text3
                    text4
                }
                language
                slug
            }
        }
    }
`;