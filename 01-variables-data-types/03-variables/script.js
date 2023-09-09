// Ways to declare a variable
// var, let, const

let firstName = 'john';
let lastName = 'Doe';

console.log(firstName, lastName)

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Re-assigning Variables
age = 31;

console.log(age)

let score;
score = 1;
console.log(score)

if (true) {
    score = score + 1
}

console.log(score)

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr);

const person = {
    name: 'Brad'
};

person.name = 'Rapoo'
person.email = 'rapoo.com'

console.log(person)

//Declear Mutiple values at once
let a, b, c;
const d = 10, e = 20;
console.log(d);
console.log(a)