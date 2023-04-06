const soap = require('soap');

const url = 'https://mi.redmultipagos.com.mx:443/Testserviciowebsoap/Listener?wsdl';

const args = {
    user: 'pruebas',
    operator: 'Pruebas123',
    idProduct: 'RMP100',
    numberAccount: '1234567890',
    clientFolio: 'A9999'
};

soap.createClient(url, function(err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.getOrder(args, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });
});