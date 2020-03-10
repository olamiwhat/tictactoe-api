// return s the optimal move for server given player X position

function secondMove(board) {
  switch (board.indexOf('X')) {
    case 1:
    case 2:
      return 3;
      break;
    case 3:
    case 4:
    case 6:
      return 1;
      break;
    case 5:
      return 4;
      break;
    case 7:
    case 8:
      return 2;
      break;
  }
}

module.exports = secondMove;
