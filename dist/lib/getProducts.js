const soap = require('soap');
const mpc = require('../config'); // Multipagos Config

exports.GetProducts = (args) => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
            return;
        }
        client.getProducts(args, function(err, result) {
            if (err) {
                console.error(err);
                rej(err);
                return;
            }
            //console.log(result, result.listProducts.product);
            res(result);
        });
    });
})