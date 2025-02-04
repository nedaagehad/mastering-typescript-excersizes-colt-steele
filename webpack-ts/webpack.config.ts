import webpack from 'webpack';
import path from 'path';
// necessary to get rid of ts error when adding devServer to config
// webpack-dev-server can bundle files in momory without really generating them in the dist folder for development purposes only.
import "webpack-dev-server"

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    // webpack-dev-server config
    devServer: {
        static: {
            directory: path.join(__dirname, "./")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        //for serving using webpack-dev-server
        publicPath: "/dist"
    }
}

export default config;