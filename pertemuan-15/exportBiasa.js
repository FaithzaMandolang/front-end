//2.
const addNumber = (...numbers) => {
    let sum = 0
    let result = numbers.map((item) => (sum += item));
  
    return result;
  }

//3. 
let phi = 3.14
let power = 2
let radius = 0

const calculateArea = () => phi * Math.pow(radius, power)

radius = 21
const area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({radius: radius, power: 2 });

//4.
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
  }


export {addNumber, calculateArea, area21, area7, makeAjaxRequest}