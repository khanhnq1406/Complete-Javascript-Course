let js = 'amazing';

console.log(1 + 14 + 16 + 15 + 24);

// Values and Variables
console.log('------- Values and Variables -------');
const myFirstName = "Nguyen";
const myLastName = "Quoc Khanh";
let person = 'Khanh';
const PI = 3.1415;

console.log(myFirstName + " " + myLastName);
console.log(person);
console.log(PI);


// Assignments
let country = 'Viet Nam';
let continent = 'Asia';
let population = 98943593;

console.log(country);
console.log(continent);
console.log(population);


// Data types
console.log('------- Data types -------');
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'Yessss!!!';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 2022;
console.log(typeof year);

// Assignments
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
console.log('------- let, const and var -------');
language = 'Vietnamese'
// isIsland = true; //TypeError: Assignment to constant variable.

// Basic operators
console.log('------- Basic operators -------');
const now = 2022;
const ageKhanh = now - 2001;
const ageKane = now - 2012;
console.log(ageKhanh, ageKane);
console.log(ageKhanh * 2, ageKane / 10, 2 ** 3);
// 2 ** 3 means 2 to the number of 3 = 2 * 2 * 2

const firstName = `Nguyen`;
const lastName = `Quoc Khanh`;
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparision operators
console.log(ageKane > ageKhanh);
console.log(ageKhanh >= 18);

const isFullage = ageKhanh >= 18;

// Assignment
let halfPopulation = (population / 2);
console.log(halfPopulation);
population += 1;
console.log(population);
const FinlandPopulation = 6000000;
console.log(population > FinlandPopulation);
let averagePopulation = 33000000;
console.log(population < averagePopulation);

// String
const birthYear = 2001;
const job = 'student';
const khanh = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(khanh);

const khanhNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(khanhNew);

console.log(`String with
multiple
lines`);


// Assignment
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

// Taking Decisions: if/else Statements
/*
1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`);
}
population = 13;
averagePopulation = 33;
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

population = 130;
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

//Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Khanh'));
console.log(Boolean(''));
const money = 0;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log('You should get a job!')
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===
// console.log(`---Equality Operators: == vs. ===---`);
// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log (`Cool. 23 is an amazing number!`);
// } else if (favourite === 9) {
//     console.log(`9 is also a cool number`);
// } else {
//     console.log(`Number is not 23 or 9`);
// }

// if (favourite !== 9) console.log(`Why not 9?`);

// // Assignment
// let numNeighbours = Number(prompt(`How many neighbour countries does your country
// have?`));
// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// }
// else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }

// Logical Operators
console.log(`---Logical Operators---`);
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

language = `English`;
population = 23;
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
console.log(`---------The switch Statement---------`);
const day = `sunday`;

if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
}
else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
}
else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
}
else if (day === `friday`) {
    console.log(`Record videos`);
}
else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend :D`);
}
else {
    console.log(`Not a valid day!`);
}

// Assignment
switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}
// The conditional (ternary) operator
console.log(`---------The conditional (ternary) operator---------`);
const age = 16;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

// Assignment
population = 97.34
console.log(`${country}'s population is ${population > 33 ? `above average` : `below average`}`);
population = 13
console.log(`${country}'s population is ${population > 33 ? `above average` : `below average`}`);
population = 130
console.log(`${country}'s population is ${population > 33 ? `above average` : `below average`}`);
population = 97.34