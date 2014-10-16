//Chessboard

var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','k','q','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[2][5] = board[0][6];
board[0][6] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[4][2] = board[6][2];
board[6][2] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[2][4] = board[1][4];
board[1][4] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[5][6] = board[6][6];
board[6][6] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[3][3] = board[1][3];
board[1][3] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[6][6] = board[7][5];
board[7][5] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[1][4] = board[0][5];
board[0][5] = ' ';
console.log(board.join('\n'));

console.log("JAR JAR BINKS!")

board[5][5] = board[7][6];
board[7][6] = ' ';
console.log(board.join('\n'));
