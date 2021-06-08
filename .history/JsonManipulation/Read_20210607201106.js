// 'use strict';

// const fs = require('fs');

// let rawdata = fs.readFileSync('data.json');
// let data = JSON.parse(rawdata);

// data.rawdata.find(item => item.name == "Meeting Room")

const foo = { "results": [
    {
        "id": 12,
        "name": "Test"
    },
    {
        "id": 2,
        "name": "Beispiel"
    },
    {
        "id": 3,
        "name": "Sample"
    }
] };
foo.results.find(item => item.id === 2)