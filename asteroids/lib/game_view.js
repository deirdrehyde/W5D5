const game = require('game.js');

function GameView() {

}

GameView.prototype.start = function() {
  setInterval(game.moveObjects, 20);
  setInterval(game.draw, 20);
};
