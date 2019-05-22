module.exports = {
    name: "triplanner",
    context: __dirname + "/src",
    entry: [
        './triPlanner.tsx'
    ],
    output: {
        filename: "triPlanner.js",
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /.tsx?$/, loader: "ts-loader" },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
              },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /.js$/, loader: "source-map-loader" },
        ]
    }
};