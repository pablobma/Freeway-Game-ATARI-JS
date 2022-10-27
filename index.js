//images variables
let roadway;
let car1;
let car2;
let car3;
let actor;

//actor characteristics
//we can also use lists, like xCars = [550, 550, 550]; the first position on the list is '0', the second '1' and the third '2'
let xActor = 100;
let yActor = 366;
let widthActor = 30;
let heightActor = 30;
let velActor = 2.5;

//car1 characteristics
//let xCar1 = 550;
//let yCar1 = 45;
//let widthCar1 = 45;
//let heightCar1 = 35;
//let velCar1 = 2;

//car2 characteristics
//let xCar2 = 550;
//let yCar2 = 100;
//let widthCar2 = 45;
//let heightCar2 = 35;
//let velCar2 = 2.5;

//car3 characteristics
//let xCar3 = 550;
//let yCar3 = 150;
//let widthCar3 = 45;
//let heightCar3 = 35;
//let velCar3 = 3.5;

//collision
let smash = false;

let points = 0;
let beat;
let win;
let lose;

function preload(){
  roadway = loadImage("images/estrada.png");
  actor = loadImage("images/ator-1.png");
  car1 = loadImage("images/carro-1.png");
  car2 = loadImage("images/carro-2.png");
  car3 = loadImage("images/carro-3.png");
  cars = [car1, car2, car3, car1, car2, car3];
  beat = loadSound("trilha.mp3");
  win = loadSound("pontos.wav");
  lose = loadSound("colidiu.mp3");
}

function setup() {
  createCanvas(500, 400);
  beat.loop();
}

function draw() {
  background(roadway);
  image(actor, xActor, yActor, widthActor, heightActor);
  for (let i = 0; i < cars.length; i += 1){
  image(cars[i], xCars[i], yCars[i], 45, 35);
  }
  actorMove();
  carMove();
  loopCars();
  collision();
  myPoints();
  scoring();
}

function actorMove(){
  if (keyIsDown(UP_ARROW)){
    yActor -= velActor;
  }
  if (keyIsDown(DOWN_ARROW)){
    yActor += velActor;
  }
}

function carMove(){
  for (let i = 0; i < cars.length; i += 1){
    xCars[i] -= velCars[i];
  }
}

function loopCars(){
  if (xCars[0] < -50){
    xCars[0] = 550;
  }
  if (xCars[1] < -50){
    xCars[1] = 550;
  }
  if (xCars[2] < -50){
    xCars[2] = 550;
  }
  if (xCars[3] < -50){
    xCars[3] = 550;
  }
  if (xCars[4] < -50){
    xCars[4] = 550;
  }
  if (xCars[5] < -50){
    xCars[5] = 550;
  }
}

function collision(){
  for (let i = 0; i < cars.length; i += 1){
    smash = collideRectCircle(xCars[i], yCars[i], 45, 35, xActor, yActor, 15)
    if (smash){
      yActor = 366;
      lose.play();
      if (points > 0){
      points -= 1;
      }
    }
  }
}

function myPoints(){
  textSize(25);
  fill(color(255, 255, 0))
  text(points, 110, 27);
}

function scoring(){
  if (yActor < 9){
    points += 1
    win.play();
    yActor = 366;
  }
}

