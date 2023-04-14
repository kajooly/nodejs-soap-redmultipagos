const soap = require('soap');
const mpc = require('../config'); // Multipagos Config


exports.GetServiceOrder = (args) => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
        } else {
            client.getServiceOrder(args, function(err, result) {
                if (err) {
                    console.error(err);
                    rej(err);
                } else {
                    console.log(result);
                    res(result);
                }
            });
        }
    })
});