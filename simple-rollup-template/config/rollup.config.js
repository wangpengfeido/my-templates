import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import eslint from "@rollup/plugin-eslint";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
    },
    {
      file: "es/index.js",
      format: "cjs",
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    eslint({
      throwOnError: true,
    }),
    typescript(),
  ],
};
