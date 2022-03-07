/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/pokedex",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pokédex",
        short_name: "pokedex",
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
