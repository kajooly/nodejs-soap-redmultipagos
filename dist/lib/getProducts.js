const soap = require('soap');

const url = 'https://mi.redmultipagos.com.mx:443/Testserviciowebsoap/Listener?wsdl';

const args = {
    user: 'pruebas',
    operator: 'Pruebas123'
};

soap.createClient(url, function(err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.getProducts(args, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result, result.listProducts.product);
    });
});