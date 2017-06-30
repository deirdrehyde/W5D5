Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  // function Surrogate() {}
  //
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
};

// class MovingObject {
//   hello() {
//     console.log('hello');
//   }
// }
// // class Ship {
// //   bye() {
// //     console.log('bye');
// //   }
// // }
//
// function Ship () {}
// Ship.inherits(MovingObject);
//
// Ship.prototype.bye = function() {
//   console.log('bye');
// };
//
// function Asteroid () {}
// Asteroid.inherits(MovingObject);
//
// let ship = new Ship();
// console.log(ship);
// ship.hello();
// ship.bye();
//
// let mO = new MovingObject();
// mO.hello();
// mO.bye();
