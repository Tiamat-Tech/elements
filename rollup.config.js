/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const { root } = path.parse(process.cwd());
const external = (id) => !id.startsWith('.') && !id.startsWith(root);

const createBabelConfig = require('./babel.config');
const extensions = ['.js', '.ts', '.tsx'];

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
    // types
    createDeclarationConfig('src/index.ts', 'dist'),

    // index
    createESMConfig('src/index.ts', 'dist/index.js'),
    createIIFEConfig('src/index.ts', 'dist/index.iife.js'),
    createCommonJSConfig('src/index.ts', 'dist/index.cjs.js'),

    // carousel
    createESMConfig('src/carousel.ts', 'dist/carousel.js'),
    createIIFEConfig('src/carousel.ts', 'dist/carousel.iife.js'),
    createCommonJSConfig('src/carousel.ts', 'dist/carousel.cjs.js'),

    // disclosure
    createESMConfig('src/disclosure.ts', 'dist/disclosure.js'),
    createIIFEConfig('src/disclosure.ts', 'dist/disclosure.iife.js'),
    createCommonJSConfig('src/disclosure.ts', 'dist/disclosure.cjs.js'),

    // accordion
    createESMConfig('src/accordion.ts', 'dist/accordion.js'),
    createIIFEConfig('src/accordion.ts', 'dist/accordion.iife.js'),
    createCommonJSConfig('src/accordion.ts', 'dist/accordion.cjs.js'),
  ];
};
