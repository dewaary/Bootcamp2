'use strict';
const JsonFind = require("json-find");

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);

data.rawdata.find(item => item.name == "Meeting Room")

