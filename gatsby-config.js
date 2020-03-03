module.exports = {
  siteMetadata: {
    title: `Gatsby with wordpress`,
    description: `Test gatsby with wordpress cms`,
    author: `@weyandres`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`, // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: [`/all.scss`] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-psl-2019.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl will need to be updated with your WordPress source
        baseUrl: `pslpruebas.com/elementor`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options:
            {
              baseUrl: `pslpruebas.com/elementor`,
              protocol: `http`
            }
          }
        ],
        includedRoutes: [
          `**/categories`,
          `**/posts`,
          `**/pages`,
          `**/media`,
          `**/tags`,
          `**/taxonomies`,
          `**/users`,
        ],
        keepMediaSizes: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
