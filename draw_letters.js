/* these are optional special variables which will change the system */
var systemBackgroundColor = "#1c0100";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
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
  let size2 = letterData["size"];
  let pos1x = 0 + letterData["offsetx1"];
  let pos1y = 0 + letterData["offsety1"];
  let pos2x = 0 + letterData["offsetx2"];
  let pos2y = 0 + letterData["offsety2"];
  let pos3x = 0 + letterData["offsetx3"];
  let pos3y = 0 + letterData["offsety3"];
  let pos4x = 0 + letterData["offsetx4"];
  let pos4y = 0 + letterData["offsety4"];
  let pos5x = 0 + letterData["offsetx5"];
  let pos5y = 0 + letterData["offsety5"];

  // Square Background
  noStroke();
  fill(red);
  beginShape();
    vertex(25,0);
    vertex(75,0)
    vertex(75,200);
    vertex(25,200)
  endShape(CLOSE);

  stroke("#ffffff");
  strokeWeight(3);
  noFill();
  beginShape();
    vertex(pos1x,pos1y+50);
    vertex(pos1x+50,pos1y+50);
    vertex(pos2x+50,pos2y+150);
    vertex(pos2x,pos2y+150);
  endShape(CLOSE);

  noFill();
  beginShape();
    vertex(pos3x,pos3y+50);
    vertex(pos3x+50,pos3y+50);
    vertex(pos4x+50,pos4y+150);
    vertex(pos4x,pos4y+150);
  endShape(CLOSE);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
