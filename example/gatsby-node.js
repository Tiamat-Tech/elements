const path = require('path');

// Create aliases for source directories and disable source maps on production builds
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~atoms': path.resolve(__dirname, 'src/atoms'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~context': path.resolve(__dirname, 'src/context'),
        '~data': path.resolve(__dirname, 'src/data'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~partials': path.resolve(__dirname, 'src/partials'),
        '~utilities': path.resolve(__dirname, 'src/utilities'),
      },
    },
  });
  if (stage.startsWith('build-javascript')) {
    actions.setWebpackConfig({
      devtool: false,
      module: {
        rules: [
          {
            test: /react-spring/,
            sideEffects: true,
          },
        ],
      },
    });
  }
};
