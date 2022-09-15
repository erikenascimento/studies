const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./app/src/js/app.js", //localização do arquivo a ser copiado
  output: {
    filename: "bundle.js", //nome do arquivo js que listará as dependencias
    path: path.resolve(__dirname, "app/dist"), //caminho de destino da copia (dinâmico)
    clean: true, //limpa a pasta especificada dos arquivos da build antiga
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/src/app.html",
      filename: "app.html",
      hash: true, //utilizado para identificar a bundle guardada em cache com uma hash
    }),
  ],
};
