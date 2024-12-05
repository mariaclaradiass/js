//Implemente a lógica do jogo no arquivo script.js.
//omece definindo o tamanho do jogo e o contexto do canvas.

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const unitSize = 20; // Tamanho de cada unidade (quadrado)
canvas.width = 600; // Largura do jogo
canvas.height = 500; // Altura do jogo

//Defina as variáveis que representarão a cobra, a comida e a direção.
let snake = [{ x: 200, y: 200 }]; // Cobra começa no meio
let food = { x: 100, y: 100 }; // Comida inicial
let dx = unitSize; // Movimento horizontal
let dy = 0; // Movimento vertical
let score = 0;

//Crie as funções para desenhar a cobra e a comida.
function drawSnake() {
ctx.fillStyle = 'royalblue';
snake.forEach(part => {
ctx.fillRect(part.x, part.y, unitSize, unitSize);
ctx.strokeStyle = 'green';  // Cor da borda
ctx.lineWidth = 2;  // Largura da borda
ctx.strokeRect(part.x, part.y, unitSize, unitSize);
});
}

function drawFood() {
ctx.fillStyle = 'red';
ctx.fillRect(food.x, food.y, unitSize, unitSize);
ctx.strokeStyle = 'purple'; // Cor da borda
ctx.lineWidth = 2; // Largura da borda
ctx.strokeRect(food.x, food.y, unitSize, unitSize); // Desenha a borda
}


//Implemente a lógica de movimentação, colisão e crescimento.
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Adiciona uma nova cabeça

    // Verifica se comeu a comida
    if (head.x === food.x && head.y === food.y) {
        generateFood(); // Gera uma nova comida
        score += 10; // Aumenta o score em 10 pontos
    } else {
        snake.pop(); // Remove a cauda
    }
}



function checkCollision() {
// Colisão com paredes
if (
snake[0].x < 0 ||
snake[0].x >= canvas.width ||
snake[0].y < 0 ||
snake[0].y >= canvas.height
) {
return true;
}

// Colisão com o próprio corpo
for (let i = 1; i < snake.length; i++) {
if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
return true;
}
}
return false;
}

//Adicione uma função para gerar comida em posições aleatórias.
function generateFood() {
food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;
food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;

}

//Crie um evento para mudar a direção da cobra.
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && dy === 0) {
    dx = 0;
    dy = -unitSize;
    } else if (event.key === 'ArrowDown' && dy === 0) {
    dx = 0;
    dy = unitSize;
    } else if (event.key === 'ArrowLeft' && dx === 0) {
    dx = -unitSize;
    dy = 0;
    } else if (event.key === 'ArrowRight' && dx === 0) {
    dx = unitSize;
    dy = 0;
    }
    });

//Monte o loop principal para desenhar e atualizar o jogo.
function gameLoop() {
    if (checkCollision()) {
        alert('Game Over!');
        document.location.reload();
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

        // Desenha o score no canto superior esquerdo
        ctx.fillStyle = 'whitegg'; // Cor do texto
        ctx.font = '20px Arial'; // Fonte do texto
        ctx.fillText('Score: ' + score, 10, 30); // Exibe o score

        drawFood();
        moveSnake();
        drawSnake();
        gameLoop();
    }, 180);
}


generateFood();
gameLoop();
/* Centraliza o canvas na tela */
