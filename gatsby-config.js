module.exports = {
  siteMetadata: {
    title: 'Webdev-nyc-air-quality',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: 'AIzaSyDhb1-mtflTfY5fbhCpuVOB_ph8329fKKQ',
        address: `New York, NY`
      }
    }
  ],
}