module.exports = {
    siteMetadata: {
        title: "MSB",
        description: "Most Significant Bytes - Network Neat Work",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    indentedSyntax: true,
                },
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        `gatsby-plugin-image`,
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads",
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.msbytes.com',
                sitemap: 'https://www.msbytes.com/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `MSB`,
                short_name: `MSB`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#003399`,
                display: `standalone`,
                icons: [
                    {
                        src: `img/maskable_icon_x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x128.png`,
                        sizes: `128x128`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                    {
                        src: `img/maskable_icon_x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                        purpose: `any maskable`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        "gatsby-plugin-netlify", // make sure to keep it last in the array
    ],
};
