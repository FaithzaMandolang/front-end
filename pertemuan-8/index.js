//JavaScript Object and Conditional

//OBJECT
// sama seperti array yg dapat menyimpan banyak data, namun data dalam object akan diakses melalui properti
//Deklarasi object
//1. object literal > mengakses object secara langsung
// let john = { //nama object
//     firstName : "John",
//     age : 30,
//     isMarried : true,
//     grade : [50, 70,90]
// };

//console.log(john)

//mengakses properti dalam object
// 1. dot notation
// console.log(john.age)
// john.age = 31 //ubah nilai
// console.log(john)
// john.job = "teacher" //tambah properti baru karena properti job tidak ada dari awal

// 2. bracket notation
// console.log(john["grade"])
// john["Nationality"] = "Indonesia" //tambah properti
// console.log(john)

//2. object method > fungsi dalam sebuah object
// let john = { //nama object
//     firstName : "John",
//     age : 30,
//     isMarried : true,
//     grade : [50, 70,90],
//     sayGreeting : function(){
//         console.log("helo my name is " + this.firstName); //this. akan mengakses properti diluar fuction
//     }
// };

//john.sayGreeting()

//3. object inside object
// let john = { //nama object
//     firstName : "John",
//     age : 30,
//     isMarried : true,
//     grade : [50, 70,90],
//     sayGreeting : function(){
//         console.log("helo my name is " + this.firstName); //this. akan mengakses properti diluar fuction
//     },
//     address: {
//         street : "jl.Arnold Mononutu",
//         city : "Minahasa Utara",
//         province : "Sulawesi Utara",
//         postalCode : 95371
//     }
// };
// console.log(john)
// console.log(john.address)
// console.log(john.address.city) //mengakses properti dari object dalam object

//4. delete properti dalam object
// delete john.grade
// console.log(john)

//CONDITIONAL
//1. if else
//jika suhu hari ini lebih dari atau sama dengan 37, tampilkan suhu hari ini panas. 
//jika tidak tampilkan suhu hari ini dingin
// let temp = 37
// if(temp >=37){
//     console.log("suhu hari ini panas")
// }
// else{
//     console.log("suhu hari ini dingin")
// }

//2. nested if
//jika nilai student 100-80 tampilkan grade A
//jika nilai 79-70 tampilkan grade B
//jika nilai 50-69 tampilkan grade C
//jika nilai dibawah 50 tampilkan grade D
let grade = 100
if(grade >= 80 && grade <=100){
    console.log("Grade A")
}
else if(grade >=70 && grade < 80){
    console.log("Grade B")
}
else if(grade >= 50 && grade < 70){
    console.log("Grade C")
}
else {
    console.log("Grade D")
}

//3. switch-case > seperti nested if tapi hanya untuk nilai == atau 1 nilai saja, bukan range
//jika angka 1 tampilkan januari, dan seterusnya sampai angka 12 tampilkan desember
//selain itu tampilkan not found
let number = 2
switch(number){
    case 1: 
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("Maret")
        break;
    case 4:
        console.log("April")
        break;
}
