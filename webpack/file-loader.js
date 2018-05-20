module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'img/[name]-[hash:4].[ext]'
          }
        },

        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name]-[hash:4].[ext]'
          }
        }
      ]
    }
  };
};
