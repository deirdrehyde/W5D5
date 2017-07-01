const mo = require('moving_object.js');
const util = require('utils.js');
// Return a randomly oriented vector with the given length.

// Scale the length of a vector by the given amount.

// Other properties are filled in for you.
new Asteroid({ pos: [30, 30] });

function Asteroid(pos) {
  this.COLOR = "black";
  this.RADIUS = 100;
  this.pos = pos;
  mo.call(this, {"pos": pos, "vel": util.randomVec(), "radius": this.RADIUS,"color": this.COLOR})
}
