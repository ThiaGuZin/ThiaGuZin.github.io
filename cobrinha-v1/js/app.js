console.log('Início - Jogo da Cobrinha!');
 
//R.I.P Adobe Flash
const canvas = document.querySelector('#snake');
const contexto = canvas.getContext('2d');
//Caixa de tamanho mínimo
//512 = 16 x 32
const box = 32;
//A cobrinha é um Vetor
const snake = [];

//Placar
let tamanho = 1;
const tamanhoSpan = document.querySelector('#tamanho')
 
//Inicializa a cabeça da cobrinha na posição ZERO do vetor
//Posição x=8 e y=8 no meio do Canvas
snake[0] = {
   x: 8 * box,
   y: 8 * box
};
 
function criarCenario() {
   contexto.fillStyle = 'lightgreen';//Verde claro
   //Criação de um retângulo de 512=16x32
   contexto.fillRect(0,0,16*box,16*box);
}
 
function criarCobrinha() {
   for(let i=0; i < snake.length; i++){
       contexto.fillStyle = 'green';
       contexto.fillRect(snake[i].x, snake[i].y, box, box);
   }
}

 
let direction = '';//Movimentação para a direita

document.addEventListener('keydown', atualizaDirection);

 
function atualizaDirection(evento) {
   //http://keycode.info/
   if(evento.keyCode === 37 && direction !== 'right')
       direction = 'left'; //37 - seta para a esquerda
   if(evento.keyCode === 39 && direction !== 'left')
       direction = 'right'; //39 - seta para a direita
   if(evento.keyCode === 38 && direction !== 'down')
       direction = 'up'; //38 - seta para cima
   if(evento.keyCode === 40 && direction !== 'up')
       direction = 'down';
}

//Criação do objeto comida
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
 }
  
 function criarComida() {
    contexto.fillStyle = 'red';
    contexto.fillRect(comida.x, comida.y, box, box);
 }
 
function desenharJogo(){

    //Reposicionar a cobrinha do outro lado
    //caso ela toque na borda
    if(snake[0].x > 15 * box && direction === 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction === 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction === 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction === 'up') snake[0].y = 16 * box;

    //Detectar colisão entre a cabiça e o corpo
    for(let i = 1; i < snake.length; i++) {
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            clearInterval(jogo);
            alert('Fim do jogo!')
        }
        
    }

    criarCenario();
    criarCobrinha();
    criarComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Movimentar a cobrinha de acordo com a diração
    if(direction === 'right') snakeX += box;
    if(direction === 'left') snakeX -= box;
    if(direction === 'up') snakeY -= box;
    if(direction === 'down') snakeY += box;

    if(snakeX !== comida.x || snakeY !== comida.y){
    //Remover o último elemento de calda da cobrinha (do vetor)
    snake.pop();//Remove ultimo elemento do vetor
    } else {
        tamanhoSpan.textContent = ++tamanho;
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    //Criaçaõ da nova cabeça do movimento
    const newHead = {
        x: snakeX,
        y: snakeY
    }

    //Adicionar a nova cabeça após o movimento
    snake.unshift(newHead);


 }
  
 //A função desenharJogo está sendo chamada a cada 100ms
 let jogo = setInterval(desenharJogo, 100);


