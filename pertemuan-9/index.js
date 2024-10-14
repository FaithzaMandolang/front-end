//JAVASCRIPT LOOP

//Array Object
let student = [
    {
        id : 1,
        firstName : "faith",
        grade : 90
    },
    {
        id : 2,
        firstName : "grace",
        grade : 90
    },
    {
        id : 3,
        firstName : "afirst",
        grade : 90
    }
]

// console.log(student)

//1. for = loop syntax = for(let i=nilai-awal; i=berapa x looping; i++)
// for(let i=0; i<student.length; i++) {
//     console.log(student[i])
// }
// for(let i=0; i<student.length; i++) {
//     console.log(student[i].firstName)
// }

//2. while = loop
// let i = 0
// while(i<student.length){
//     console.log(student[i].id)
//     i++
// }

//3. do - while = loop
// let i = 0
// do{
//     console.log(student[i].grade)
//     i++
// }while(i<student.length)

//4. array built-in method
//a. foreach()
student.forEach(function (params) { //params sama dengan i, merepresentasikan tiap array
    console.log(params.firstName)
})

//b. map(). menerima return value, yg akan disimpan dlm array baru
//bisa bgni
student.map(function (params) { //params sama dengan i, merepresentasikan tiap array
    console.log(params.firstName)
})
//bisa bgni juga
// let output = student.map(function (params) { //return akan disimpan pada output dalam bentuk array baru
//     return params.id
// })
// console.log(output)

//c. filter() untuk search/menampilkan object tertentu. memiliki return value seperti map()
// let output1 = student.filter(function(params){ //return akan disimpan pada output dalam bentuk array baru
//     return params.grade >= 90
// })
// console.log(output1)

//d. find() hanya akan mengambil 1 nilai/1 object saja, nilai paling atas
// let output2 = student.find(function(params){ //return akan disimpan pada output dalam bentuk array baru
//     return params.grade >= 90
// })
// console.log(output2)

//e. findIndex()
let output3 = student.findIndex(function(params){
    return params.firstName=='faith'
})
console.log(output3)