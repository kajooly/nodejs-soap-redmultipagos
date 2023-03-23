const soap = require('soap');

const url = 'https://mi.redmultipagos.com.mx:443/Testserviciowebsoap/Listener?wsdl';

const args = {
    HubSayHello: 'Hi Client: 127.0.0.1'
};

soap.createClient(url, function(err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.helloHub(args, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });
});