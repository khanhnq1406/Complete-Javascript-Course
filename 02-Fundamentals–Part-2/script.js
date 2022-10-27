'use strict';

// Function
console.log(`--------- Function ---------`);
function FruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = FruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = FruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Assignment
function DescribeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const vietNam = DescribeCountry('Viet Nam', 97.34, 'Ha Noi');
console.log(vietNam);
const unitedStates = DescribeCountry(`United States`, 329.5, `Washington, D.C.`);
console.log(unitedStates);
const finland = DescribeCountry(`Finland`, 6, `Helsinki`);
console.log(finland);

// Function Declarations vs. Expressions
console.log(`\n--------- Function Declarations vs. Expressions ---------`);
// Function Declarations
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(2001);

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(2001);

console.log(age1, age2);

// Assignment
function PercentageOfWorld1(population) {
    return (population/7900)*100;
}
const percentVietNam = PercentageOfWorld1(97.34);
console.log(percentVietNam);
const percentUnitedStates = PercentageOfWorld1(329.5);
console.log(percentUnitedStates);
const percentFinland = PercentageOfWorld1(6);
console.log(percentFinland);

const PercentageOfWorld2 = function(population) {
    return (population/7900)*100;
}
const percentVietNam2 = PercentageOfWorld2(97.34);
console.log(percentVietNam2);
const percentUnitedStates2 = PercentageOfWorld2(329.5);
console.log(percentUnitedStates2);
const percentFinland2 = PercentageOfWorld2(6);
console.log(percentFinland2);

//Arrow Functions
console.log(`\n--------- Arrow Functions ---------`);
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge1(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Kane`));

// Assignment
const PercentageOfWorld3 = population => (population/7900)*100;
const percentVietNam3 = PercentageOfWorld1(97.34);
console.log(percentVietNam3);
const percentUnitedStates3 = PercentageOfWorld1(329.5);
console.log(percentUnitedStates3);
const percentFinland3 = PercentageOfWorld1(6);
console.log(percentFinland3);

// Functions calling other functions
console.log(`\n--------- Functions calling other functions ---------`);
const cutPieces = function (fruit) {
    return fruit * 4;
}
function FruitProcessor1 (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}

console.log(FruitProcessor1(2, 3));

// Assignment
function DescribePopulation(country, population) {
    const percent = PercentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percent} of the world`;
}
console.log(DescribePopulation('Viet Nam', 97.34));
console.log(DescribePopulation('United States',329.5));
console.log(DescribePopulation('Finland',6));

// Arrays
console.log(`\n--------- Array ---------`);
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// const years = new Array(1991, 1984, 2001, 2022);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = `Kane`;
console.log(friends);

const firstName = `Kane`
const kane = [firstName, 'Nguyen', 2037 - 2001, 'student', friends];
console.log(kane);

// Exercise
const years = [1990, 2001, 2002, 2019, 2010];
const ageFirstElement = calcAge1(years[0]);
const ageSecondElement = calcAge1(years[1]);
const ageThirdElement = calcAge1(years[years.length - 1]);
console.log(ageFirstElement, ageSecondElement, ageThirdElement);
const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);

// Assignment
const populations = [97.34, 329.5, 6, 25.69];
console.log(populations.length === 4);
const percentages = [PercentageOfWorld1(populations[0]), PercentageOfWorld1(populations[1]), PercentageOfWorld1(populations[2]), PercentageOfWorld1(populations[3])];
console.log(percentages);

// Basic Array Operations (Method)
console.log(`\n--------- Basic Array Operations (Method) ---------`);
// Add elements
const newLength = friends.push('Jay'); // add last element
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add first element
console.log(friends);

// Remove elements
friends.pop(); // last
const popped = friends.pop(); 
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Kane'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Kane'));

// Assignment
const neighbours = ['Laos', 'Cambodia'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Laos')] = `Lao People's Democratic Republic`;
console.log(neighbours);

// Introduction to Objects
console.log(`\n--------- Introduction to Objects ---------`);
const khanh = {
    firstName: 'Nguyen',
    lastName: 'Quoc Khanh',
    age: 2037 - 2001,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(khanh);

console.log(khanh.lastName);

const nameKey = 'Name';
console.log(khanh['first' + nameKey]);
console.log(khanh['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about Khanh? Choose between firstName, lastName, age, job and friends");

// console.log(interestedIn);
// if (khanh[interestedIn]) {
//     console.log(khanh[interestedIn]);
// }
// else {
//     console.log('Wrong request!Choose between firstName, lastName, age, job and friends');
// }

// Assignment
const myCountry = {
    country: 'Viet Nam',
    capital: 'Ha Noi',
    language: 'Vietnamese',
    population: 97.34,
    neighbours: ['Laos', 'Cambodia'],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

khanh.location = 'Viet Nam';
khanh['instagram'] = '@iamkhnhs';
console.log(khanh);

// Challenge
console.log(`${khanh.lastName} has ${khanh.friends.length} friends, and his best friend is called ${khanh.friends[0]}`)

// Object methods
const khanhnq = {
    firstName: 'Nguyen',
    lastName: 'Quoc Khanh',
    birthYear: 2001,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        this.summary = `${this.lastName} is a ${this.calAge()}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} driver's license.`;
        return this.summary;
    },
};

console.log(khanhnq.calAge());
console.log(khanhnq['calAge'](khanhnq.birthYear));
console.log(khanhnq.age);
console.log(khanhnq.getSummary());

// Assignment
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(`${myCountry.population}`);
myCountry['population'] -= 2;
console.log(`${myCountry['population']}`);
myCountry.describe();
console.log(myCountry.checkIsland());

// Looping Arrays, Breaking and Continuing
console.log(`\n--------- Looping Arrays, Breaking and Continuing ---------`);

const khanhArray = [
    'Khanh',
    'Nguyen Quoc',
    2037 - 2001,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < khanhArray.length ;i++) {
    console.log(khanhArray[i], typeof khanhArray[i]);
    // types[i] = typeof khanhArray[i];
    types.push(typeof khanhArray[i]);
}

console.log(types)

const yearsArray = [1991, 2002, 1969, 2020];
const agesArray = [];

for (let i = 0; i < yearsArray.length; i++) {
    agesArray.push(2037 - yearsArray[i]);
}
console.log(agesArray);

// continue and break
console.log(`--- ONLY STRING ---`);
for (let i = 0; i < khanhArray.length ;i++) {
    if (typeof khanhArray[i] !== 'string') continue;
    console.log(khanhArray[i], typeof khanhArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < khanhArray.length ;i++) {
    if (typeof khanhArray[i] === 'number') break;
    console.log(khanhArray[i], typeof khanhArray[i]);
}

// Looping Backwards and Loops in Loops
console.log(`\n--------- Looping Backwards and Loops in Loops ---------`);

for (let i = khanhArray.length - 1; i >= 0 ;i--) {
    console.log(khanhArray[i], typeof khanhArray[i]);
}

// Assignment
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

console.log(populations);
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(PercentageOfWorld1(populations[i]));
}

console.log(`Percentages: `, percentages);
console.log(`Percentages 2: `, percentages2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'], 
    ['Norway', 'Sweden','Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: `, listOfNeighbours[i][j]);
    }
}

const percentages3 = [];

let counterWhile = 0;
while (counterWhile < populations.length) {
    percentages3.push(PercentageOfWorld1(populations[counterWhile]));
    counterWhile++;
}
console.log(percentages3);