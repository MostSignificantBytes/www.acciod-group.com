import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import parse from 'html-react-parser';

import Layout from "../components/Layout";
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

    const paragraph2Image = getImage(paragraph2.image) || paragraph2.image;

    return (
        <div>

            <div className="hero indexSlider1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="has-text-left">
                                    <h1 className="is-size-3 has-text-white mb-5">{slider1.title}</h1>
                                    <div className="has-text-right mb-5">
                                        <a href="#" className="mr-2 is-size-3 has-text-white">
                                            <span>&lt;</span>
                                        </a>
                                        <a href="#" className="is-size-3 has-text-white">
                                            <span>&gt;</span>
                                        </a>
                                    </div>
                                    <p className="subtitle is-size-4 has-text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde! Voluptate consectetur quam expedita.</p>
                                    <div className="has-text-left mb-5">
                                        <Link className="button is-white is-large has-text-black" to={(language === 'fr' ? '' : '/' + language) + "/solution/itfm/"}>
                                            {slider1.button}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="has-text-centered">
                                    <h3 className="is-size-5">{paragraph1.title}</h3>
                                    <p className="is-size-4 has-text-primary">{paragraph1.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph2">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="box has-text-centered">
                                    <p className="is-size-5">{paragraph2.title}</p>
                                    <p className="has-text-weight-bold is-size-3 mb-4">{paragraph2.subtitle}</p>
                                    <div className="mb-4">
                                        <img src="/img/icons8-change-64.png" alt={paragraph2.subtitle} className="image is-inline-block"/>
                                    </div>
                                    <p>{paragraph2.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns is-vcentered">
                                    <div className="column is-narrow">
                                        <a href="#" className="has-text-primary is-size-3">&lt;</a>
                                    </div>
                                    <div className="column has-text-centered">
                                        <div className="mb-3">
                                            <img src="https://placehold.co/120x80" alt="Slider 2 image" className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-2">
                                            <p className="title is-size-5 has-text-weight-bold mb-1">Slider 2 title</p>
                                        </div>
                                        <div>
                                            <p className="has-text-grey">Slider 2 text</p>
                                        </div>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="#" className="has-text-primary is-size-3">&gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph3">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10 has-text-centered">
                                <Link className="button is-primary has-text-white" to={(language === 'fr' ? '' : '/' + language) + "/product/why-kp-one/"}>
                                    {paragraph3.button}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexBlurb1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns is-centered">
                                    <div className="column is-half">
                                        <h2 className="is-size-3 has-text-centered mb-6">{blurb1.title}</h2>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <img src="/img/icons8-gantt-chart-80.png" alt={blurb1.elements[0].title} className="mb-4"/>
                                            <h4 className="is-size-5 mb-3">{blurb1.elements[0].title}</h4>
                                            <hr className="my-3"/>
                                            <p className="mb-3 has-text-justified">{parse(blurb1.elements[0].text1)}</p>
                                            <p className="has-text-justified">{parse(blurb1.elements[0].text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <img src="/img/icons8-outils-administratifs-filled-100.png" alt={blurb1.elements[1].title} className="mb-4"/>
                                            <h4 className="is-size-5 mb-3">{blurb1.elements[1].title}</h4>
                                            <hr className="my-3"/>
                                            <p className="mb-3 has-text-justified">{parse(blurb1.elements[1].text1)}</p>
                                            <p className="has-text-justified">{parse(blurb1.elements[1].text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <img src="/img/icons8-scenic-view-filled-100-2.png" alt={blurb1.elements[2].title} className="mb-4"/>
                                            <h4 className="is-size-5 mb-3">{blurb1.elements[2].title}</h4>
                                            <hr className="my-3"/>
                                            <p className="mb-3 has-text-justified">{parse(blurb1.elements[2].text1)}</p>
                                            <p className="has-text-justified">{parse(blurb1.elements[2].text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <img src="/img/icons8-structure-des-prix-filled-100.png" alt={blurb1.elements[3].title} className="mb-4"/>
                                            <h4 className="is-size-5 mb-3">{blurb1.elements[3].title}</h4>
                                            <hr className="my-3"/>
                                            <p className="mb-3 has-text-justified">{parse(blurb1.elements[3].text1)}</p>
                                            <p className="has-text-justified">{parse(blurb1.elements[3].text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <img src="/img/icons8-canaux-de-vente-filled-100.png" alt={blurb1.elements[4].title} className="mb-4"/>
                                            <h4 className="is-size-5 mb-3">{blurb1.elements[4].title}</h4>
                                            <hr className="my-3"/>
                                            <p className="mb-3 has-text-justified">{parse(blurb1.elements[4].text1)}</p>
                                            <p className="has-text-justified">{parse(blurb1.elements[4].text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="box has-text-centered">
                                            <p className="mb-4">{blurb1.elements[5].text1}</p>
                                            <Link className="button is-primary is-outlined mb-4" to={(language === 'fr' ? '' : '/' + language) + "/solution/how-kp-one-helps-you/"}>
                                                {blurb1.elements[5].button1}
                                            </Link>
                                            <p className="mb-4">{blurb1.elements[5].text2}</p>
                                            <Link className="button is-primary is-outlined mb-4" to={(language === 'fr' ? '' : '/' + language) + "/product/features/"}>
                                                {blurb1.elements[5].button2}
                                            </Link>
                                            <p className="mb-4">{blurb1.elements[5].text3}</p>
                                            <Link className="button is-primary is-outlined" to={(language === 'fr' ? '' : '/' + language) + "/product/when-to-start/"}>
                                                {blurb1.elements[5].button3}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph4">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-10">
                                <h2 className="is-size-3 has-text-white">{paragraph4.title1}</h2>
                                <h2 className="is-size-3 has-text-white">{paragraph4.title2}</h2>
                            </div>
                        </div>
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-6">
                                <div className="box">
                                    <p>{paragraph4.subtitle1}</p>
                                    <h3 className="mb-4">{paragraph4.subtitle2}</h3>
                                    <div className="mb-4">
                                        <img src="/img/icons8-comptabilitA-64.png" alt={paragraph4.subtitle} className="image is-inline-block"/>
                                    </div>
                                    <p>{paragraph4.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexBlurb2">
                <div classname="hero-body">
                    <div className="container">
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-6">
                                <h1>{paragraph5.title}</h1>
                                <p>{paragraph5.text1}</p>
                                <h2>{paragraph5.text2}</h2>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns is-multiline">
                                    <div className="column is-third">
                                        <div className="mb-4">
                                            <h3 className="title is-size-4">{blurb2.elements[0].title}</h3>
                                            <p>{parse(blurb2.elements[0].text)}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="title is-size-4">{blurb2.elements[2].title}</h3>
                                            <p>{parse(blurb2.elements[2].text)}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="title is-size-4">{blurb2.elements[4].title}</h3>
                                            <p>{parse(blurb2.elements[4].text)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-third">
                                        <div className="mb-4">
                                            <h3 className="title is-size-4">{blurb2.elements[1].title}</h3>
                                            <p>{parse(blurb2.elements[1].text)}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="title is-size-4">{blurb2.elements[3].title}</h3>
                                            <p>{parse(blurb2.elements[3].text)}</p>
                                        </div>
                                        <div className="box">
                                            <h4>{blurb2.elements[5].title}</h4>
                                            <p>{parse(blurb2.elements[5].text)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-third">
                                        <figure className="image">
                                            <img className="image is-fullwidth" src="/img/181016_122027.png" alt="{paragraph5.title}"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="hero indexParagraph6">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10 has-text-centered">
                                <Link className="button is-primary is-outlined has-background-black is-size-3" to={(language === 'fr' ? '' : '/' + language) + "/contact/"}>
                                    {paragraph6.button}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6">
                                <div className="has-text-centered">
                                    <h3 className="is-size-3 mb-3">{paragraph7.title}</h3>
                                    <p>{paragraph7.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph8">
                <div classname="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-two-thirds has-text-white">
                                        <div className="mb-4 mt-4">
                                            <h3 className="is-size-4">{paragraph8.title}</h3>
                                        </div>
                                        <div className="mb-4">
                                            <p>{paragraph8.text1}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p>{parse(paragraph8.text2)}</p>
                                        </div>
                                    </div>
                                    <div className="column is-third">
                                        <figure className="image">
                                            <img className="image is-fullwidth" src="/img/idee495.png" alt="{paragraph8.title}"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph9">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-4">
                                        <div className="has-text-left">
                                            <p>{paragraph9.text}</p>
                                        </div>
                                    </div>
                                    <div className="column is-8 has-text-centered">
                                        <Link className="button is-primary is-outlined has-background-black" to={(language === 'fr' ? '' : '/' + language) + "/"}>
                                            {paragraph9.button}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-8">
                                <div className="has-text-centered">
                                    <h3 className="is-size-3">{paragraph10.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexVideo1">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-full">
                                <div className="video-container">
                                    <iframe src="https://www.youtube.com/embed/-bHnJuHhaeA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexBlurb3">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-4">
                                <div className="columns">
                                    <div className="column">
                                        <div className="box p-6">
                                            <h4>{blurb3.title1}</h4>
                                            <h4>{blurb3.title2}</h4>
                                            <h4>{blurb3.title3}</h4>
                                            <h4>{blurb3.title4}</h4>
                                        </div>
                                        <p>&#8964;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column">
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered has-text-centered">
                            <div className="column is-10">
                                <div className="columns is-centered">
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-coins-48-2.png" alt={blurb3.elements[0].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[0].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-increase-50.png" alt={blurb3.elements[1].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[1].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-goal-48.png" alt={blurb3.elements[2].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[2].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-combo-chart-48.png" alt={blurb3.elements[3].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[3].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-tags-48.png" alt={blurb3.elements[4].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[4].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-speed-48.png" alt={blurb3.elements[5].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[5].title}</p>
                                        </div>
                                    </div>
                                    <div className="column is-2">
                                        <div className="mb-4">
                                            <img src="/img/icons8-gold-bars-48-2.png" alt={blurb3.elements[6].title} className="image is-inline-block"/>
                                        </div>
                                        <div className="mb-4">
                                            <p>{blurb3.elements[6].title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero indexParagraph11">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns">
                                    <div className="column is-8">
                                        <div className="has-text-left">
                                            <h3>{paragraph11.title}</h3>
                                            <p>{paragraph11.text1}</p>
                                            <p>{paragraph11.text2}</p>
                                        </div>
                                    </div>
                                    <div className="column is-4 has-text-centered">
                                        <Link className="button is-primary" to={(language === 'fr' ? '' : '/' + language) + "/solution/itfm/"}>
                                            {paragraph11.button}
                                        </Link>
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

IndexPageTemplate.propTypes = {
    language: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    slider1: PropTypes.object,
    paragraph1: PropTypes.object,
    paragraph2: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string,
    }),
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
                    subtitle
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
                        title
                        text1
                        button1
                        text2
                        button2
                        text3
                        button3
                    }
                }
                paragraph4 {
                    title1
                    title2
                    subtitle1
                    subtitle2
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
                    button
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
