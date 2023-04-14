const soap = require('soap');
const mpc = require('../config'); // Multipagos Config

exports.AvailableBalance = (args) => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
            return;
        }
        client.availableBalance(args, function(err, result) {
            if (err) {
                console.error(err);
                rej(err);
                return;
            }
            res(result)
        });
    });
});