
//Create variables here
var dog, happyDog, database, foodS, foodStock, dogIMG;
function preload()
{
  //load images here
  dogIMG=loadImage("images/dogImg.png");
  dogIMG=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dogIMG);
dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogIMG);
  }
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



