// The webpack file compiles JSX down to JS, and runs the server

module.exports = { // Export an object for configurations
    entry: './main.js', //Entry point
    output: { // Output object
        path: './', // Root path
        filename: 'index.js' // Bundled file
    },

    devServer: {
        inline: true, // Reload on the fly
        port: 3333 // Use port 3333
    },

    modules: { // Get loaders in place
        loaders: [
            {
                test: /\.js$/, // Test for .js files
                exclude: /node_modules/, //Don't want to compile that
                loader: 'babel', // Use the babel loader
                query: { 
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}