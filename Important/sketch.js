var titleSlide,titleSlideI1,titleSlideI2,titleSlideI3,titleSlideI4,titleSlideI5,titleSlideI6,titleSlideI7
var gameState=0;
var playerCount;
var form, player, game
var bombI, soldierI,soldier2I,lootI, bulletI, bullet
var database, name, loot, bombs, password, dob, mobileno, soldier, soldier2,playerCount
var  Solstop, ground, roof
var Solstop2
var next
var soldiers=[]
var allPlayers;
function preload()
{
titleSlideI1=loadImage("Media/Background/1 TitleSlide.gif")
titleSlideI2=loadImage("Media/Background/2 signUp or signIn-Background.png")
titleSlideI3=loadImage("Media/Background/3 signUp Background.png")
titleSlideI4=loadImage("Media/Background/4 Sign In Background.png")
titleSlideI5=loadImage("Media/Background/5 Market Image.png")
titleSlideI6=loadImage("Media/Background/6 Help Background.png")
titleSlideI7=loadImage("Media/Background/7 Game Background.png")
bombI=loadImage("Media/Game-Accessories/bomb.png")
soldierI=loadImage("Media/Game-Accessories/soldier.png")
soldier2I=loadImage("Media/Game-Accessories/soldier 2.png")
lootI=loadImage("Media/Game-Accessories/coin.png")
bulletI=loadImage("Media/Game-Accessories/Bullet-fire.png")
}

function setup() {
createCanvas(windowWidth, windowHeight); 
database=firebase.database()
game=new Game()
//game.getState()
game.start() 

//soldier=createSprite(width/10,height/1.47,25,50)
soldier.visible=false
soldier.scale=0.2


Solstop=createSprite(width/3,height/1.5,5,500)
Solstop.visible=false

ground=createSprite(width/2,height/1.315,width,5)
ground.visible=false

roof=createSprite(width/2,height/3,width,5)
roof.visible=false

Solstop2=createSprite(width/1.5,height/1.5,5,500)
Solstop2.visible=false

//soldier2=createSprite(width/1.1,height/1.47,25,50)
soldier2.visible=false
soldier2.scale=0.2



}
function draw() {
  background("white");
   
    console.log(gameState)

  soldier.addImage(soldierI)
  soldier2.addImage(soldier2I)
  
  if(soldier.collide(Solstop)){
    soldier.velocityX=0
  }

  if(soldier2.collide(Solstop2)){
soldier2.velocityX=0
      
  }

  if(keyWentDown("space")){
var bullet= createSprite(soldier.x+10,soldier.y-15,25,50)

    bullet.addImage(bulletI)

    bullet.velocityX= 10

  
  }

  if(soldier.collide(roof)){
    soldier.velocityY=10
  }

  if(soldier2.collide(roof)){
    soldier2.velocityY=10
  }
  

  soldier.collide(ground)
  soldier2.collide(ground)

  
  
  if(playerCount===2){
    gameState=7
  
  }


  if(gameState===0){
image(titleSlideI1,width-width,height-height,width,height)
}
 
if(gameState===1){
image(titleSlideI2,width-width,height-height,width,height)
}
if(gameState===2){
  image(titleSlideI3,width-width,height-height,width,height)
  }
  if(gameState===3){
    image(titleSlideI4,width-width,height-height,width,height)
    }
    if(gameState===4){
      image(titleSlideI5,width-width,height-height,width,height)
      image(bombI,width/10, height/5,75,75)
      image(soldierI,width/10, height/3,75,75)
      image(bulletI,width/10, height/2,75,75)
     textSize(90) 
      fill("yellow")
      text("Market :",width/2,height/10)
      textSize(40) 
      fill("red")
text("="+" ₹ 1000",width/2,height/4)
text("="+" ₹ 500",width/2,height/2.5)
text("="+" ₹ 100",width/2,height/1.75)

      text("="+"1"+"Bomb",width/4,height/4)
      text("="+"1"+"Soldier",width/4,height/2.5)
      text("="+"1"+"Bullet",width/4,height/1.75)
      
      text("=",width/35.2,height/20)
      text("=",width/35.2,height/10)
      text("=",width/35.2,height/6.5)
      text("=",width/35.2,height/4.65)

         image(bombI,width/100.8, height/500,25,25)
      image(soldierI,width/100.8, height/15,25,25)
       image(bulletI,width/120.8, height/8,25,25)
         image(lootI,width/120.8, height/5.7,30,30)

       
  
    }
    if(gameState===5){
      image(titleSlideI5,width-width,height-height,width,height)
      image(bombI,width/10, height/5,75,75)
      image(soldierI,width/10, height/3,75,75)
      image(bulletI,width/10, height/2,75,75)
     textSize(90) 
      fill("yellow")
      text("Market :",width/2,height/10)
      textSize(40) 
      fill("red")
text("="+" ₹ 1000",width/2,height/4)
text("="+" ₹ 500",width/2,height/2.5)
text("="+" ₹ 100",width/2,height/1.75)

      text("="+"1"+"Bomb",width/4,height/4)
      text("="+"1"+"Soldier",width/4,height/2.5)
      text("="+"1"+"Bullet",width/4,height/1.75)
      
      text("=",width/35.2,height/20)
      text("=",width/35.2,height/10)
      text("=",width/35.2,height/6.5)
      text("=",width/35.2,height/4.65)

         image(bombI,width/100.8, height/500,25,25)
      image(soldierI,width/100.8, height/15,25,25)
       image(bulletI,width/120.8, height/8,25,25)
         image(lootI,width/120.8, height/5.7,30,30)
    }
    if(soldier.isTouching(Solstop)){
      soldier.velocityX=0
    }
    if(gameState===6){
      image(titleSlideI6,width-width,height-height,width,height)

    }
    if(gameState===7){
      game.play()
      image(titleSlideI7,width-width,height-height,width,height)
      soldier.visible=true
      soldier.velocityX=5
      soldier2.visible=true
      soldier2.velocityX=-5
 
      textSize(40) 
      fill("red")

      
      text("=",width/8.5,height/20)
      text("=",width/8.5,height/10)
      text("=",width/8.5,height/6.5)
      text("=",width/8.5,height/4.7)

         image(bombI,width/10, height/500,25,25)
      image(soldierI,width/10, height/15,25,25)
       image(bulletI,width/10, height/8,25,25)
       image(lootI,width/10, height/5.7,30,30)



      }
   drawSprites();
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)

}