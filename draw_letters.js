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
    vertex(pos5x+35,0);
    vertex(pos5x+65,0)
    vertex(pos5x+65,200);
    vertex(pos5x+35,200)
  endShape(CLOSE);

  stroke("#ffffff");
  strokeWeight(3);
  noFill();
  beginShape();
    vertex(pos1x,pos1y+50);
    vertex(pos1x+30,pos1y+50);
    vertex(pos2x+30,pos2y+150);
    vertex(pos2x,pos2y+150);
  endShape(CLOSE);

  noFill();
  beginShape();
    vertex(pos3x,pos3y+50);
    vertex(pos3x+30,pos3y+50);
    vertex(pos4x+30,pos4y+150);
    vertex(pos4x,pos4y+150);
  endShape(CLOSE);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["offsetx1"]    = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  // new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
 
  // new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  // new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
 
  // new_letter["offsetx3"]    = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  // new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
 
  // new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  // new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
 
  // new_letter["offsetx5"] = map(percent, 0, 100, oldObj["offsetx5"], newObj["offsetx5"]);
  // new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);
 
if(percent <= 50) {
  new_letter["offsetx1"]    = map(percent, 0, 50, oldObj["offsetx1"], 0);
  new_letter["offsety1"] = map(percent, 0, 50, oldObj["offsety1"], 0);
 
  new_letter["offsetx2"] = map(percent, 0, 50, oldObj["offsetx2"], 0);
  new_letter["offsety2"] = map(percent, 0, 50, oldObj["offsety2"], 0);
 
  new_letter["offsetx3"]    = map(percent, 0, 50, oldObj["offsetx3"], 0);
  new_letter["offsety3"] = map(percent, 0, 50, oldObj["offsety3"], 0);
 
  new_letter["offsetx4"] = map(percent, 0, 50, oldObj["offsetx4"], 0);
  new_letter["offsety4"] = map(percent, 0, 50, oldObj["offsety4"], 0);
 
  new_letter["offsetx5"] = map(percent, 0, 50, oldObj["offsetx5"], 0);
  new_letter["offsety5"] = map(percent, 0, 50, oldObj["offsety5"], 0);
 

}else {
  new_letter["offsetx1"]    = map(percent, 50, 100, 0,newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 50,100, 0,newObj["offsety1"]);
 
  new_letter["offsetx2"] = map(percent, 50,100, 0,newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 50,100, 0,newObj["offsety2"]);
 
  new_letter["offsetx3"]    = map(percent, 50,100, 0,newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 50,100, 0,newObj["offsety3"]);
 
  new_letter["offsetx4"] = map(percent, 50,100, 0,newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 50,100, 0,newObj["offsety4"]);
 
  new_letter["offsetx5"] = map(percent, 50,100, 0,newObj["offsetx5"]);
  new_letter["offsety5"] = map(percent, 50,100, 0,newObj["offsety5"]);
 



}

 
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
