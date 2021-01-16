module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ['ts-loader'],
    });

    return config;
  },
};
