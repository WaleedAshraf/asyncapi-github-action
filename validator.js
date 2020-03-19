const parser = require('asyncapi-parser');
const fs = require('fs');
const path = require('path');

const validate = async (filePath) => {
  if (typeof filePath !== 'string')
    throw new Error('path is not string')

  const dir = process.env.GITHUB_WORKSPACE || __dirname
  const data = fs.readFileSync(path.resolve(dir, filePath), 'utf8');
  await parser.parse(data)
}

module.exports = validate;
