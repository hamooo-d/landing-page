module.exports = {
  siteMetadata: {
    title: 'Landing Page',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Landing page',
        short_name: 'LandingPAge',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#97266D`,
      },
    },
  ],
}
