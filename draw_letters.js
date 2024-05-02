/* these are optional special variables which will change the system */
var systemBackgroundColor = "#190000";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let pos1x = letterData["offsetx1"];
  let pos1y = letterData["offsety1"];
  let pos2x = letterData["offsetx2"];
  let pos2y = letterData["offsety2"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];
  let pos4x = letterData["offsetx4"];
  let pos4y = letterData["offsety4"];
  let pos5x = letterData["offsetx5"];
  let pos5x2 = letterData["offsetx52"];
  let pos5y = letterData["offsety5"]
  let pos5y2 = letterData["offsety52"]
  let ColourFILL = letterData["ColourCode"];


  let red1 = color(255,0,0);//Bright Red
  let red2 = color(25,0,0);//Background Reddy Black

  noStroke();
  if (typeof curLetterPos !== 'undefined') {
    let darkNess = map(curLetterPos, 0, 7, 0, .8);
    let interCO = lerpColor(red1, red2, darkNess)
    fill(interCO);  
  } else {
    let ColourF = lerpColor(red1, red2, ColourFILL)
    fill (ColourF)
  }
  beginShape();
    vertex(pos5x+35,pos5y);
    vertex(pos5x2+65,pos5y)
    vertex(pos5x2+65,pos5y2);
    vertex(pos5x+35,pos5y2)
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

//The White Outlines go to the center flat, so they look like lines
    if (percent <=20){
    new_letter["offsetx1"] = map(percent, 0, 20, oldObj["offsetx1"], 35);
    new_letter["offsety1"] = map(percent, 0, 20, oldObj["offsety1"], 50);
   
    new_letter["offsetx2"] = map(percent, 0, 20, oldObj["offsetx2"], 35);
    new_letter["offsety2"] = map(percent, 0, 20, oldObj["offsety2"], -50);
   
    new_letter["offsetx3"] = map(percent, 0, 20, oldObj["offsetx3"], 35);
    new_letter["offsety3"] = map(percent, 0, 20, oldObj["offsety3"], 50);
   
    new_letter["offsetx4"] = map(percent, 0, 20, oldObj["offsetx4"], 35);
    new_letter["offsety4"] = map(percent, 0, 20, oldObj["offsety4"], -50);
   
    new_letter["offsetx5"] = map(percent, 0, 20, oldObj["offsetx5"], -35);
    new_letter["offsetx52"] = map(percent, 0, 20, oldObj["offsetx52"], 35);
    new_letter["offsety5"] = map(percent, 0, 20, oldObj["offsety5"], 100);
    new_letter["offsety52"] = map(percent, 0, 20, oldObj["offsety52"], 100);
    } 
if (percent >20 && percent <= 40){//Is the percent is between 20 and 40, the boxs will move up or down
      new_letter["offsetx1"] = map(percent, 20, 40, 35, 35);
      new_letter["offsety1"] = map(percent, 20, 40, 50, -50);
     
      new_letter["offsetx2"] = map(percent, 20, 40, 35, 35);
      new_letter["offsety2"] = map(percent, 20, 40, -50, -50);
     
      new_letter["offsetx3"] = map(percent, 20, 40, 35, 35);
      new_letter["offsety3"] = map(percent, 20, 40, 50, 150);
     
      new_letter["offsetx4"] = map(percent, 20, 40, 35, 35);
      new_letter["offsety4"] = map(percent, 20, 40, -50, -50);
     
      new_letter["offsetx5"] = map(percent, 20, 40, -35, -35);
      new_letter["offsetx52"] = map(percent, 20, 40, 35, 35);
      new_letter["offsety5"] = map(percent, 20, 40, 100, 100);
      new_letter["offsety52"] = map(percent, 20, 40, 100, 100);
    }
if (percent > 40 && percent <= 60){
    new_letter["offsetx1"] = map(percent, 41, 60, 35, 35);
    new_letter["offsety1"] = map(percent, 41, 60, -50, 150);
   
    new_letter["offsetx2"] = map(percent, 41, 60, 35, 35);
    new_letter["offsety2"] = map(percent, 41, 60, -50, -50);
   
    new_letter["offsetx3"] = map(percent, 41, 60, 35, 35);
    new_letter["offsety3"] = map(percent, 41, 60, 150, -50);
   
    new_letter["offsetx4"] = map(percent, 41, 60, 35, 35);
    new_letter["offsety4"] = map(percent, 41, 60, -50, -50);
   
    new_letter["offsetx5"] = map(percent, 41, 60, -35, -35);
    new_letter["offsetx52"] = map(percent, 41, 60, 35, 35);

    new_letter["offsety5"] = map(percent, 41, 60, 100, 100);
    new_letter["offsety52"] = map(percent, 41, 60, 100, 100);
}
if (percent > 60 && percent <= 80){
  new_letter["offsetx1"] = map(percent, 61, 80, 35, 35);
    new_letter["offsety1"] = map(percent, 61, 80, 150, -50);
   
    new_letter["offsetx2"] = map(percent, 61, 80, 35, 35);
    new_letter["offsety2"] = map(percent, 61, 80, -50, -50);
   
    new_letter["offsetx3"] = map(percent, 61, 80, 35, 35);
    new_letter["offsety3"] = map(percent, 61, 80, -50, -50);
   
    new_letter["offsetx4"] = map(percent, 61, 80, 35, 35);
    new_letter["offsety4"] = map(percent, 61, 80, -50, -50);
   
    new_letter["offsetx5"] = map(percent, 61, 80, -40, -40);
    new_letter["offsetx52"] = map(percent, 61, 80, 40, 40);

    new_letter["offsety5"] = map(percent, 61, 80, 100, 0);
    new_letter["offsety52"] = map(percent, 61, 80, 100, 200);
}
if (percent > 80 && percent <= 100) {
    new_letter["offsetx1"] = map(percent, 80, 100, 35, newObj["offsetx1"]);
    new_letter["offsety1"] = map(percent, 80, 100, -50, newObj["offsety1"]);
   
    new_letter["offsetx2"] = map(percent, 80, 100, 35, newObj["offsetx2"]);
    new_letter["offsety2"] = map(percent, 80, 100, -50, newObj["offsety2"]);
   
    new_letter["offsetx3"] = map(percent, 80, 100, 35, newObj["offsetx3"]);
    new_letter["offsety3"] = map(percent, 80, 100, -50, newObj["offsety3"]);
   
    new_letter["offsetx4"] = map(percent, 80, 100, 35, newObj["offsetx4"]);
    new_letter["offsety4"] = map(percent, 80, 100, -50, newObj["offsety4"]);
   
    new_letter["offsetx5"] = map(percent, 80, 100, -40, newObj["offsetx5"]);
    new_letter["offsetx52"] = map(percent, 80, 100, 40, newObj["offsetx52"]);

    new_letter["offsety5"] = map(percent, 80, 100, -200, newObj["offsety5"]);
    new_letter["offsety52"] = map(percent, 80, 100, 400, newObj["offsety52"]);
} 

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
