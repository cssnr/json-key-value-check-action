const core = require('@actions/core')
const fs = require('fs')

;(async () => {
    try {
        // Parse Inputs
        const file = core.getInput('file', { required: true })
        console.log('file:', file)
        const keys = core.getInput('keys', { required: true }).split('\n')
        console.log('keys:', keys)
        const values = core.getInput('values', { required: true }).split('\n')
        console.log('values:', values)

        // Validate Inputs
        if (keys.length !== values.length) {
            return core.setFailed('Keys and Values length are not equal.')
        }

        // Update JSON
        const fileData = fs.readFileSync(file)
        const data = JSON.parse(fileData.toString())
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const value = values[i]
            console.log(`--- ${i + 1}: ${key}: ${value}`)
            checkNestedValue(data, key, value)
        }

        core.info(`\u001b[32;1mDone`)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()

/**
 * @function checkNestedValue
 * @param {Object} obj
 * @param {String} path
 * @param {String} value
 */
function checkNestedValue(obj, path, value) {
    const keys = path.split('.')
    let current = obj
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]
        if (!(key in current)) {
            current[key] = {}
        }
        current = current[key]
    }
    if (current[keys[keys.length - 1]] !== value) {
        core.info(`\u001b[31;1m${path} !== ${value}`)
        throw new Error(`Failed validating key: ${path}`)
    }
}
