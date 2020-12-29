var database
var gameState=0
var playerCount=0
var form,player,game
var allplayers
function setup(){

    createCanvas(400,400);
    database=firebase.database()

    game=new Game()
    game.getState()
    game.start()

    
}

function draw(){
    //background("grey");
    if (playerCount===4){
        game.update(1) 
    }
   // console.log(gameState)
    if (gameState===1){
      //  console.log(gameState)
        clear();
        game.play();
    }
    
}