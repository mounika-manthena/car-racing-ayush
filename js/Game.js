class Game{
    constructor(){
    }
getState(){
 var gamestateref=database.ref("gameState")
 gamestateref.on("value",function(data){
     gameState=data.val()
 }) 
}
update(state){
  database.ref("/").update({
      gameState:state
  })  
}
async start(){
   if (gameState===0){
player=new Player()
var playercountref=await database.ref("playerCount").once("value")
if (playercountref.exists()){
    playerCount=playercountref.val()
    player.getCount()
}

form=new Form ()
form.display()
   }
}
play(){
    console.log("play entered")
    form.hide();
    textSize(30)
    text("gamestart",120,100)
    Player.getPlayerInfo()
    if (allplayers!==undefined){ 
       var displayposition=130
       for (var plr in allplayers ){
           if (plr==="player"+player.index){
               fill("red")
           }
           else {
               fill("black")
           }
       
       displayposition+=20
       textSize(15)
    text(allplayers[plr].name+": "+allplayers[plr].distance,120,displayposition)
    }
}
if (keyDown("UP_ARROW")&&player.index!==null){
    player.distance+=50
    player.update()
}
}
}