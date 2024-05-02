const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "offsetx1": 50,
  "offsety1": 200,
  "offsetx2": -50,
  "offsety2": 100,
  "offsetx3": 50,
  "offsety3": 200,
  "offsetx4": -50,
  "offsety4": 100, //100 Aligns with bottom of the Square
}

const letterB = {
  "offsetx1": 100,
  "offsety1": 200,
  "offsetx2": 100,
  "offsety2": -75,
  "offsetx3": 125,
  "offsety3": 325,
  "offsetx4": 125,
  "offsety4": 100,
}

const letterC = {
  "offsetx1": 125,
  "offsety1": 200,
  "offsetx2": 125,
  "offsety2": -125,
  "offsetx3": 125,
  "offsety3": 425,
  "offsetx4": 125,
  "offsety4": 100,
}

const backgroundColor  = "#2e2e2e";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#ffffff";

const red = "#c91e1e";
const orange = "#c96b1e";
const yellow = "#c9a11e";
const green = "#74c91e";
const aqua = "#1ec971";
const liteblue = "#1ec9b8";
const trueblue = "#1e68c9";
const darkblue = "#1e27c9";
const bluepurple = "#5d1ec9";
const truepurple = "#8d1ec9";
const pink = "#c91ec3";
const barbiepink = "#c91e71"
const white = "#ffffff";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos1x = posx + letterData["offsetx1"];
  let pos1y = posy + letterData["offsety1"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
  let pos4x = posx + letterData["offsetx4"];
  let pos4y = posy + letterData["offsety4"];
  let pos5x = posx + letterData["offsetx5"];
  let pos5y = posy + letterData["offsety5"];

  

  // Red Square Const.
  noStroke();
  fill(red);
  beginShape();
    vertex(posx+50,posy-200);
    vertex(posx-50, posy-200)
    vertex(posx-50,posy+100);
    vertex(posx+50,posy+100)
  endShape(CLOSE);

  //White Line box 1
  stroke("#ffffff");
  noFill();
  beginShape();
    vertex(pos1x-100,pos1y-400);
    vertex(pos1x,pos1y-400);
    vertex(pos2x,pos2y);
    vertex(pos2x-100,pos2y);
  endShape(CLOSE);

  //White Line box 2
  noFill();
  beginShape();
    vertex(pos3x-100,pos3y-400);
    vertex(pos3x,pos3y-400);
    vertex(pos4x,pos4y);
    vertex(pos4x-100,pos4y);
  endShape(CLOSE);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
