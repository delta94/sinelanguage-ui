const proxy = require('http-proxy-middleware')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
    developMiddleware: app => {
        app.use(
            '/.netlify/functions/',
            proxy({
                target: 'http://localhost:9000',
                pathRewrite: {
                    '/.netlify/functions/': '',
                },
            })
        )
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-typescript-checker`,
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.GATSBY_CTF_SPACE_ID,
                accessToken: process.env.GATSBY_CTF_ACCESS_TOKEN,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: `@import "src/styles/settings.scss";`,
                includePaths: [`src/components`],
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    // todo: move to env var
                    'https://sinelanguage.us3.list-manage.com/subscribe/post?u=51b15e2b803b2c4e70392c5f9&amp;id=b5b38d278a',
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`),
            },
        },
    ],
}
