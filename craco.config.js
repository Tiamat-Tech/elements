const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          proposal: 'minimal',
        },
      ],
    ],
  },
  webpack: {
    alias: {
      'react-spring-elements': path.resolve(__dirname, 'src/library'),
      '~atoms': path.resolve(__dirname, 'src/atoms'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~context': path.resolve(__dirname, 'src/context'),
      '~data': path.resolve(__dirname, 'src/data'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~partials': path.resolve(__dirname, 'src/partials'),
      '~styles': path.resolve(__dirname, 'src/styles'),
      '~utilities': path.resolve(__dirname, 'src/utilities'),
    },
  },
};
