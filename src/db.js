// const aggregate = require('./aggregate.json')
// const timeseries = require('./timeseries.json')

// module.exports = () => ({
//   aggregate,
//   timeseries,
// })

const fs = require('fs')
const path = require('path')

// Get the current directory path
const currentDirectory = __dirname

// Read the contents of the current directory
const files = fs.readdirSync(currentDirectory)

console.log('db[18]:files', files)

// Create an empty object to store the exported values
const exportedValues = {}

// Loop through each file in the directory
files.forEach((file) => {
  // Extract the file extension
  const fileExtension = path.extname(file)

  // Check if the file has the .json extension
  if (fileExtension === '.json') {
    // Read the contents of the JSON file
    const fileContents = require(path.join(currentDirectory, file))

    // Extract the filename without the file extension
    const fileName = path.basename(file, fileExtension)

    // Add the file contents to the exported values with the filename as the key
    exportedValues[fileName] = fileContents
  }
})

// Export the values as a function
module.exports = () => exportedValues
