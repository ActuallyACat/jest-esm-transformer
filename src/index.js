const babel = require("@babel/core");

module.exports = {
  process(src) {
    const options = {
      babelrc: false,
      compact: false,
      plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")]
    };

    return babel.transform(src, options).code;
  }
};
