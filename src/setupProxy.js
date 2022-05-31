const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('app:-----');
  app.use(
    '/resource',
    createProxyMiddleware({
      target: 'http://10.251.140.123:8080/', // 修改完要重启
      changeOrigin: true,
    })
  );
};