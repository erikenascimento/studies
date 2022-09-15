const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app/dist"),
    clean: true, //limpa a pasta especificada dos arquivos da build antiga
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/src/app.html",
      filename: "app.html",
      hash: true, //utilizado para identificar a bundle guardada em cache com uma hash
    }),
  ],
};
