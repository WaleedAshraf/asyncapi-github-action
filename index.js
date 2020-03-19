const core = require('@actions/core');
const validate = require('./validator');

async function run() {
  try {
    const filepath = core.getInput('filepath');

    core.debug((new Date()).toTimeString())
    await validate(filepath)
    core.debug((new Date()).toTimeString())
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
