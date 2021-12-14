let canvas = document.getElementById("snake");
let context =canvas.getContext("2d");
let box = 32;
let snake = [] /*for*/
snake[0] = {
	x: 8 * box,
	y: 8 * box
}

/*Criando o background*/
function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box); /*onde vai acontecer o jogo*/
}

/*criando a cobrinha - adicionando o primeiro elemento e retirando o último isso vai fazer com que ela ande*/
function criarcobrinha(){ /*vai pintar o corpo da cobrinha de verde e vai setar*/
	for (i=0; i < snake.length; i++) {
		context.fillStyle = "green";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

criarBG();
criarcobrinha();
