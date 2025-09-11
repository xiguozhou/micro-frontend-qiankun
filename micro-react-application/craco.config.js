const path = require('path');

module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.headers = {
      ...devServerConfig.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    };
    // required when served as micro-frontend asset
    devServerConfig.allowedHosts = 'all';
    return devServerConfig;
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = 'microReactApp';
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.chunkLoadingGlobal = 'webpackJsonp_microReactApp';
      webpackConfig.output.globalObject = 'window';
      // ensure asset publicPath is controlled by qiankun at runtime
      webpackConfig.output.publicPath = 'auto';
      return webpackConfig;
    },
  },
};


