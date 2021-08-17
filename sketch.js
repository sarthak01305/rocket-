var PLAY
var END
var gameState = PLAY;

var rocket,rocketImg
var space,spaceImg
var gameover,gameoverImg


function preload(){

rocketImg = loadImage("rocket.jpeg");
spaceImg = loadImage("space_backround.jpg");
gameoverImg = loadImage("gameover.jpg");

}

function setup() {
 createCanvas(600,600);

 space = createSprite(50,600,200,200)
 space.addImage("space",spaceImg);
 

 rocket = createSprite(200,200,50,50);
 rocket.addImage("rocket",rocketImg);

 asteroidGroup = new Group();



}

function draw() {
 background(225);

if(gameState === PLAY){
    if(space.y>600){
        space.y = 300
    }

if(keyDown("left_arrow")){
    rocket.x = rocket.x-3;
}
if(keyDown("right_arrow")){
    rocket.x = rocket.x+3;
}
if(keyDown("space")){
    rocket.velocityY = -5;
}

rocket.velocityY = rocket.velocityY + 0.8;
space.velocityY = -2



if(asteroidGroup.isTouching(rocket)){
    rocket.velocityY = 0;
    gameState = END
}




spawnAsteroid();


drawSprites();

}

if(gameState===END){
    gameover = createSprite(200,200,60,60)
}


function spawnAsteroid()
{
    asteroidImg = loadImage("asteroid.jpeg");
    if(frameCount % 240 ===0 ){
        var asteroid,asteroidImg
asteroid = createSprite(200,200,50,50);
asteroid.addImage(asteroidImg);
asteroid.scale = 0.5
asteroid.velocityY = 1;

asteroidGroup.add(asteroid);

rocket.depth = asteroid.depth
rocket.depth + 1

rocket.depth = spaceImg.depth
rocket.depth + 1


asteroid.lifetime = 600



    }
}



















}