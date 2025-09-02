const _ = require('lodash')
const path = require('path')
const slugHandler = require('./src/api/slugHandler')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
    const { createPage, createRedirect } = actions

    // Redirect of the former URLs to the new ones
    // FR
    createRedirect({
        fromPath: `/qui-sommes-nous-.html`,
        toPath: `/about`,
    })
    createRedirect({
        fromPath: `/mentions-legales.html`,
        toPath: `/legal-notice`,
    })
    createRedirect({
        fromPath: `/solution/itfm-itbm.html`,
        toPath: `/solution/itfm`,
    })
    createRedirect({
        fromPath: `/solution/total-cost-of-ownership-tco.html`,
        toPath: `/solution/tco`,
    })
    createRedirect({
        fromPath: `/solution/comment-kp-one-vous-aide.html`,
        toPath: `/solution/how-kp-one-helps-you`,
    })
    createRedirect({
        fromPath: `/produit/un-modele-de-donnees-unique.html`,
        toPath: `/product/data-model`,
    })
    createRedirect({
        fromPath: `/produit/un-referentiel-standard.html`,
        toPath: `/product/standard-repository`,
    })
    createRedirect({
        fromPath: `/produit/pourquoi-choisir-kp-one-.html`,
        toPath: `/product/why-kp-one`,
    })
    createRedirect({
        fromPath: `/produit/vos-gains-de-productivite-et-de-valeur.html`,
        toPath: `/product/productivity-and-value-benefits`,
    })
    createRedirect({
        fromPath: `/produit/fonctionnalites-de-kp-one.html`,
        toPath: `/product/features`,
    })
    createRedirect({
        fromPath: `/produit/quand-demarrer-avec-kp-one-.html`,
        toPath: `/product/when-to-start`,
    })
    // EN
    createRedirect({
        fromPath: `/en/about-us.html`,
        toPath: `/en/about`,
    })
    createRedirect({
        fromPath: `/en/legal-notice.html`,
        toPath: `/en/legal-notice`,
    })
    createRedirect({
        fromPath: `/en/solution/itfm.html`,
        toPath: `/en/solution/itfm`,
    })
    createRedirect({
        fromPath: `/en/solution/total-cost-of-ownership-it.html`,
        toPath: `/en/solution/tco`,
    })
    createRedirect({
        fromPath: `/en/solution/how-kp-one-helps-you.html`,
        toPath: `/en/solution/how-kp-one-helps-you`,
    })
    createRedirect({
        fromPath: `/en/product/an-unprecedented-data-model.html`,
        toPath: `/en/product/data-model`,
    })
    createRedirect({
        fromPath: `/en/product/a-standard-repository.html`,
        toPath: `/en/product/standard-repository`,
    })
    createRedirect({
        fromPath: `/en/product/why-choose-kp-one-.html`,
        toPath: `/en/product/why-kp-one`,
    })
    createRedirect({
        fromPath: `/en/product/productivity-and-value-benefits.html`,
        toPath: `/en/product/productivity-and-value-benefits`,
    })
    createRedirect({
        fromPath: `/en/product/kp-one-features.html`,
        toPath: `/en/product/features`,
    })
    createRedirect({
        fromPath: `/en/product/when-to-start-with-kp-one-.html`,
        toPath: `/en/product/when-to-start`,
    })

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            slug
                            language
                            templateKey
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach((edge) => {
            const id = edge.node.id
            const language = edge.node.frontmatter.language
            const templateKey = edge.node.frontmatter.templateKey
            const slug = slugHandler(
                language,
                templateKey,
                edge.node.frontmatter.slug
            )
            createPage({
                path: slug,
                tags: edge.node.frontmatter.tags,
                component: path.resolve(
                    `src/templates/${String(templateKey)}.js`
                ),
                // additional data can be passed via context
                context: {
                    id,
                    language,
                    templateKey,
                    slug,
                },
            })
        })

        // Tag pages:
        let tags = []
        let locales = []
        var language
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach((edge) => {
            if (_.get(edge, `node.frontmatter.tags`)) {
                language = _.get(edge, `node.frontmatter.language`);
                if(!tags[language]) {
                    locales = locales.concat(language)
                    tags[language] = []
                }
                tags[language] = tags[language].concat(edge.node.frontmatter.tags)
            }
        })
        
        // Eliminate duplicate tags
        tags.forEach((localizedTags) => {
            localizedTags = _.uniq(localizedTags)
        })

        // Make tag pages
        locales.forEach((locale) => {
            tags[locale].forEach((localizedTag) => {
                const tagPath = (locale === 'fr' ? '' : '/' + locale) + '/tags/' + _.kebabCase(localizedTag) + '/'

                createPage({
                    path: tagPath,
                    component: path.resolve(`src/templates/tag-page.js`),
                    context: {
                        tag: localizedTag,
                        language: locale,
                    },
                })
            })
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node) // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        createNodeField({
            name: `slug`,
            node,
            value: slugHandler(
                node.frontmatter.language,
                node.frontmatter.templateKey,
                node.frontmatter.slug
            ),
        })
    }
}
