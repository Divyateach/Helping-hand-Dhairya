class Game{
constructor(){

}



start(){
form=new Form()
form.display()
player=new Player
playerCount=player.getCount()
soldier=createSprite(width/10,height/1.47,25,50)
soldier.addImage(soldierI)
soldier2=createSprite(width/1.1,height/1.47,25,50)
soldier2.addImage(soldier2I)
soldiers=[soldier,soldier2];
}

play(){
  Player.GetplayersInfo()
  drawSprites()
  if(allPlayers!==undefined){
      var index=0
      for(var plr in allPlayers){
          index+=1
          var x=allPlayers[plr].SX
          var y=allPlayers[plr].SY
          soldiers[index-1].SX=x
          soldiers[index-1].SY=y
          if(index===player.index){
            stroke(15)
            fill("red")
            ellipse(x,y,70,70)
            console.log("key")
            this.playerControl() 
        }
        
      }
      
      drawSprites();
  }


}

playerControl(){
  if(keyDown(UP_ARROW)){
    player.velocityY=-10
    console.log("key working")
    player.updateThings()
    }   
}
}