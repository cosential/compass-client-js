var path = require("path");
var webpack = require("webpack");
var zipFilesPlugin = require("webpack-archive-plugin");
var TypedocWebpackPlugin = require("typedoc-webpack-plugin");

var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'dist'),
}

var config = {
  mode: 'production',
  // These are the entry point of our library. We tell webpack to use
  // the name we assign later, when creating the bundle. We also use
  // the name to filter the second entry point for applying code
  // minification via UglifyJS
  entry: {
    'compass': [PATHS.entryPoint],
    'compass.min': [PATHS.entryPoint]
  },
  // The output defines how and where we want the bundles. The special
  // value `[name]` in `filename` tell Webpack to use the name we defined above.
  // We target a UMD and name it MyLib. When including the bundle in the browser
  // it will be accessible at `window.MyLib`
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'compass',
    umdNamedDefine: true
  },
  // Add resolve for `tsx` and `ts` files, otherwise Webpack would
  // only look for common JavaScript file extension (.js)
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // Activate source maps for the bundles in order to preserve the original
  // source when the user debugs the application
  devtool: 'source-map',
  plugins: [
    // Apply minification only on the second bundle by
    // using a RegEx on the name, which must end with `.min.js`
    // NB: Remember to activate sourceMaps in UglifyJsPlugin
    // since they are disabled by default!
    new zipFilesPlugin({
      entries: [
        { src: PATHS.bundles, dist: 'compass' }
      ],
      output: path.join(PATHS.bundles, 'compass'),
      format: 'zip'
    }),
    new TypedocWebpackPlugin({
      name: 'Cosential compass.js',
      mode: 'file',
      out: '../docs',
      module: 'commonjs',
      target: 'es2015',
      exclude: '**/node_modules/**/*.*,dist,lib,lib-esm,test,src/**/*.spec.ts,src/services/test-client-config.ts',
      experimentalDecorators: true,
      excludeExternals: true
    })
  ],
  module: {
    // Webpack doesn't understand TypeScript files and a loader is needed.
    // `node_modules` folder is excluded in order to prevent problems with
    // the library dependencies, as well as `__tests__` folders that
    // contain the tests for the library
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}

module.exports = config;