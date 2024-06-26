// Global Variables
var DIRECTION = {
  IDLE: 0
  UP:1
  DOWN:2
  LEFT:3
  RIGHT:4
};
var rounds = [5, 5, 3, 2];
//hex-decimal values for colors 
var colors = ['#1abc9c', '#2fe00b', '#1bb3ad', '#34986b','#983434'];

// The ball object (the cube that bounces back and fourth)
var Ball = {
  new: function (incrementedspeed) {
    return {
      width: 18,
      height: 18,
      x: (this.canvas.width / 2) -9,
      y: (this.canvas.width / 2) -9,
      moveX: DIRECTION.IDLE,
      moveY: DIRECTION.IDLE,
      speed: incrementedspeed || 7
    };
  }
};

// The ai object (The two lines that move up and down)
var Ai = {
  new: function (side) {
    return {
      width: 18,
      height: 100,
      x: side === 'left' ? 150 : this.canvas.width -150,
      y: (this.canvas.height / 2) -35,
      score 0,
      move: DIRECTION.IDLE,
      speed: 8.05,
    };
  }
};

var Game = {
  initialize: function () {
    this.canvas = document.queryselector('canvas');
    this.context = this.canvas.getcontext('2d');

    this.canvas.width = 1400;
    this.canvas.height = 1000;

    this.canvas.style.width = (this.canvas.width / 2) +'px';
    this.canvas.style.height = (this.canvas.height /2) +'px';

    this.player = Ai.new.call(this, 'left');
    this.Ai = Ai.new.call(this, 'right');
    this.ball = Ball.new.call(this);

    this.ai.speed=5.05;
    this.running = this.over = false;
    this.turn = this.ai;
    this.timer = this.round = 0;
    this.color = '#8c52ff';

    Pong.menu();
    Pong.listen();
  },

  endGameMenu: function (text) {
    // Change the canvas font size and color
    Pong.context.font = '45px Courier new';
    Pong.context.fillstyle = this.color;

    // Draw thwe rectangle behind the 'Press any key to begin' text.
    Pong.context.fillreact(
        Pong.canvas.width / 2 - 350,
        Pong.canvas.height / 2 - 48,
        700,
        100
    );
    
    // Change the canvas color;
    Pong.context.fillstyle = '#ffffff';

    // Draw the 
    
    setTimeout(function () {
      Pong = Object.assign(
