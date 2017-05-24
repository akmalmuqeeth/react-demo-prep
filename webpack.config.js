const path = require('path')

let config = {
	context: __dirname,
	entry: './index.js',
	// for uglify(production), un-comment devtool
	//devtool: 'eval',
	output : {
		path : path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},
	resolve : {
		extensions: ['.js', '.json']
	},
	stats : {
		colors : true,
		reasons : true,
		chunks: true
	},
	module : {
		rules : [
			{
				exclude: /node_modules/,
				test:  /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
}

module.exports = config