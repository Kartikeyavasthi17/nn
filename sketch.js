//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImg,happyDogImg;

var database;

function preload()
{
  //load images here
  dogImg =loadImage("dogImg.png");
  happyDogImg =loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
  database =firebase.database();

  dog =createSprite(300,300,5,5);
  dog.scale =0.3;
  dog.addImage(dogImg);

  foodStock =database.ref("Food");
  foodStock.on("value",readstock);

}


function draw() {  

  background(46, 139, 87)
  //add styles here

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  dog.display();

  drawSprites();

}

function writeStock(x)
{
  if(x <= 0)
  {
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })

}

function readstock(data)
{
  foodS =data.val();
}