var model = require('../models/Jogo');

var jogoModel = undefined;

module.exports.iniciar = function (application, req, res){

	console.log('controller: iniciar');
	console.log('controller: cria instancia de jogo');	
	jogoModel = new model.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');

}

module.exports.novoLancamento = function(application, req, res){

	console.log('controller: novoLancamento');
	if (jogoModel){
		console.log('controller: pede para model fazer novoLancamento');
		var resultado = jogoModel.lancarDados();
		res.render('novoLancamento', {lancamento : resultado} );
	}
}