//Create variables here
var dog, happyDog, dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  database = firebase.database();
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  //add styles here
  textSize(4);
  fill(6);
  stroke(6);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 250, 450);

}

function readStock(data){
  foodS - data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })
}