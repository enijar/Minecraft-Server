const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src'),
            to: 'build',
        }])
    ]
};
