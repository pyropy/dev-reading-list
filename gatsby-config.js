require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Dev reading list`,
    siteHeadline: `Dev reading list`,
    siteUrl: `https://devreadinglist.com`,
    siteDescription: `Curated weekly reading list for developers. Weekly reading list about development, technology trends, programming books and articles.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@pyropy_`,
    siteTitleAlt: `Weekly reading list for devs.`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {

        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/pyropy_`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/stankovicsrdjan/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev reading list`,
        short_name: `dev-reading-list`,
        description: `Dev reading list is blog created with motivation to supply developers with fresh reading ides. These readings include books, papers and articles. If you either want to learn something new or pick-up coding you've came to the right spot.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
