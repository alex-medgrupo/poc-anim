import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import styles from 'rollup-plugin-styles';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  input: 'src/scripts/index.ts',
  inlineDynamicImports: true,
  output: {
    file: isProduction ? 'dist/bundle.js' : 'src/assets/bundle.js',
    format: 'esm',
    sourcemap: isProduction ? 'true' : 'inline',
  },
  plugins: [nodeResolve(), styles(), typescript()].filter(Boolean),
});
