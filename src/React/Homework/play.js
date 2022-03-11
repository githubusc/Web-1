console.log('Hello');

/* Variables ---------------------------*/
const myConstant = 'A Value';
let myLet = 'Timbuktu';
const myString = 'I went to the park yesterday';
const myNumber = 2;

console.log('A Let Variable: ', myLet);

/* Functions ---------------------------*/
const myFunction = (myNum) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

myFunction(1);
myFunction(2);
myFunction(3);
myFunction(4);
myFunction(5);

/* Data Types ---------------------------*/
const aString = 'I went to the park';
const aTemplateString = `${aString} yesterday`; // a template string allows a string to span multiple lines, to have variables inside a string. Use back ticks (``) to define a template string.
console.log('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aObject = {
    name: 'Steve Wang',
    email: 'steve@stevewang.com',
    age: 19
};
console.log('aObject', aObject);

const myArray = [
    'this is my string',
    { make: 'Honda', Model: 'CRV'},
    1234,
];
console.log('myArray', myArray);