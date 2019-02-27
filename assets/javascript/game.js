

var mainRandNum = 0;
var crystals = [0,0,0,0];
var win = 0;
var loss = 0;
var score = 0;


 $(document).ready (function  (){
   
    // Main Random variable generator function -----------------------------
    function RandNum() {

        mainRandNum = Math.floor(Math.random()* 102)+19;
        $("#RandomNumber").text(mainRandNum);
    }
    RandNum();

 // Crystal Random variable generator function -------------------

    function assignCrystalRand(){
    
        for(var i = 0; i<crystals.length; i++){

          crystals[i] = Math.floor(Math.random()* 12)+1;
          
        }
   }
   assignCrystalRand ();

     // Reset/New Game condition ----------------------------------------

     function resetGame (){
        RandNum();
        score = 0;
        assignCrystalRand();
        
        }
  

 // win/loss condition -------------------------------------
    
    function gameOperation (){

        if(score === mainRandNum) {
        
        win += 1;
        $("#wins").text(win);
        resetGame ();
        
        }
        else if(score > mainRandNum) {
        
        loss += 1;
        
        $("#loss").text(loss);
        resetGame ();
        
        }
        
   
    }
  

// game on click button operation -------------------------------------------
    $(document).on("click", "#crystal1", 
    function(){
        
        score += crystals[0];
        gameOperation();
        $("#score").text(score);
    })

    $(document).on("click", "#crystal2", 
    function(){
        score += crystals[1];
        gameOperation();
        $("#score").text(score);
    })

    $(document).on("click", "#crystal3", 
    function(){
        
        score += crystals[2];
        gameOperation();
        $("#score").text(score);
    })

    $(document).on("click", "#crystal4", 
    function(){
        
        score += crystals[3];
        gameOperation();
        $("#score").text(score);
    })



})







