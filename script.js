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

/*criando o array da comida*/
let food = {
	/*criação de números aleatórios para a comida aparecer em vários locais da tela */
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
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

/*criando a comida*/
function drawFood(){
	context.fillStyle = "red";
	context.fillRect(food.x, food.y, box, box);
}

/*detectar o toque no botão e transmitir o código da tecla para a função*/
document.addEventListener('keydown', update);
function update (event){
	/*37-direita 38-baixo 39-esquerda 40-cima*/
	if(event.keyCode == 37 && direction != "right") direction = "left";
	if(event.keyCode == 38 && direction != "down") direction = "up";
	if(event.keyCode == 39 && direction != "left") direction = "right";
	if(event.keyCode == 40 && direction != "up") direction = "down";
}

/*iniciar o jogo*/
function iniciarJogo(){
	/*permitir que a cobrinha atravesse as paredes/canvas*/
	if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
	if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

	criarBG();
	criarcobrinha();
	drawFood();

	/*a posição para qunado setar os movimentos a cobrinha ter um ponto de partida*/
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	/*coordenadas de onde a cobrinha vai seguir  - adiciona um quadradinho se ela estiver indopara o lado direito e se estiver indo para o esquerdo*/
	if (direction == "right") snakeX += box;
	if (direction == "left") snakeX -= box;
	if (direction == "up") snakeY -= box;
	if (direction == "down") snakeY += box;

	/*|| para a cobrinha aumentar de tamanho e a comida aparecer em outro lugar aleatório*/ 
		if (snakeX != food.x || snakeY != food.y) {
			/*função pop retira o último elemento do array*/
			snake.pop();
		}
		else{
			food.x = Math.floor(Math.random() * 15 + 1) * box;
			food.y = Math.floor(Math.random() * 15 + 1) * box;
		}

	/*Acrescentar um elemento a frente- uma nova cabeça*/
	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); /*a cada 100ms o jogo é atualizado e continua sem que fique travando*/



/*função para parar o jogo quando a cobrinha encostar no corpo dela*/
