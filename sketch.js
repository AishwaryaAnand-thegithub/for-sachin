var player, playerLeftPose,playerRight, playerLeft;
var playerRightJump, playerLeftJump;
var playerShootAnimation;

function preload(){
playerPose = loadAnimation("cos/costar.png")
playerRight = loadAnimation("cos/corr1.png","cos/corr2.png","cos/corr3.png","cos/corr4.png","cos/corr5.png","cos/corr6.png")
playerLeft = loadAnimation("clm/corl 1.png","clm/corl 2.png","clm/corl 3.png","clm/corl 4.png","clm/corl 5.png","clm/corl 6.png",)
playerRightJump = loadAnimation("cos/cojr1.png","cos/cojr2.png","cos/cojr3.png","cos/cojr4.png","cos/cojr5.png","cos/cojr6.png",)
playerLeftJump = loadAnimation("clm/cojl1.png","clm/cojl2.png","clm/cojl3.png","clm/cojl4.png","clm/cojl5.png","clm/cojl6.png",)
}


function setup(){
createCanvas(800,500);

player = createSprite(250,250,30,70);

player.addAnimation("pose",playerPose);

player.addAnimation("right",playerRight);
player.addAnimation("left",playerLeft);

player.addAnimation("rightJump",playerRightJump);
player.addAnimation("leftJump",playerLeftJump)


player.changeAnimation("pose",playerPose);
}

function draw(){
background(0);

if(keyWentDown(RIGHT_ARROW)){
    player.changeAnimation("right",playerRight)
}
if(keyWentUp(RIGHT_ARROW)){
    player.changeAnimation("pose",playerPose);

}
drawSprites();
}