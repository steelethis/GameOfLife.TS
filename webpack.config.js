const path = require("path");

module.exports = {
    entry: "./src/app.ts",
    // Enable sourcemaps for debugging webpack's output
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}