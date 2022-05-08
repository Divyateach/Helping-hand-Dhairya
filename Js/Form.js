class Form{
constructor(){
    this.button1=createButton("Next")
    this.but6to7=createButton("Next")
this.help=createButton("Help")
    this.Name=createInput("Name")
    this.emailID=createInput("Email Id")
    this.mobileNo=createInput("Mobile Number with country code")
    this.DOB=createInput("Date of birth(DD/MM/YY)")
    this.Password=createInput("Password")
    this.mobileNoLogin=createInput("Mobile Number with country code")
    this.mobileNoButton=createButton("Mobile Number")
    this.emailIDButton=createButton("Email Id")
    this.emailIdLogin=createInput("Email Id")
    this.signUp1=createButton("Sign Up")
    this.signUp2=createButton("Sign Up")
    this.signIn1=createButton("Sign In")
    this.signIn2=createButton("Sign In")
    
    this.buynow1=createButton("Buy now")
    this.buynow2=createButton("Buy now")
    this.buynow3=createButton("Buy now")
}
hide(){
    this.button1.hide()
    this.Name.hide()
    this.emailID.hide()
    this.mobileNo.hide()
    this.DOB.hide()
    this.Password.hide()
    this.mobileNoLogin.hide()
    this.mobileNoButton.hide()
    this.emailIDButton.hide()
    this.emailIdLogin.hide()
    this.signUp1.hide()
    this.signUp2.hide()
    this.signIn1.hide()
    this.signIn2.hide()
    this.but6to7.hide()
    help.hide()
}

styleSheetForInput(){
this.Name.class("inputStyle")
this.emailID.class("inputStyle")
this.mobileNo.class("inputStyle")
this.DOB.class("inputStyle")
this.Password.class("inputStyle")
this.emailIdLogin.class("inputStyle")
this.mobileNoLogin.class("inputStyle")


}

display(){
    this.but6to7.position(width/1.2,height/1.15) 
    this.but6to7.class("buttonStyle")
    this.but6to7.hide()
    this.help.hide()
    this.help.position(width/40,height/30)
    this.help.class("Help")
this.Name.hide()
this.emailID.hide()
this.mobileNo.hide()
this.DOB.hide()
this.Password.hide()
this.mobileNoLogin.hide()
this.mobileNoButton.hide()
this.emailIDButton.hide()
this.emailIdLogin.hide()

this.signUp1.hide()
this.signIn1.hide()
this.signUp2.hide()
this.signIn2.hide()
this.styleSheetForInput()
this.button1.position(width/1.2,height/1.15) 
this.button1.class("buttonStyle")

this.buynow1.hide()
this.buynow2.hide()
this.buynow3.hide()



    this.button1.mousePressed(()=>{
        

        if(gameState===0){
        gameState=1
        this.button1.hide()
        this.signUp1.show()
        this.signUp1.position(width/2,height/3)
        this.signUp1.class("buttonStyle")
        this.signIn1.show()
        this.signIn1.position(width/2,height/4)
        this.signIn1.class("buttonStyle")

    }



if(gameState===5||gameState===4){
gameState=6
this.buynow1.hide()
this.buynow2.hide()
this.buynow3.hide()
this.button1.hide()
}

if(gameState===6){
    
    this.but6to7.show()


}


    })
this.but6to7.mousePressed(()=>{
    gameState=7
    this.help.show()
    this.but6to7.hide()
    playerCount+=1
    //player.name=this.Name.value()
    player.index=playerCount
    player.addPlayer()
    player.updateCount(playerCount)
    player.getDistance()


})
    this.signUp1.mousePressed(()=>{
        if(gameState===1){
        gameState=2
        this.signIn1.hide()
        this.signUp1.hide()
        console.log(gameState)
        this.button1.hide()
        this.signUp2.show()
        this.Name.show()
        this.emailID.show()
        this.mobileNo.show()
        this.DOB.show()
        this.Password.show()

        this.signUp2.position(width/1.5,height/2) 
        this.signUp2.class("buttonStyle") 
            
        this.Name.position(width/2,height/10)
        this.emailID.position(width/2,height/6)
        this.mobileNo.position(width/2,height/4.3)
        this.DOB.position(width/2,height/3.3)
        this.Password.position(width/2,height/2.7)
        


    }
    }) 


        





    this.signIn1.mousePressed(()=>{
        if(gameState===1){
            gameState=3
            this.signUp1.hide()
            this.signIn1.hide()
            this.signIn2.show()
            this.signIn2.position(width/1.5,height/2) 
            this.signIn2.class("buttonStyle") 
      this.mobileNoButton.show()
      this.mobileNoButton.position(width/2.35,height/3)
      this.mobileNoButton.class("buttonStyle")
      this.emailIDButton.show()
      this.emailIDButton.position(width/1.7,height/3)
      this.emailIDButton.class("buttonStyle")
      this.Password.show()
      this.Password.position(width/2,height/2.6)

      this.emailIDButton.mousePressed(()=>{
          this.mobileNoButton.hide()
          this.emailIDButton.hide()
          this.emailIdLogin.show()
            this.emailIdLogin.position(width/2,height/3.3)
    })

    this.mobileNoButton.mousePressed(()=>{
        this.mobileNoButton.hide()
          this.emailIDButton.hide()
          this.mobileNoLogin.show()
    this.mobileNoLogin.position(width/2,height/3.3)
    
  })
        }
    })    
    
   /* this.signIn2.mousePressed(()=>{
gameState=4
this.mobileNoButton.hide()
this.emailIDButton.hide()
this.emailIdLogin.hide()
this.mobileNoLogin.hide()
this.signIn2.hide()
this.Password.hide()
this.buynow1.show()
this.buynow2.show()
this.buynow3.show()
this.buynow1.position(width/1.5,height/4)
this.buynow2.position(width/1.5,height/2.5)
this.buynow3.position(width/1.5,height/1.75)
this.buynow1.class("buttonStyle")
this.buynow2.class("buttonStyle")
this.buynow3.class("buttonStyle")
this.button1.show() 




swal({
    title: `You have succesfully sign in your account`,
    text:"Enjoy your Game",
    confirmButtonText: "OK"
    
  });

    })   */  
    this.signUp2.mousePressed(()=>{
        if(gameState===2){
        gameState=4
        this.signUp2.hide()
        this.Name.hide()
        this.emailID.hide()
        this.mobileNo.hide()
        this.DOB.hide()
        this.Password.hide()

             player.updateThings()
        player.name=this.Name.value()
        player.emailid=this.emailID.value()
        player.mobileno=this.mobileNo.value()
        player.dob=this.DOB.value()
        player.password=this.Password.value()

        swal({
            title: `Thank You! You have succesfully sign up your account`,
            text: "Enjoy your Game",
            confirmButtonText: "OK"
            
          });
          gameState=5
          
    this.buynow1.show()
    this.buynow2.show()
    this.buynow3.show()
this.buynow1.position(width/1.5,height/4)
this.buynow2.position(width/1.5,height/2.5)
this.buynow3.position(width/1.5,height/1.75)
this.buynow1.class("buttonStyle")
this.buynow2.class("buttonStyle")
this.buynow3.class("buttonStyle")
this.button1.show() 


    

    }
    })   
    
    


    
}
}