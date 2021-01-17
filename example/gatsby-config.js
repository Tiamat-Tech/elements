require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Website title example`,
    description: `Website description example`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 70,
      },
    },
    `gatsby-transformer-sharp`,
  ],
  flags: {
    DEV_SSR: true,
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
};
