const config = require('./task.config.js')
const exec = require('child_process').exec

let Store = {
    getAll() {
        return config
    },
    getItem(index) {
        let len = config.length
        index = index > len ? 　len : index
        index = index < 0 ? 0 : index
        return config[index]
    },
    setItem() {},
    removeItem() {},
    clear() {}
}
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