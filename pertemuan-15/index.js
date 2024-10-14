import { fullName as nama, nomor } from "./utils.js"; 
//as dipakai untuk alias. bisa digunakan di import atau export
console.log(nama)
console.log(nomor)

//import default
import sayGreetings from "./utils.js"; //dapat menggunakan alias tanpa menggunakan as
console.log(sayGreetings())

import ucapkanSalam from "./defaultexim.js"; //dapat menggunakan alias tanpa menggunakan as
console.log(ucapkanSalam())