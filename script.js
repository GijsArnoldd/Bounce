var x = 80;
var y = 100;

function setup() {
  
  createCanvas(1280, 720);

}



function draw() {

  background('blue');
  
  const balletjes [10, 30, 40, 50, 80];
  const snelheid [1, -5, 12, 2, -3];
  for (var i = 0, i = 4, i++){
    
    x = let balletjes[i]
    y = let balletjes[i]
    ellipse(x,y,80,80);
    
  }

  for (var n = 0, n = 4, n++){
    if (x < 80 || x > 1280){
      x = x + (-1 * (let snelheid[n]))
    }
    if (y < 0 || y > 720){
      y = y + (-1 * (let snelheid[n]))
    }
    ellipse(x,y,80,80);
  }
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);
}