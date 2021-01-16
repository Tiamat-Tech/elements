import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const { root } = path.parse(process.cwd());
const external = (id) => !id.startsWith('.') && !id.startsWith(root);

const createBabelConfig = require('./babel.config');
const extensions = ['.js', '.ts', '.tsx'];
const browsers = {
  browsers: [
    'last 3 firefox major versions',
    'last 3 and_ff major versions',
    'last 3 chrome major versions',
    'last 3 and_chr major versions',
    'last 3 edge major versions',
    'last 2 safari major versions',
    'last 2 ios_saf major versions',
  ],
};

const getBabelOptions = (targets) => ({
  ...createBabelConfig({ env: (env) => env === 'build' }, targets),
  extensions,
});

const createDeclarationConfig = (input, output) => {
  return {
    input,
    output: {
      dir: output,
    },
    external,
    plugins: [typescript({ declaration: true, outDir: output })],
  };
};

const createESMConfig = (input, output) => {
  return {
    input,
    output: { file: output, format: 'esm' },
    external,
    plugins: [
      resolve({ extensions }),
      typescript({
        cacheDir: '.rollup.tscache',
      }),
      babel(getBabelOptions({ node: 12 })),
      sizeSnapshot(),
    ],
  };
};

const createCommonJSConfig = (input, output) => {
  return {
    input,
    output: { file: output, format: 'cjs', exports: 'named' },
    external,
    plugins: [
      resolve({ extensions }),
      typescript(),
      babel(getBabelOptions(browsers)),
      sizeSnapshot(),
    ],
  };
};

const createIIFEConfig = (input, output, globalName) => {
  return {
    input,
    output: {
      file: output,
      format: 'iife',
      exports: 'named',
      name: globalName,
      globals: {
        react: 'React',
      },
    },
    external,
    plugins: [
      resolve({ extensions }),
      typescript(),
      babel(getBabelOptions(browsers)),
      sizeSnapshot(),
    ],
  };
};

export default () => {
  return [
    // index + types
    createDeclarationConfig('src/index.ts', 'dist'),
    createESMConfig('src/index.ts', 'dist/index.js'),
    createIIFEConfig('src/index.ts', 'dist/index.iife.js'),
    createCommonJSConfig('src/index.ts', 'dist/index.cjs.js'),

    // carousel
    createESMConfig('src/carousel.ts', 'dist/carousel.js'),
    createIIFEConfig('src/carousel.ts', 'dist/carousel.iife.js'),
    createCommonJSConfig('src/carousel.ts', 'dist/carousel.cjs.js'),

    // hooks
    createESMConfig('src/hooks.ts', 'dist/hooks.js'),
    createIIFEConfig('src/hooks.ts', 'dist/hooks.iife.js'),
    createCommonJSConfig('src/hooks.ts', 'dist/hooks.cjs.js'),

    // utilities
    createESMConfig('src/utilities.ts', 'dist/utilities.js'),
    createIIFEConfig('src/utilities.ts', 'dist/utilities.iife.js'),
    createCommonJSConfig('src/utilities.ts', 'dist/utilities.cjs.js'),
  ];
};
