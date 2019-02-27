

var mainRandNum = 0;
var crystals = [0,0,0,0];
var win = 0;
var loss = 0;
var score = 0;
var resetGame = 0;





// Main Random variable generator function 

 $(document).ready (function  (){


    function mainRandNum() {

        mainRandNum = Math.floor(Math.random()* 102)+19;

    }
 

 // Crystal Random variable generator function 

    function assignCrystalRand(){
    
        for(var i = 0; i<crystals.length; i++){

          crystals[i] = Math.floor(Math.random()* 12)+1;

        }
   }


 // win/loss condition 
    
    function gameOperation (){

        if(score === mainRandNum) {

        win += 1;
        console.log("you won");
        }
        else if(score > mainRandNum) {

        loss += 1;
        console.log("you loss");
        }

   
    }

// Reser/New Game condition 

    function resetGame (){
        mainRandNum();
        score = 0;
        assignCrystalRand();
        
    }


})