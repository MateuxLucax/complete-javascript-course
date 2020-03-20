// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var agr5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/


// ES5
/*
function driversLicence(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}
driversLicence(true);

// ES6

function driversLicence(passedTest) {
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}
driversLicence(true);
*/

/*

{
    let a = 1; // Block scoped
}

*/

// Strings ES6
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    let now = new Date().getFullYear();
    return now - year;
}

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
*/

// Arrow function

const years = [1990, 1965, 1982, 1936];

const ages6 = years.map(el => 2020 - el);
console.log(ages6);