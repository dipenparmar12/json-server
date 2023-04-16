/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

let jsf = require('json-schema-faker')
let schems = require('./mockDataSchema')
let fs = require('fs')

let json = JSON.stringify(jsf(schems))

fs.writeFile('./seeds/data.json', json, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Mock data generated.')
  }
})
