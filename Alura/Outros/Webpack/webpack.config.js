const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

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
        use: [MiniCssExtractPlugin.loader, "css-loader"], //carrega o loader do mini-css-extract-plugin
      },
    ],
  },
  optimization: { //é aqui que o minimizer de css será configurado e não em plugins
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin()], //indica qual o minimizer a ser utilizado
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/src/app.html",
      filename: "app.html",
      hash: true, //utilizado para identificar a bundle guardada em cache com uma hash
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }), //disponibiliza o plugin e o renomeia como style.css ao invés do padrão main.css
  ],
};
