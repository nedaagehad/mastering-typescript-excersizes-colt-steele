import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin"

const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.ts",
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
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body"
    })]
}

export default config;