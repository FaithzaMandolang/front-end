// 1. IIFE(immediately invoked function expression) = fungsi yang dipanggil secara langsung. 
//fungsi yang tidak memiliki nama, dan berjalan sendiri. anonymous function

// cara 1
// (function (){
//     //code
//     console.log("hello world");
// }) (); //tidak ada argument, parameter, return value

// // cara 2
// let output = (function (fullName){
//     return "helo " + fullName
// }) ('faith');

//console.log(output);

// 2. Callback = memanggil fungsi lain dalam argument dari suatu fungsi yang lain
// atau memanggil suatu fungsi dalam suatu fungsi yang lain
// fungsi yang dikirim ulang, selalu berbentuk anonymous function

// cara 1 (tidak ada argument, parameter, return value)
// function sayHello(callBack){
//     callBack()
// }

// sayHello(function (){
//     console.log("hello world")
// })

//cara 2 (with parameter, argument, return value)
function sayHello(callBack){ //fungsi yang memanggil callback. parameter callback adalah argument dari anonymous function
    let result = callBack("faith") //anonymous function saat dipanggil jadi nama callback
    return result;
}

let output = sayHello(function (fullName){ //fungsi yang menjadi parameter atau bagian dari callback
    return "hello " + fullName
})

console.log(output)