'use strict';

const data = require('./data.json');

const FindBrown = (findBrown) => {
    let dataBulk = [];
    for(let i in data) {
        let dataJson = data[i];
        if(dataJson.tags == ["brown"]) {
            let resp = {
                inventory:dataJson.inventory_id,
                name:dataJson.name,
                nameType:dataJson.type,
                nameTags:dataJson.tags,
                PlacementRoomId:dataJson.placement.room_id,
                PlacementName:dataJson.placement.name,
            }
            dataBulk.push(resp);
        }        
    }
    console.log(dataBulk);
    return true;
}

console.log(FindBrown());