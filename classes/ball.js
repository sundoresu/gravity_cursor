'use strict';

// (function() {

  var BALL_PROTOTYPE = {
    /* write any methods that you want all instances to have here */
    /* instance methods */
    move: function() {
      // ball.acceleration.x += force.x
      // ball.acceleration.y += force.y

      this.velocity.x += this.acceleration.x
      this.velocity.y += this.acceleration.y

      this.location.x += this.velocity.x
      this.location.y += this.velocity.y
    },

    draw: function() {
      shapeMaker.drawCircle(this.location.x, this.location.y, this.radius);
    }
  }

  var Ball = {
    create: function(location, velocity, radius) {
      var ball = Object.create(BALL_PROTOTYPE)

      ball.location = location
      ball.velocity = velocity
      ball.acceleration = {x: 0, y: 0}
      ball.radius = radius || 20;

      return ball
    },
    /* class methods */
    createRandom: function () {
      var location = {
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT
      }

      var velocity = {
        x: Math.random(),
        y: Math.random()
      }

      var radius = Math.random() * 30

      return Ball.create(location, velocity, radius);
    }
  }

// })()
