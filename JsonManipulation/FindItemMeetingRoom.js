'use strict';

const data = require('./data.json');

const FindData = (findMeetingRoom) => {
    let dataBulk = [];
    for(let i in data) {
        let dataJson = data[i];
        if(dataJson.placement.name == "Meeting Room") {
            let resp = {
                nameRoom:dataJson.placement.name,
                nameItem:dataJson.name,
            }
            dataBulk.push(resp);
        }        
    }
    console.log(dataBulk);
    return true;
}

console.log(FindData());