//Array In JavaScript
//menyimpan banyak data dalam satu variable dengan membuat array

//1. cara Array Literal
// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

//2. cara kata kunci new
// let number2 = new Array(6, 7, 8, 9, 10)
// console.log(number2)

//tipe data yang dapat disimpan dalam array
//1. numbers
//2. string
//3. mixed tipe data, termasuk boolean dan array yang baru
//let type = ["faith", 27, true, [4, 6]]
// console.log(type)

// mengambil panjang array
// console.log(type.length)

//cara mengakses element tertentu dalam array
//menggunakan index array

// console.log(type[1])
// console.log(type[3][1]) //mengambil data dalam sebuah array didalam array

//mengakses element terakhir dalam array
// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers3[numbers3.length-1])

//array method
numbers4 = [1, 2, 3, "hai", "helo", true, false]

//1. toString() > mengubah element menjadi string
//console.log(numbers4.toString())
//2. join() > menambahkan karakter sebagai pemisah
//console.log(numbers4.join("-"))
//3. pop() > menghapus element di index terakhir
//console.log(numbers4.pop())
//4. push() > menambahkan element baru di index terakhir
//console.log(numbers4)
//5. shift() > menghapus index paling awal
//console.log(numbers4)
//6. unshift() > menambahkan element baru di index paling awal
//console.log(numbers4)
//7. splice(index, jumlah, itemn,...,itemm) > menambahkan, menghapus, mengubah
//index : harus ditentukan index keberapa akan ditambahkan atau dikurangkan atau diubah
//jumlah : jumlah index yang akan dihapus (opsional)
//item : item yang akan ditambahkan untuk mengganti element
//prinsipnya hapus-ganti-tambah
numbers4.splice(2, 1) //hapus
console.log(numbers4)
numbers4.splice(1, 1, 1) //ganti
console.log(numbers4)
numbers4.splice(2, 0, 2, 3) //tambah
console.log(numbers4)

//8. concat() > menggabungkan beberapa array
buah = ["apel", "pisang", "anggur"]
sayur = ["kangkung", "gedi"]

let makanan = buah.concat(sayur) //harus ada variable yang menampung
console.log(makanan)

//9. slice() > mengambil beberapa index (harus ada variable yang menampung)
let sayuran = makanan.slice(3, 5)
console.log(sayuran)


