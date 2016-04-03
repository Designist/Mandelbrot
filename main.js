// BEGIN CANVAS INITIALIZATION
var canvas;
var ctx;
var timer;

canvas = document.getElementById("canvas");
ctr = document.getElementById("counter");
ctx = canvas.getContext("2d");
// END CANVAS INITIALIZATION

var matrix = [];


function m(iter, real, imag) {
  // I/O: iter, a natural number that determines how many iterations
  //            to run before declaring a number a member of the Mandelbrot set
  //      real, the real component of the entered complex number
  //      imag, the imaginary component of the entered complex number
  // O/P: a boolean value, stating whether or not the original number is in the
  //      Mandelbrot set after 'iter' iterations
  var nextR;
  var nextI;
  var r = 0;
  var i = 0;
  var count = 0;
  while ((count < iter) && (r*r + i*i <= 4)) {
    nextR = r*r - i*i + real;
    nextI = 2*r*i + imag;
    r = nextR;
    i = nextI;
    count++;
  }
  if (count >= iter) {
    return true;
  }
  else {
    return false;
  }
}

function init() {
  clearInterval(timer);
  timer = 0;
  var zoom = false; // Set 'zoom == true' to see zoomed in visual.
  if (zoom == true) {
    for (var i=0; i<800; i++) {
      matrix[i] = [];
      for (var j=0; j<800; j++) {
        matrix[i][j] = [(i-100000)/195000,(j-100000)/195000];
      }
    }
    timer = setInterval(update_zoom(), 1);
  }
  else {
    for (var i=0; i<800; i++) {
      matrix[i] = [];
      for (var j=0; j<800; j++) {
        matrix[i][j] = [(i-615)/300,(j-400)/300];
      }
    }
    timer = setInterval(update(), 1);
  }
  return timer;
}

function update_zoom() {
  for (var i=0; i<800; i++) {
    for (var j=0; j<800; j++) {
      if (m(25, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#1000E5';
        ctx.fillRect(i,j,1,1);
      }
      if (m(75, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#0D00BE';
        ctx.fillRect(i,j,1,1);
      }
      if (m(125, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#0A0098';
        ctx.fillRect(i,j,1,1);
      }
      if (m(250, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#080072';
        ctx.fillRect(i,j,1,1);
      }
      if (m(500, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#05004C';
        ctx.fillRect(i,j,1,1);
      }
      if (m(750, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#020026';
        ctx.fillRect(i,j,1,1);
      }
      if (m(1000, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(i,j,1,1);
      }
    }
  }
}

function update() {
  for (var i=0; i<800; i++) {
    for (var j=0; j<800; j++) {
      if (m(5, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(i,j,1,1);
      }
      if (m(8, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#FFFF00';
        ctx.fillRect(i,j,1,1);
      }
      if (m(12, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(i,j,1,1);
      }
      if (m(15, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#00FFFF';
        ctx.fillRect(i,j,1,1);
      }
      if (m(25, matrix[i][j][0], matrix[i][j][1])) {
        // Change all colors to '#FFFFFF' except this one to view border
        // of the Mandelbrot set.
        ctx.fillStyle = '#0000FF';
        ctx.fillRect(i,j,1,1);
      }
      if (m(100, matrix[i][j][0], matrix[i][j][1])) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(i,j,1,1);
      }
    }
  }
}
