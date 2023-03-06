import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-ts';
import jsx from 'acorn-jsx';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
    input: 'components/index.ts',
    output: {
        dir: 'dist'
    },
    plugins: [typescript(), postcss()],
    acornInjectPlugins: [jsx()],
    external: ['react/jsx-runtime']
});
