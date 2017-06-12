(function(){

var formulario = document.formulario_usuario,
	elementos = formulario.elements;

//Verifica se as senhas sao iguais.
var verificarSenha = function(){
	//Se as senhas forem diferentes
	if (elementos.senha.value !== elementos.senha2.value) {
		elementos.senha.value = "";//limpa campo
		elementos.senha2.value = "";//limpa campo
		alert('Senhas diferentes!');//mostra alerta
		return false;
	} else {
		return true;
	}
};


var enviar = function(e){
	//Se o retorno for "false"
	if (!verificarSenha()) {
		e.preventDefault();//cancela o envio
	}
};

//Evento de enviar
formulario.addEventListener("submit", enviar);

}())