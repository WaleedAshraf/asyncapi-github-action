const validate = require('../validator')
const cp = require('child_process')
const path = require('path')

test('throws invalid path', async() => {
  await expect(validate(123)).rejects.toThrow('path is not string')
})

test('should not throw error on valid schema', async () => {
  await expect(validate('./test/mock-schema.yaml')).resolves.not.toThrow()
})

test('should throw error on invalid schema', async () => {
  await expect(validate('./test/mock-invalid-schema.yaml')).rejects.toThrow()
})

// shows how the runner will run a javascript action with env / stdout protocol
test('should read filepath from env', () => {
  const ip = path.join(__dirname, '../index.js')
  const env_variables = 'PATH=' + process.env.PATH
  const cmd = `${env_variables} node ${ip}`
  console.log(cp.execSync(cmd, {env: {INPUT_FILEPATH: './test/mock-schema.yaml'}}).toString())
})
