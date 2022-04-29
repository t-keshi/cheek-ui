import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"
import del from "rollup-plugin-delete"
import sourcemaps from "rollup-plugin-sourcemaps"
import styles from "rollup-plugin-styles"

const autoprefixer = require("autoprefixer")

const conf = {
  input: "src/index.tsx",
  output: {
    file: `dist/index.cjs.js`,
    format: "cjs",
    exports: "auto",
  },
  external: ["react", /@babel\/runtime/],
  plugins: [
    typescript(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    sourcemaps(),
    del({ targets: "dist/*" }),
    styles({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],
}

export default conf
