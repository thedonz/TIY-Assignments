//The Mother Freakin' Chessboard

// Board
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

// Moves Catalan Opener http://www.chess.com/opening/eco/E06_Catalan_Opening_Closed_Variation

//Moves
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

  eighthMove: function(){
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
  });
  it("Third Move- board should look like:", function(){
    moves.thirdMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  });
  it("Fourth Move- board should look like:", function(){
    moves.fourthMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p',' ',' ','p','p','p','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  });
  it("Fifth Move- board should look like:", function(){
    moves.fifthMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P','P',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  });
  it("Sixth Move- board should look like:", function(){
    moves.sixthMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','k','q','b','n','r'] ]
    );
  });
  it("Seventh Move- board should look like:", function(){
    moves.seventhMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q','B',' ','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','k','q',' ','n','r'] ]
    );
  });
  it("Eighth Move- board should look like:", function(){
    moves.eighthMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','k','q',' ','n','r'] ]
    );
  });
  it("Ninth Move- board should look like:", function(){
    moves.ninthMove();
    assert.deepEqual(board,
      [
      ['R','N','B','K','Q',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','k','q',' ',' ','r'] ]
    );
  });
});
