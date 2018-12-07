module.exports = {
    entry: './entry/script.js',
    output: {
        path: `${__dirname}/output`,
        filename: 'bundle.js'
    },
    watch: true,
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}