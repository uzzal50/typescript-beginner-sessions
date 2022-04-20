"use strict";
//function signatures
//eg : 1
let greet;
greet = (name, lname) => {
    console.log(`name is ${name} and last name is ${lname}`);
};
greet('ujol', 'kc');
//eg : 2
let kc;
kc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    return numberOne - numberTwo;
};
//eg : 3
let iyer;
iyer = (ninja) => {
    console.log(`${ninja.name} is ${ninja.lname}`);
};
//function bascis
const add = (a, b, c) => {
    //c is optional
    console.log(a + b);
    console.log(c);
};
add(5, 5);
