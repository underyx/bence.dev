module.exports = {
  siteMetadata: {
    title: "underyx",
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'underyx-me',
        short_name: 'underyx-me',
        start_url: '/',
        background_color: '#cfd3ca',
        theme_color: '#ebeed7',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: "UA-46190907-1" },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
  ],
}
