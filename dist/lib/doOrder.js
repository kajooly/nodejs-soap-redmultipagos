const soap = require('soap');
const mpc = require('../config'); // Multipagos Config

exports.DoOrder = (args) => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
            return;
        }
        client.doOrder(args, function(err, result) {
            if (err) {
                console.error(err);
                rej(err);
                return;
            }
            res(err);
        });
    });
})