const soap = require('soap');

const url = 'https://mi.redmultipagos.com.mx:443/Testserviciowebsoap/Listener?wsdl';
const args = {
    user: 'pruebas',
    operator: 'Pruebas123',
    idProduct: "RMPSERV109001",
    numberAccount: '12345678901',
    amount: '123',
    typeNotification: 2,
    notificationAccount: 'jm@comsis.mx',
    clientFolio: "b9999",
    additionalInformation: 'addd  inff',
};

soap.createClient(url, function(err, client) {
    if (err) {
        console.error(err);
    } else {
        client.getServiceOrder(args, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    }
});