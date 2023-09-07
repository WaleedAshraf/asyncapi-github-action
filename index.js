const core = require('@actions/core')
const validate = require('./validator')

async function run() {
  const filepath = core.getInput('filepath')
  const errorResponse = core.getInput('errorResponse')
    
  try {
    console.log('filepath', filepath)
    console.log('errorResponse %s (%s)', errorResponse, typeof errorResponse)

    core.debug((new Date()).toTimeString())
    await validate(filepath)
    core.debug((new Date()).toTimeString())
  }
  catch (error) {
    if(errorResponse == "true") {
      console.log("Identified Errors: ")
      console.log(JSON.stringify(error))
    }
    core.setFailed(error.message)
  }
}

run()
