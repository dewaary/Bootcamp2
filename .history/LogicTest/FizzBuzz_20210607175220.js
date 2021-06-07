// for (let i = 1; i< 15; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);