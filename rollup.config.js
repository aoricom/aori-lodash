import node from "rollup-plugin-node-resolve";
import minify from 'rollup-plugin-minify-es';



export default {
  input: "node_modules/lodash-es/lodash.js",
  output: {
    name: "lodash",
    format: "esm",
    file: "dist/lodash.js"
  },
  plugins: [
    node({ jsnext: true }),
    minify()
    ]
};
