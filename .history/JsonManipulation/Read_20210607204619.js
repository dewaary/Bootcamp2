'use strict';
var jsonQuery = require('json-query')

const fs = require('fs');

var rawdata = fs.readFileSync('data.json');

jsonQuery('placement[name=Meeting Room].name', {
    rawdata: rawdata
    
  })


