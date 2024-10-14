//rest parameter & spread operator

//1. rest parameter = parameter yang mewakili nilai dari semua parameter (menggabungkan element" terpisah menjadi sebuah array)
//(...params) = params > nama yang mewakili semua parameter

//tanpa rest parameter
const funct1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
}

//funct1(1, 2, 3)

//menggunakan rest parameter
const funct2 = (...params) => {
    console.log(params)
}

//funct2(0, 9, 8, 7, 6)

const funct3 = (param1, param2, param3, ...params) => { //rest parameter tidak boleh didepan
    console.log(param1, param2, param3)
    console.log(params)
}

//funct3(1,2,3,4,5,6,7,8,9) //selain 1 2 3 akan disimpan di params(sisa dari parameter diawal akan tersimpan di rest parameter)

//MINI EXERCISE
const penjumlahan = (a, b, c, d, e) => {
    let arr = [a,b,c,d,e]
    let hasil = 0
    arr.forEach((item) => (hasil += item))
    return hasil
}
//console.log(penjumlahan(1,2,3,4,5))

const jumlah = (...params) => {
    let hasil = 0
    params.forEach((item) => (hasil += item))
    return hasil
}
//console.log(jumlah(1,2,3,4,5))

//2. spread Operator = memecahkan array menjadi element" (bertolak belakang dengan rest parameter)
// let number=[1,2,3,4,5]
// console.log(number) //masih array
//console.log(...number) //bukan lagi array

//kapan menggunakan Spread Operator?

//1. saat membuat duplikat array
// let number2 = number
// number.push(6)
// console.log(number2) //salah cara duplikasi

// let number2 = [number] //array dalam array
// console.log(number2)

// let number3 = [...number]
// console.log(number2)

//2. menggabungkan array
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let number = arr1.concat(arr2) //ES5
// console.log(number)
// let number1 = [...arr1,...arr2] //ES6
// console.log(number1)

//Object    
//1. duplikat object
const john = {
    fullName : "John Doe",
    age : 30
}  

const john1 = {...john, address : "manado"}
console.log(john)
console.log(john1)

//2. menggabungkan object
let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}

//let combined