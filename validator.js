const parser = require('@asyncapi/parser')
const avroSchemaParser = require('@asyncapi/avro-schema-parser')
const fs = require('fs')
const path = require('path')

parser.registerSchemaParser(avroSchemaParser);

const validate = async (filePath) => {
  if (typeof filePath !== 'string')
    throw new Error('path is not string')

  const dir = process.env.GITHUB_WORKSPACE || __dirname
  const fullPath = path.resolve(dir, filePath)
  console.log(`schema file fullpath:${fullPath}`)
  const data = fs.readFileSync(fullPath, 'utf8')
  let parsedObj = {};
  try {
    await parsedObj = parser.parse(data, {path: filePath});
  } catch (err) {
    console.log("Found errors: ");
    console.log(JSON.stringify(parsedObj.diagnostics));
  }
  console.log('schema is valid')
}

module.exports = validate
