//A. Array
let people = ["Greg", "Mary", "Devon", "James"];
//1.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//2.
people.forEach(function (person) {
  console.log(person);
});
//3.
people.splice(people.indexOf("Greg"), 1);
console.log(people);
//4.
people.splice(people.indexOf("James"), 1);
console.log(people);
//5.
people.unshift("Matt");
console.log(people);
//6.
people.push("Jeremy");
console.log(people);
//7.
for (let q = 0; q < people.length; q++) {
  console.log(people[q]);
  if (people[q] === "Mary") {
    break;
  }
}
//8. mary or matt
let nepotisme = people.slice(2, 4);
console.log(nepotisme);
//9.
people.splice(2, 2, "Elizabeth", "Artie", "Jeremy");
console.log(people);
//10.
let withBob = people.concat(["Bob"]);
console.log(withBob);

//B.Object

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

console.log(programming);

//1.
programming.languages.push("Go");
console.log(programming.languages);
//2.
programming["difficulty"] = 7;
console.log(programming.difficulty);
//3.
delete programming.jokes;
//4.
programming.isFun = true;
console.log(programming);
console.log(programming.isFun);
//5.
let output = programming.languages.map((lang, index) => `${index} - ${lang}`);
console.log(output);
