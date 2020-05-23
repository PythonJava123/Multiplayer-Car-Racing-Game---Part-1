class Player{
    consturctor(){

    }
  
 getCount(){

 var playerREF = database.ref('playerCount');
 playerREF.on("value", function(data){

 playerCount = data.val();

 })
   }

 updateCount(playerCount){

 database.ref('/').update({

 playerCount: playerCount

 })
 }

 update(name){

 var playerIndex = "player" + playerCount;
 database.ref(playerIndex).set({

  name: name  

 })
 }
 
}