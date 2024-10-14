//1.
const calculateAge = (birthYear) => 2019 - birthYear;

function yearUntilRetirement({ year, firstName }) {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
}

yearUntilRetirement({ year: 1987, firstName: 'John' });

//2.
const addNumber = (...numbers) => {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); // Menggunakan reduce untuk menjumlahkan
  
    return sum;
  }
console.log(addNumber(1,2,3,4,5,6,7));

//3. 
const phi = 3.14;
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

const area21 = calculateArea({ radius: 21, power: 2 });
const area7 = calculateArea({ radius: 7, power: 2 });

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

//4.
const makeAjaxRequest = (url ='www.google.com', method = "GET") => {
console.log(url, method);
}
    
makeAjaxRequest();