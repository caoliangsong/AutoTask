const config = require('./task.config.js')
const exec = require('child_process').exec

config.forEach((item, index) => {
    console.log(`Starting ${item.appName}...`)
    setTimeout(() => {
        exec(item.command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`)
                return
            }
            console.log(`Finished ${item.appName}`)
        })
    }, item.delay)
})