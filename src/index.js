const babel = require("@babel/core");

module.exports = {
  process(src, filename, transformOptions) {
    const options = {
      babelrc: false,
      compact: false,
      plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
      // Ensures that babel respects original source maps. This allows to use
      // already transpiled JavaScript source code and enables correct stack
      // traces when tests fail. 
      inputSourceMap: true,

      // To make sure filenames are accurate
      filename: filename,
      cwd: transformOptions.cwd,
    };

    const transformResult = babel.transform(src, options);
    if (transformResult) {
      const { code, map } = transformResult;
      if (typeof code === 'string') {
        return { code, map };
      }
    }

    return src;
  }
};
