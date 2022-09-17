// Iniciar variáveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let symbols = ['o', 'x'];
// Todas as posições de vitória
let winStates = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonais
  [0, 4, 8],
  [2, 4, 6],
]

// Função que lida com a mecânica do jogo
function handleMove(position) {
  // Verifica se o jogo acabou ou não
  if (gameOver) {
    return;
  }
  //Verifica se o quadrado está livre
  if (board[position] === '') {
    board[position] = symbols[playerTime];
    gameOver = isWin();
    if (!gameOver) {
      // Muda o turno pro outro jogador após sua rodada
      playerTime = (playerTime == 0) ? 1 : 0;
    }
  }
  return gameOver;
}

// Função que verifica se há uma situação de vitória
function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];
    // Verifica todos os quadrantes possíveis
    if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
      return true;
    }
  }
  return false;
}

// Função para resetar as configurações do jogo
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gameOver = false;
}