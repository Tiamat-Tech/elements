const path = require('path');

// Create aliases for source directories and disable source maps on production builds
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
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
