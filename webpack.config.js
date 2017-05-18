const webpack = require('webpack');
const path = require('path');
const env = require('dotenv').config();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './src/index.js',
        './sass/styles.scss'
    ],
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },
    module: {
    rules: [
	{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['react-hot-loader', 'babel-loader']
    },

    {
          test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
           }, {
               loader: "css-loader" // translates CSS into CommonJS
           }, {
               loader: "sass-loader" // compiles Sass to CSS
            }]

    }

        ]
    },


    devServer: {
        historyApiFallback: true,
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
     'process': {
       'env': {
         'API_KEY': JSON.stringify(process.env.API_KEY),
         'AUTH0_ID': JSON.stringify(process.env.AUTH0_ID)
       }
     }
   })
    ]
};