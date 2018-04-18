const path = require('path');

module.exports = {
    entry: './src/plugins.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: path.join('js', 'plugins.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
