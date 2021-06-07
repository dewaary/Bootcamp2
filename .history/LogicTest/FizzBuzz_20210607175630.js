
// Install prompt-sync for Getting User Input
const prompt = require('prompt-sync')({sigint: true});
const n = prompt('Input n = ');


for (let i = 1; i<n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

