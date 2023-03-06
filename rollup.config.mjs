import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-ts';
import jsx from 'acorn-jsx';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: 'components/index.ts',
    output: {
        dir: 'dist'
    },
    plugins: [typescript(), postcss(), nodeResolve(), commonjs()],
    acornInjectPlugins: [jsx()],
    external: ['react/jsx-runtime']
});
