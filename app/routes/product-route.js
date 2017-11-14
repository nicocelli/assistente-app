module.exports = function(app) {
    
    var produtController = require('../controllers/product-controller');
    
    app.get('/products', produtController.products);
    
};