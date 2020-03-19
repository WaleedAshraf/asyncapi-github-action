const parser = require('asyncapi-parser');
const fs = require('fs');
const path = require('path');

const validate = async (filePath) => {
  if (typeof filePath !== 'string')
    throw new Error('path is not string')

  const dir = process.env.GITHUB_WORKSPACE || __dirname
  const fullPath = path.resolve(dir, filePath)
  console.log(`schema file full path:${fullPath}`)
  const data = fs.readFileSync(fullPath, 'utf8');
  await parser.parse(data)
  console.log('schema is valid')
}

module.exports = validate;
