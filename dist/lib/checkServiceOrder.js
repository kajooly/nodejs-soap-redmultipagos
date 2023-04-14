const soap = require('soap');
const mpc = require('../config'); // Multipagos Config

exports.CheckServiceOrder = (args) => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
        } else {
            client.checkServiceOrder(args, function(err, result) {
                if (err) {
                    console.error(err);
                    rej(err);
                } else {
                    res(result)
                }
            });
        }
    });
});