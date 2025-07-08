import * as React from "react";
import { Helmet } from "react-helmet";
import { kebabCase } from "lodash";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    
    var language = children.props.language;
    if(!language) {
        language = 'fr'
    }

    var slug;
    if (children.props.slug) {

        slug = children.props.slug;

        var slugParts = slug.split('+');
        var slugHandled;

        slugParts.forEach((slugPart) => {
            slugPart = kebabCase(slugPart);
        })
        
        slugHandled = slugParts.join('/');

        if (slugHandled !== '/') {
            slugHandled = slugHandled + '/';
        }

        if (language !== 'fr') {
            slugHandled = '/' + language + slugHandled;
        }

        slug = slugHandled;

    } else if (!slug && children._owner) {

        slug = children._owner.key;

    } else if(!slug) {

        slug = '/';

    }

    var canonicalURL = "https://www.acciod-group.com" +  slug;
    var alternateURLEN;
    var alternateURLFR;

    if (language === 'fr') {
        alternateURLEN = "https://www.acciod-group.com/en" +  slug;
        alternateURLFR = "https://www.acciod-group.com" +  slug;
    } else {
        alternateURLEN = "https://www.acciod-group.com/en" +  slug.replace("/" + language, "");
        alternateURLFR = "https://www.acciod-group.com" +  slug.replace("/" + language, "");
    }

    return (
        <div>
            <Helmet>
                <html lang={language} data-theme="light" className="theme-light"/>
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="canonical" href={canonicalURL} />
                <link rel="alternate" href={alternateURLEN} hreflang="en" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-AU" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-BZ" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-CA" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-CB" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-GB" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-IE" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-JM" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-NZ" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-PH" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-TT" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-US" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-ZA" />
                <link rel="alternate" href={alternateURLEN} hreflang="en-ZW" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-BE" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-CA" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-CH" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-FR" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-LU" />
                <link rel="alternate" href={alternateURLFR} hreflang="fr-MC" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix("/")}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}img/og-image.png`}
                />
            </Helmet>
            <Navbar language={language} slug={slug}/>
            <div>{children}</div>
            <Footer language={language}/>
        </div>
    );
};

export default TemplateWrapper;
