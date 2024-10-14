//string Literals, arrow function, default parameter

//1. String Literals
let fullName = "Faithza Mandolang";
let age = 20;
let address = "Tomohon"

let kalimat = "Halo nama saya " + fullName + ", umur saya " + age + ", alamat saya " + address
//console.log(kalimat)

//^ concat string & variable, kalo cuma sediki masih memungkinkan, mar klo so banyak so nd efisien

//gunakan tanda ${nama variable}

let kalimat1 = `halo nama saya ${fullName}, umur saya ${age}, asal dari ${address}` //pake back tick
//console.log(kalimat1)

//2. Arrow Function - bentuk lain dari penulisan fungsi - kelebihannya = jika fungsi hanya berisi 1 baris dengan format return, return tidak perlu ditulis, karena langsung diketahui kalau formatnnya return
//fungsi lama
function sayGreetings(){
    return `hello my name is ${fullName}`
}
//console.log(sayGreetings())

//penulisan baru
const sayGreetings1 = (fullName) =>`hello my name is ${fullName}`
//console.log(sayGreetings1("Faithza Mandolang"))

//Arrow function pada IIFE
let output = (() => "Hello")();
//console.log(output)

let number = [1,2,3,4,5]
let output1 = number.map((item)=>item)
console.log(output1)

//3. Default Parameter
//penulisan lama
const sayGreetings2 = (fullName, age, address) => {
    if(fullName===undefined){
        fullName="Faithza Mandolang"
    }
    if(age===undefined){
        age = 20
    }
    if(address===undefined){
        address="Tomohon"
    }
    console.log(`halo, nama saya ${fullName}, umur saya ${age}, alamat ${address}`)
}
//sayGreetings2();

//penulisan baru
const sayGreetings3 = (fullName="Faithza Mandolang", age=20, address="Tomohon") => {
    console.log(`halo, nama saya ${fullName}, umur saya ${age}, alamat ${address}`)
}
//sayGreetings3()