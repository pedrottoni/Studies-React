const next = require('next');
const express = require('express');

const WooCommerceAPI = require('woocommerce-api');
const WooCommerce = new WooCommerceAPI({
    url: 'http://localhost:3000/wordpress',
    consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    wpAPI: true,
    version: 'wc/v1'
  });

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('*',(req, res) => {
            return handle(req, res)
        });

        server.listen(port, err => {
            if (err) {
                throw err;
            }
            console.log('Ready on ${port}');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });