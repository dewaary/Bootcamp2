'use strict';

const data = require('./data.json');

const FindData = (findMeetingRoom) => {
    for(let i in data) {
        let dataJson = data[i];
        if(dataJson.placement.room_id == 3) {
            console.log(dataJson.name);
        }else {
            console.log(i);
        }
        
    }
    return true;
}

console.log(FindData());







// const isPalindrome = (inStr) => {
//     inStr = inStr.toLowerCase();
//     for (let i=0; i<inStr.length; i+=1) {
//         if(inStr[i] !== inStr[inStr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }



// const fs = require('fs');

// var rawdata = fs.readFileSync('data.json');

// jsonQuery('placement[name=Meeting Room].name', {
//     rawdata: rawdata
    
// })





