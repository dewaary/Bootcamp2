'use strict';

const data = require('./data.json');

const FindData = (findMeetingRoom) => {
    for(let i in data) {
        let dataJson = data[i];
        if(dataJson.placement.name == "Meeting Room") {
            // console.log(dataJson.name);
            let resp = {
                nameRoom:dataJson.placement.name,
                nameItem:dataJson.name,
            }
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





