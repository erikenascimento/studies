const { Module } = require("webpack");

Module.exports = {
  entry: "./app/src/js/app.js", //delimita o arquivo principal que delimitará um caminho de expotação para todas as dependencias
  output: { //gera um unico bandle com todas os scripts dependentes
    filename: "bundle.js", //nome do arquivo do bundle
    path: "./app/dist", //diretório do bundle
  },
};
