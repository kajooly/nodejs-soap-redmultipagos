const HelloHub = require('nodejs-soap-redmultipagos/dist/lib/helloHub.js');
const GetProducts = require('nodejs-soap-redmultipagos/dist/lib/getProducts.js');
const GetOrder = require('nodejs-soap-redmultipagos/dist/lib/getOrder.js');
const DoOrder = require('nodejs-soap-redmultipagos/dist/lib/doOrder.js');
const CheckOrder = require('nodejs-soap-redmultipagos/dist/lib/checkOrder.js');
const GetServiceOrder = require('nodejs-soap-redmultipagos/dist/lib/getServiceOrder.js');
const DoServiceOrder = require('nodejs-soap-redmultipagos/dist/lib/doServiceOrder.js');
const CheckServiceOrder = require('nodejs-soap-redmultipagos/dist/lib/checkServiceOrder.js');
const AvailableBalance = require('nodejs-soap-redmultipagos/dist/lib/availableBalance.js');
const GetConciliation = require('nodejs-soap-redmultipagos/dist/lib/getConciliation.js');

module.exports = {
    Test: HelloHub,
    Products: {
        Get: GetProducts,
        Order: GetOrder,
        Do: DoOrder,
        Check: CheckOrder
    },
    Services: {
        Get: GetServiceOrder,
        Do: DoServiceOrder,
        Check: CheckServiceOrder
    },
    Admin: {
        Balance: AvailableBalance,
        Dist: null, //distriAvailableBalance,
        Conciliation: GetConciliation
    }
};