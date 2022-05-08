class Player{
    constructor(){
this.name=null
this.index=null
this.emailid=null
this.loot=null
this.mobileno=null
this.dob=null
this.soldier=null
this.password=null
this.bomb=null
this.bullet=null
//playerCount=0
this.SX=0
this.SY=0
this.BoX=0
this.BoY=0
this.BuX=0
this.BuY=0 

    }

getCount(){
var PC=database.ref("playerCount")
PC.on("value",data=>{
    playerCount=data.val()
})
}
updateCount(count){
database.ref("/").update({
    playerCount:count
    
})
}

getDistance(){
    var D=database.ref("players/player"+this.index)
    D.on("value",data=>{
    var data=data.val()
    this.SX=data.SX
    this.SY=data.SY
    })
}


addPlayer(){
    var PlayerIndex="players/player"+this.index
    
    if(this.index===1){
        this.SX=width/10
        this.SY=height/1.47
    }
    else{
        this.SX=0
        this.SY=0
    }

    database.ref(PlayerIndex).set({
        name:this.name,
        emailid:this.emailid,
        loot:this.loot,
        mobileno:this.mobileno,
        dob:this.dob,
        soldier:this.soldier,
        password:this.password,
        bomb:this.bomb,
        bullet:this.bullet,
        SX:this.SX,
        SY:this.SY,
        BoX:this.BoX,
        BoY:this.BoY,
        BuX:this.BuX,
        BuY:this.BuY,
    })
}

updateThings(){
    var PlayerIndex="players/player"+this.index
    database.ref(PlayerIndex).update({
        name:this.name,
        emailid:this.emailid,
        loot:this.loot,
       mobileno:this.mobileno,
       dob:this.dob,
        soldier:this.soldier,
        password:this.password,
       bomb:this.bomb,
        bullet:this.bullet,
        SX:this.SX,
        SY:this.SY,
        BoX:this.BoX,
        BoY:this.BoY,
        BuX:this.BuX,
        BuY:this.BuY,
    })
}
static GetplayersInfo(){
var P=database.ref("player")
P.on("value",data=>{
    allPlayers=data.val()
})
    


}

}