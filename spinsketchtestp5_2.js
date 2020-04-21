let movie;
let loaded;
let t;
let len;
let ldrSize = 50;
let ldrPhase = 0;

function preload () {
  movie = createVideo('data/looptest2.mp4', vidLoad);
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  movie.hide();
  loaded = false;
  frameRate(30);
  
  let t = 0;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function vidLoad() {
  loaded = true;
  len = movie.duration();
}



function draw() {
  background(0);
  
  //LOADING SCREEN
  if (loaded == false) {
    
    fill(0);
    stroke(255);
    strokeWeight(3);
    ellipseMode(RADIUS);
    ellipse(windowWidth/2, windowHeight/2, ldrSize);

    if (ldrSize < 100 && ldrPhase == 0) {
     ++ldrSize;
    } else if (ldrSize == 100 && ldrPhase == 0) {
      ldrPhase = 1;
    } else if (ldrPhase == 1 && ldrSize > 50) {
      --ldrSize;
    } else if (ldrPhase == 1 && ldrSize == 50) {
      ldrPhase= 0;
    }
    
      fill(255);
      strokeWeight(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("loading.", windowWidth/2,windowHeight/2);
    text("This only works in Google Chrome. Sorry.", windowWidth/2, windowHeight - 20);
     
  }
  
  // END LOADING SCREEN
  
  
  // MAIN DRAW CODE
  if (loaded == true) {
    image(movie, 0, 0, windowWidth, 9/16 * windowWidth);
     t = map(mouseX, 0, windowWidth, 0, len); 
     
     movie.time(t);
    
    
    
    fill(255);
    textSize(40);
    textAlign(LEFT, TOP);
    text(t, 10, 10);
    text(movie.time(), 10, 70);
    }  
    
  
}



//function keyPressed() {
//  movie.play();
  
//  if (keyCode == 39) {
//    t = 5;
//  } else if (keyCode == 37) {
//    t = 10;
//  }
  
//  movie.time(t);
//}

//function mouseMoved() {
//  movie.time(t);
//}

function mousePressed() {
  movie.play();
}

function mouseReleased() {
  movie.pause();
}
