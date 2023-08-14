// Esercizio BMI Calculator Advanced (IF/ELSE)

/* 

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

*/

// Dichiarazione variabili Altezza e peso


var p= 80;
var h= 176;

// Assegno alla variabile bmi il valore di ritorno della funzione bmiCalculator
var bmi= bmiCalculator(p,h);
var mess= bmiIndicator(bmi);

// Funzione bmiCalculator
function bmiCalculator(peso,altezza){
    // fix altezza
    altezza= altezza/100;
    var bmi=Math.round( peso/(altezza*altezza));
    return bmi;
   /* function bmiIndicator(bmi){
        if(bmi<18.5){
            console.log('Your BMI is '+ bmi + ', so you are underweight.');
        }
        else if(bmi>= 18.5 || bmi< 25){
            console.log('Your BMI is '+ bmi + ', so you havve a normal weight.');
        }
        else(bmi> 25)
            console.log('Your BMI is '+ bmi + ', so you are overweigth.');
        
    }*/
}
function bmiIndicator(bmi){
    if(bmi<18.5){
        return console.log('Your BMI is '+ bmi + ', so you are underweight.');
    }
    else if(bmi>= 18.5 || bmi< 25){
        return console.log('Your BMI is '+ bmi + ', so you havve a normal weight.');
    }
    else(bmi> 25)
        return console.log('Your BMI is '+ bmi + ', so you are overweigth.');}
 
/* Nota: volendo potevo innestare le funzioni */