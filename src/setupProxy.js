const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/careers',
    createProxyMiddleware({
      target: 'http://dev.codeleap.co.uk',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};