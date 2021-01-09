module.exports = (api, targets) => {
  if (api.cache) {
    api.cache(true);
  }

  return {
    babelrc: false,
    ignore: ['./node_modules'],
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: false,
          targets: targets,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-react-jsx',
      ['@babel/plugin-transform-typescript', { isTSX: true }],
    ],
  };
};
