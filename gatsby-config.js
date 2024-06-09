/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "qJAQaWJtLwjTj1czULmmpF",
        token: "NDzNAshBgiaRQsM8g3ZtqsmtLt5l2aojiRDU2SwPScbdx9mJCxQq6o6UvTQk0zpNN1LkJFoZR67CYyG1LQ",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
