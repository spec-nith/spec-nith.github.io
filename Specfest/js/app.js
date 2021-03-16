// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM
console.log("File linked successfully")
let stars = [];

let speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight+500);
  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
  // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
  console.log(window.innerHeight)
}

window.addEventListener("resize", function setup() {
  createCanvas(window.innerWidth, window.innerHeight+500);
  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
  // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
  console.log(window.innerHeight)

});



function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function () {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  };

  this.show = function () {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 10, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  };
}