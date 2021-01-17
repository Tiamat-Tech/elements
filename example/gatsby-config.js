require('dotenv').config();

module.exports = {
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-postcss`],
  flags: {
    DEV_SSR: true,
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
};
