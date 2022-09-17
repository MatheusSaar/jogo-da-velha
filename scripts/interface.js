// Evento que carrega o DOM e permite o evento de clique de cada quadrado
document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', handleButton);

function handleButton() {
  setTimeout(() => {
    resetGame();
  }, 200);
  updateSquares();
}

// Função que lida com o clique
function handleClick(event) {
  let square = event.target;
  let position = square.id;
  // Função no arquivo game.js, responsável pela mudança de jogador
  if (handleMove(position)) {
    // Caso o jogador vença, receberá a seguinte mensagem
    setTimeout(() => {
      showChat(document.body, "O jogo acabou!");
    }, 10);
  };
  updateSquare(position);
}

function showChat(content, text) {
  let chatbox = document.createElement('div');
  chatbox.setAttribute('id', 'chatbox');
  chatbox.innerHTML = `<p>${text}</p>`;
  chatbox.style.transform = `scale(0)`;

  setTimeout(() => {
    chatbox.style.transition = `all ease-out 0.3s`;
    chatbox.style.transform = `scale(1)`;
  }, 200);

  content.append(chatbox);

  setTimeout(() => {
    chatbox.style.transition = `all ease-out 0.3s`;
    chatbox.style.transform = `scale(0)`;
  }, 2000);

  setTimeout(() => {
    removeChat(chatbox);
  }, 2200)
}

function removeChat(content) {
  content.remove();
}

// Função que atualiza a tela correspondente a cada clique do jogador
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  if (square == null) return;
  square.innerHTML = `<div class='${symbol} animated'></div>`;
}

// Função que atualiza a tela após o fim de jogo
function updateSquares() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];
    if (symbol != '') {
      square.innerHTML = `<div class='${''}'></div>`;
    }
  })
}
