const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { //Path replacement
              '^/api/': '', //  AXIOS Access / API2 == Target + / API
            }
        })
    );
};
