//Create variables here
var dog 
var happyDog
var database
var foodS 
var foodStock
var Food
function preload()
{
  //load images here
  dogHappy = loadImage("images/dogImg1.png")
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)
 // foodStock.Stock.set(20)


  dog = createSprite (250,350,10,60) 
  dog.addImage(dogImg)
  dog.scale = 0.2
}


function draw() {  
  background("green")
 //if(foodS!==undefined){
  drawSprites();
    textSize(20)
    fill(255)
    text("Note: Press UP ARROW to feed DRAGO milk",50,50)
    text("Food Remaining: "+foodS,150,150)
  //}
 // if(ketWentUp(UP_ARROW)){
  //  dog.addImage(dogImg)
 // }

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
  }

 
 // if(foodS ===0){
//    foodS = 20
 // }
 // readStock()
 // writeStock()
  
  //add styles here
  
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
  x=0
  }
else{
  x = x-1
}
database.ref("/").update({
  Food:x
})
}


