'use strict';

const data = require('./data.json');

const FindAllelectronic = (findElectronic) => {
    let dataBulk = [];
    for(let i in data) {
        let dataJson = data[i];
        if(dataJson.type == "electronic") {
            let resp = {
                nameRoom:dataJson.placement.name,
                nameItem:dataJson.name,
                nameType:dataJson.type,
                nameTags:dataJson.tags,
            }
            dataBulk.push(resp);
        }        
    }
    console.log(dataBulk);
    return true;
}

console.log(FindAllelectronic());







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





