//*Kase Kolder

var r;
var g;
var b;

var r2;
var g2;
var b2;


function setup() {
    createCanvas(windowWidth,windowHeight)
    background(0,0,0);
    print(r);
    r = random(255);
    g = random(255);
    b = random(255);
    r2=random(255);
    g2=random(255);
    b2=random(255);
  

    for(var i=0; i<1000; i=i+30){
        for(var n=0; n<1000; n=n+35){
            fill(r,g,b);
            strokeWeight(random(0,20));
            stroke(r2,g2,b2)
            circle(i,n,15);
            fill(r2,g2,b2);
            stroke(r,g,b)
            circle(i+10,n+10,18);
        }
    }
}

  
function draw() {

}