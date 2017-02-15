import path from 'path';
import webpack from 'webpack';
import config from './config.json';

import pckg from './package.json';

const { dependencies } = pckg;
const vendor = Object.keys(dependencies || {});
const debug = process.env.NODE_ENV !== 'production';
const { npm_package_config_port: port } = process.env;
const entryPath = path.resolve('./src', 'modules');

const files = () => {
  const names = {};
  config.modules.forEach((module) => {
    names[module] = path.join(entryPath, module, 'index.js');
  });
  return names;
};

const entryPoints = Object.assign(
  {
    vendor,
  },
  files(),
);

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js',
    minChunks: 2,
    chunks: Object.keys(entryPoints).filter(key => key !== 'vendor'),
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
];

export default {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: entryPoints,
  output: {
    path: path.resolve(debug ? 'dist' : 'public', 'assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js',
  },
  watchOptions: {
    poll: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port,
  },
  plugins: debug ? plugins : [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      PRODUCTION: !debug,
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx$/,
      include: [
        path.resolve(__dirname, 'src', 'modules'),
      ],
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
