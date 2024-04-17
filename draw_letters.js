/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
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
function drawLetter(posx, posy,letterData) {
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

  // Square Background
  noStroke();
  fill(red);
  beginShape();
    vertex(posx+50,posy-200);
    vertex(posx-50, posy-200)
    vertex(posx-50,posy+100);
    vertex(posx+50,posy+100)
  endShape(CLOSE);

  stroke("#ffffff");
  noFill();
  beginShape();
    vertex(pos1x-100,pos1y-400);
    vertex(pos1x,pos1y-400);
    vertex(pos2x,pos2y);
    vertex(pos2x-100,pos2y);
  endShape(CLOSE);

  noFill();
  beginShape();
    vertex(pos3x-100,pos3y-400);
    vertex(pos3x,pos3y-400);
    vertex(pos4x,pos4y);
    vertex(pos4x-100,pos4y);
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
