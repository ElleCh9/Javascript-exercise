var messages= '';
var diceP1= 0;
var diceP2= 0;


function diceRollPlayer1(){
    var randomNumber= Math.round(Math.random()*6);
    if(randomNumber==0){
        randomNumber=randomNumber+1;
    }
    return randomNumber;
}

function diceRollPlayer2(){
    var randomNumber= Math.round(Math.random()*6);
      if(randomNumber==0){
        randomNumber=randomNumber+1;
    }
    return randomNumber;
}
 var diceP1= diceRollPlayer1();
 var diceP2= diceRollPlayer2();
 var dpl1= document.getElementById('dpl1').innerText= diceP1;
 var dpl2= document.getElementById('dpl2').innerText= diceP2;

 function returnResult(par1,par2){
    if(par1>par2){
         messages= 'Player 1 WIN';
    }  else if(par1===par2){
        messages= 'fifty fifty';
    } else {
        messages= 'Player 2 WIN'
    }
    return messages
 }

var elem= document.getElementById('winner').innerText= returnResult(diceP1,diceP2);
 

        









