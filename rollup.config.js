import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const createBabelConfig = require('./babel.config');

const { root } = path.parse(process.cwd());
const external = (id) => !id.startsWith('.') && !id.startsWith(root);
const extensions = [ '.js', '.ts', '.tsx' ];
const getBabelOptions = (targets) => ({
	...createBabelConfig({ env: (env) => env === 'build' }, targets),
	extensions
});

function createDeclarationConfig(input, output) {
	return {
		input,
		output: {
			dir: output
		},
		external,
		plugins: [ typescript({ declaration: true, outDir: output }) ]
	};
}

function createESMConfig(input, output) {
	return {
		input,
		output: { file: output, format: 'esm' },
		external,
		plugins: [
			resolve({ extensions }),
			typescript({
				cacheDir: '.rollup.tscache'
			}),
			babel(getBabelOptions({ node: 8 })),
			sizeSnapshot()
		]
	};
}
function createCommonJSConfig(input, output) {
	return {
		input,
		output: { file: output, format: 'cjs', exports: 'named' },
		external,
		plugins: [ resolve({ extensions }), typescript(), babel(getBabelOptions({ ie: 11 })), sizeSnapshot() ]
	};
}

function createIIFEConfig(input, output, globalName) {
	return {
		input,
		output: {
			file: output,
			format: 'iife',
			exports: 'named',
			name: globalName,
			globals: {
				react: 'React'
			}
		},
		external,
		plugins: [ resolve({ extensions }), typescript(), babel(getBabelOptions({ ie: 11 })), sizeSnapshot() ]
	};
}

export default () => {
	return [
		createDeclarationConfig('src/index.ts', 'dist'),
		createESMConfig('src/index.ts', 'dist/index.js'),
		createIIFEConfig('src/index.ts', 'dist/index.iife.js'),
		createCommonJSConfig('src/index.ts', 'dist/index.cjs.js'),
		createESMConfig('src/carousel.ts', 'dist/carousel.js'),
		createIIFEConfig('src/carousel.ts', 'dist/carousel.iife.js'),
		createCommonJSConfig('src/carousel.ts', 'dist/carousel.cjs.js')
	];
};
