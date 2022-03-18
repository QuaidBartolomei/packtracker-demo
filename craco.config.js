const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'json' })],
    stats: {
      assets: true,
      entrypoints: true,
      chunks: true,
      modules: true,
    },
  },
};
