
const isPalindrome = (inStr) => {
    inStr = inStr.toLowerCase();
    for (let i=0; i<inStr.length; i+=1) {
        if(inStr[i] !== inStr[inStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('Radar'));
console.log(isPalindrome('Malam'));
console.log(isPalindrome('Kasur ini rusak'));
console.log(isPalindrome('Ibu Ratna antar ubi'));
console.log(isPalindrome('Malas'));
console.log(isPalindrome('Makan nasi goreng'));
console.log(isPalindrome('Balonku ada lima'));
