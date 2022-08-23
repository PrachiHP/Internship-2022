// 1. let and const
console.log('before initialization: ', greeting);
let greeting = "say Hi";
let times = 4;
const PI = 3.14;

if (times > 3) {
    console.log('PI value: ', PI);
    console.log('times value: ', times);
    let hello = "say Hello instead";
    console.log('hello value: ', hello);
}
console.log('global hello value: ', hello);
console.log('greeting value: ', greeting);

// 2. Arrow functions
//Multi-line with return
let sumTotal = (number1, number2) => {
    let total = number1 + number2;
    return total;
}
// Single line
let sum = (number1, number2) => number1 + number2;

// Single line and no parentheses
let double = n => n * 2;

// 3. Multiline strings
// ES5 version
var poemData = 'Johny Johny Yes Papa,\n'
    + 'Eating sugar?  No, papa!\n'
    + 'Telling lies? No, papa!\n'
    + 'Open your mouth Ah, ah, ah!';
// ES6 version
let greetingMsg = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`;
console.log('Message value: ', greetingMsg);

// 4. Template literals
let firstName = 'Javascript';
let lastName = 'Essentials';
let courseName = `My name is ${firstName} ${lastName}`;
console.log('Course name value: ', courseName);

// 5. Parameters handling
// 5.1 Default parameters
let calculateArea = (height = 100, width = 50) => {
    // Area calculation logic
    console.log('height value', height);
    console.log('width value', width);
}
calculateArea();
calculateArea(200);
calculateArea(200, 250);

// 5.2 Rest parameters
// Example 5.2.1
function sum(...theArgs) {
    console.log('Args', theArgs);
    // let total = 0;
    // for (const arg of theArgs) {
    //   total += arg;
    // }
    // return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// Example 5.2.2
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// 5.3 Named parameters via destructuring
function doSomthing({ a = 'info', b, c = false }) {
    console.log(a, b, c);
}
doSomthing({ a: 'test', b: 1, c: true });
doSomthing({ b: 2, c: true });

// 5.4 Spread operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// 6. Destructuring assignment
// ES5 version
var fruitsList = ["Apple", "Banana"];
var p = o[0];
var q = o[1];
// 6.1 Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;  // Array destructuring assignment
console.log('a vlaue: ', a);
console.log('b vlaue: ', b);

// 6.2 Object Destructuring
let person = { name: "Peter", age: 28 };
let { pname, page } = person; // Object destructuring assignment
console.log('Person name: ', pname);
console.log('Person age: ', page);

// 7. Enhanced object literals
// 7.1 Remove duplication when object property name and local variable name are same
function createMachine(name, status) {
    console.log({
        name,
        status
    });
}
createMachine('AC', 'QA passed');

// 7.2 Computed property
let prefix = 'machine';
let machine = {
    [prefix + '_name']: 'server',
    [prefix + '_hours']: 10000
};

console.log(machine['machine_name']);
console.log(machine['machine_hours']);

// 7.3 Concise method syntax
let server = {
    machine: 'Computer',
    restart() {
        console.log("The " + this.name + " is restarting...");
    }
};

// 8. Promises
// Example 1
const myFirstPromise = new Promise((resolve, reject) => {
    // Resolve
    setTimeout(() => {
        resolve("Success!");
    }, 250);

    // Reject
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

myFirstPromise
    .then((successMessage) => {
        console.log(`Yay! ${successMessage}`);
    })
    .catch((error) => {
        console.log(`Got error ${error}`);
    });

// Example 2  Chaining then() calls
asyncFunc1()
    .then(result1 => {
        // Use result1
        return asyncFunction2(); // (A)
    })
    .then(result2 => { // (B)
        // Use result2
    })
    .catch(error => {
        // Handle errors of asyncFunc1() and asyncFunc2()
    });

// Example 3 Executing asynchronous functions in parallel 
Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
    .then(([result1, result2]) => {

    })
    .catch(err => {
        // Receives first rejection among the Promises
    });

// 9. Classes
class UserProfile {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);
    }
}
let obj = new UserProfile('John', 'Smith');
obj.getName();

// 11. for-of loop
const iterable = ['a', 'b'];
for (const x of iterable) {
    console.log(x);
}

const list = ['Apple', 'Pineapple'];
for (const [index, element] of list.entries()) {
    console.log(`${index}. ${element}`);
}

// 12. String methods
'hello'.startsWith('hell');
'hello'.endsWith('ello');
'hello'.includes('ell');
'doo '.repeat(3);

// 13. Number methods
console.log(Number.isInteger(1.05));
console.log(Number.isInteger(1));
console.log(Number.isInteger(-3.1));
console.log(Number.isInteger(-3));

console.log(Number.isSafeInteger(number));
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isNaN('???'));

// 14. Math methods
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(3));

console.log(Math.trunc(3.1));
console.log(Math.trunc(3.9));
console.log(Math.trunc(-3.1));
console.log(Math.trunc(-3.9));
