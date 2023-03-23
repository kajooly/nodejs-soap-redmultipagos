const soap = require('soap');

const url = 'https://mi.redmultipagos.com.mx:443/Testserviciowebsoap/Listener?wsdl';
const args = {
    user: 'pruebas',
    operator: 'Pruebas123',
    clientFolio: "b9999",
    feeProductIDValue: '1230'
};

soap.createClient(url, function(err, client) {
    if (err) {
        console.error(err);
    } else {
        client.doServiceOrder(args, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    }
});