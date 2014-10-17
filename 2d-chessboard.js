//Chessboard

var board = [
  ['R','N','B','K','Q','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','k','q','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

var moves = {
  firstMove: function() {
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },

  secondMove: function(){
    board[2][5] = board[0][6];
    board[0][6] = ' ';
  },

  thirdMove: function(){
    board[4][2] = board[6][2];
    board[6][2] = ' ';
  },

  fourthMove: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  },

  fifthMove: function(){
    board[5][6] = board[6][6];
    board[6][6] = ' ';
  },

  sixthMove: function(){
    board[3][3] = board[1][3];
    board[1][3] = ' ';
  },

  seventhMove: function(){
    board[6][6] = board[7][5];
    board[7][5] = ' ';
  },

  eigthMove: function(){
    board[1][4] = board[0][5];
    board[0][5] = ' ';
  },

  ninthMove: function(){
    board[5][5] = board[7][6];
    board[7][6] = ' ';
  }
}

console.log(board.join('\n'));


var assert = require('chai').assert
var expect = require('chai').expect

describe('Mocha test chessboard', function(){
  it("First move- board should look like:", function(){
    moves.firstMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  });
  it("Second Move- board should look like:", function(){
    moves.secondMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  })

})
