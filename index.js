const core = require('@actions/core')
const validate = require('./validator')

async function run() {
  const filepath = core.getInput('filepath')
  const errorResponse = core.getInput('errorResponse')
    
  try {
    console.log('filepath', filepath)

    core.debug((new Date()).toTimeString())
    await validate(filepath)
    core.debug((new Date()).toTimeString())
  }
  catch (error) {
    core.setFailed(error.message)
    if(errorResponse === true) {
      core.debug(JSON.stringify(error))
    }
  }
}

run()
