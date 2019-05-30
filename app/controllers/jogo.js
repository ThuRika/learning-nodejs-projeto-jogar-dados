var model = require('../models/Jogo');

var jogoModel = undefined;

module.exports.iniciar = function (application, req, res){

	console.log('controller: iniciar');
	console.log('controller: cria instancia de jogo');
	
	jogoModel = new model.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');

}