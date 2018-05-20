module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          loader: 'babel-loader'
        }
      ]
    }
  };
};
