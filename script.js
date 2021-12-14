/*criando o canvas (a telinha de fundo do joguinho)*/
let canvas = document.getElementById("snake");
let context =canvas.getContext("2d");
let box = 32;

/*for para criar a cobrinha*/
let snake = [] /*for*/
snake[0] = {
	x: 8 * box,
	y: 8 * box
}

/*movimentação*/
let direction = "right";

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

function iniciarJogo(){
	criarBG();
	criarcobrinha();

	/*a posição para qunado setar os movimentos a cobrinha ter um ponto de partida*/
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	/*coordenadas de onde a cobrinha vai seguir  - adiciona um quadradinho se ela estiver indopara o lado direito e se estiver indo para o esquerdo*/
	if (direction == "right") snakeX += box;
	if (direction == "left") snakeX -= box;
	if (direction == "up") snakeY -= box;
	if (direction == "down") snakeY += box;


	/*função pop retira o último elemento do array*/
	snake.pop();

	/*Acrescentar um elemento a frente- uma nova cabeça*/
	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); /*a cada 100ms o jogo é atualizado e continua sem que fique travando*/



/*função para parar o jogo quando a cobrinha encostar no corpo dela*/
