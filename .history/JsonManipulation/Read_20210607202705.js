'use strict';
var jsonQuery = require('json-query')

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');

jsonQuery('people[country=NZ].name', {
    rawdata: rawdata
  })


