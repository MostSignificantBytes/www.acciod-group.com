const _ = require('lodash')
const path = require('path')
const slugHandler = require('./src/api/slugHandler')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
    const { createPage, createRedirect } = actions

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
