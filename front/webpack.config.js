const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

const commonConfig = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chat app",
      template: path.join(PATHS.app, "template.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  }
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: "errors-only",
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      proxy: {
        "/api/**": "http://localhost:3000/",
        "/socket.io/**": "ws://localhost:8000/"
      }
    }
  };

  return Object.assign({}, commonConfig, config);
};

module.exports = env => {
  if (env === "production") {
    return productionConfig();
  }

  return developmentConfig();
};
