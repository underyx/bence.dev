module.exports = {
  siteMetadata: {
    title: 'underyx',
    siteUrl: 'https://underyx.me',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/images`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: `https://medium.com/feed/@underyx`,
        name: `Medium`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: '112R81',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-46190907-1' },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-preload-fonts`,
    'gatsby-transformer-remark',
    `gatsby-transformer-yaml`,
    'gatsby-transformer-sharp',
  ],
};
