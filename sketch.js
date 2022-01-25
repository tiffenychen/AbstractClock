// function setup() {
// 	createCanvas(800,600); // make an HTML canvas element width x height pixels
// }

// function draw() {
// 	background(225);
// 	textSize(32);
// 	fill(180);
// 	text(hour(), 10, 30);
// 	fill(100);
// 	text(minute(), 10, 60);
// 	fill(0);
// 	text(second(), 10, 90);
// }
function setup() {
	createCanvas(800, 800);
  }
  
  function draw() {
	background(220);
	let h = hour();
	let m = minute();
	let s = second();
	console.log('hour:'+ h + 'minutes:' + m + 'seconds' + s);
	let x = 100;
	let y = 25
	for (let i = 0; i < h; i++) {
	x+=25
	//y+=100
	fill(255,0,0);
	ellipse(x,y,25,25);
  }
	for (let i = 0; i < 24-h; i++) {
	x+=25
	//y+=100
	fill(0,0,0);
	ellipse(x,y,25,25);
  }
  
	let x1 = 100;
	let y2=50;
	for (let i = 0; i < m; i++) {
	x1+=25
	if (i%10==0){
	  x1=100
	  y2+=25
	}
	fill(127,0,0);
	ellipse(x1,y2,25,25);
  }
	  for (let i = 0; i < 60-m; i++) {
	x1+=25
	  if (i%10==0){
	  x1=100
	  y2+=25
	}
	fill(0,0,0);
	ellipse(x1,y2,25,25);
  }
	
	let x2 = 100;
	let y3=250;
	for (let i = 0; i < s; i++) {
	x2+=25
	//y+=100
	if (i%10==0){
	  x2=100
	  y3+=25
	}
	fill(255,200,200);
	ellipse(x2,y3,25,25); 
  }
	for (let i = 0; i < 60-s; i++) {
	x2+=25
	  if (i%10==0){
	  x2=100
	  y3+=25
	}
	fill(0,0,0);
	ellipse(x2,y3,25,25);
  }
  
  }

//---------------------------------------------------------------------------
// EXAMPLE 1

// // Adapted from https://readyletsgo.github.io/

// var xPos = 20; // starting x position to draw
// var yPos = 20;  // starting y position to draw
// var barHeight = 180; // height of each bar
// var barMargin = 10; // space between each bar
// var barMax = 760; // maximum width of each bar <-- this changes over time

// //this gets called only once in the very beginning
// function setup() {
// 	createCanvas(800,600);
// }

// //this gets called every frame (about 60 frames per second)
// function draw() {
//   background(0);
//   fill(255, 0, 0);

//   var h = map(hour(), 0, 24, 0, barMax); // Map the function hour() to values from 0 - barMax
//   var m = map(minute(), 0, 60, 0, barMax);
//   var s = map(second(), 0, 60, 0, barMax);

//   //draw 3 background bars to indicate the max width
//   fill(30, 0, 0);
//   rect(xPos,yPos,barMax,barHeight);
//   rect(xPos,yPos + barHeight + barMargin,barMax,barHeight);
//   rect(xPos,yPos + barHeight*2 + barMargin*2,barMax,barHeight);

//   fill(80, 0, 0);
//   rect(xPos,yPos,h,barHeight);   // Bar for hours
//   fill(150, 0, 0);
//   rect(xPos,yPos + barHeight + barMargin,m,barHeight);   // Bar for minute
//   fill(255, 0, 0);
//   rect(xPos,yPos + barHeight*2 + barMargin*2,s,barHeight);   // Bar for second
// }

//---------------------------------------------------------------------------
// EXAMPLE 2
// var x1 = 150;
// var y1 = 0;
// var x2 = 350;
// var y2 = 0

// function setup(){
//   createCanvas(500,500);
// }

// function draw(){
//   noStroke();
//   background(200);

//   // Put time in variables for easy testing
//   var s = second();
//   var m = minute();
//   var h = hour();

//   fill(255,0,0,150) // red
//   triangle(x1,y1,x2,y2,map(s, 0, 60, 0, width), height);
//   fill(255,255,0,150) // yellow
//   triangle(x1,y1,x2,y2,map(m, 0, 60, x1, 0), map(m, 0, 60, y1+(x2-x1), height));
//   fill(0,0,255,150) // blue
//   triangle(x1,y1,x2,y2,x2,map(h, 0, 24, y2, height));

// }
