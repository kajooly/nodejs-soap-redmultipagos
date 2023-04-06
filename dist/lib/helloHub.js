const soap = require('soap');
const mpc = require('../config'); // Multipagos Config
exports.HelloHub = () => new Promise((res, rej) => {
    soap.createClient(mpc.Config.url, function(err, client) {
        if (err) {
            console.error(err);
            rej(err);
            return;
        }
        client.helloHub({
            HubSayHello: 'Hi Client: 127.0.0.1'
        }, function(err, result) {
            if (err) {
                console.error(err);
                rej(err);
                return;
            }
            res(result)
        });
    });
})