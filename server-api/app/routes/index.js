/* Código simplório, apenas para fornecer o serviço para a aplicação */

const api = require('../api');

module.exports  = function(app) {
        
    app.route('/dados')
        .get(api.dados);          
};