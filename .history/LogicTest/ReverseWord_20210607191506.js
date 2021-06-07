// function ReverseWord(str) {
//     var reversed = str.split("").reverse().join("");
//     console.log(reversed);
// }

// ReverseWord("Aku Kamu Suka");
const prompt = require('prompt-sync')({sigint: true});
let string = prompt('Input n = ');

function ReverseWord(string){
    var words = string.split(' ');
    var result = [];
    for(var i = 0; i < words.length; i ++){
      result.push(words[i].split('').reverse().join(''));
    }  
    return result.join(' ');
 }
 
 console.log(ReverseWord('I am A Great human'));