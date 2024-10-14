//1. IIFE
let bmi = (function (berat, tinggi){
     return berat / (tinggi*tinggi)
 }) (50, 1.70);

console.log("Body Mass Index", bmi)

//2. CallBack
function index(callBack){
    let result = callBack(50,1.70)
    return result;
}

let bodyMI = index(function (berat, tinggi){
    return berat/(tinggi*tinggi)
})

console.log("body Mass Index", bodyMI)