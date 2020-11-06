module.exports = {
  siteMetadata: {
    title: `Ankit Panchal | ankitious`,
    description: `Ankit Panchal | ankitious`,
    author: `ankitious`,
    keywords: [
      "ankitious",
      "ankitious dev",
      "dev ankit",
      "ankit blog",
      "ankit panchal",
      "react blogs",
      "javascript blogs",
      "frontend blogs",
    ],
    ogType: "website",
    ogUrl: "https://www.ankitious.dev",
    lang: "en",
    image:
      "https://pbs.twimg.com/profile_images/1314486815693271040/OLWbJLIw_400x400.jpg",
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ankit Panchal`,
        short_name: `Ankit Panchal`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#235bc1`,
        display: `minimal-ui`,
        icon: `src/assets/profilePic.png`,
        theme_color_in_head: false, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
