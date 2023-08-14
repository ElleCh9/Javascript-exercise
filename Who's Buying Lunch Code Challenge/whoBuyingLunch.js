/*

Who's Buying Lunch? Code Challenge

You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

*/

// array

var myArr=['Jonny','Angela','Mario','Pippo','Pluto','Max'];

function whoBuyLunch(arr){
    var arrLengh= arr.length;
    var random= Math.round(Math.random() * arrLengh);
    var pickA_Name= arr[random];
    var mex= pickA_Name +' is going to buy lunch today!';
    return mex;
}