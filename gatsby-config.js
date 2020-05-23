require("dotenv").config()

module.exports = {
  siteMetadata: {
    links: {
      contact: "mailto:contact@me.com",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    locale: "en",
    title: "Webinars",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `chivo\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            overlay: {
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: "keyqeVpmWnBtrt0zZ",
        tables: [
          {
            baseId: "appjOODx5k9YDok36",
            tableName: "webinars",
            mapping: { image: "fileNode" },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webinars`,
        short_name: `Webinars`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4299e1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: false,
        printRejected: false,
        rejected: true,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-164396662-1",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
  pathPrefix: "/webinars",
}
