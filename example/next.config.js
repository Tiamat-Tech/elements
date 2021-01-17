module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.ts(x?)$/,
			use: [ 'ts-loader' ]
		});

		return config;
	}
};
