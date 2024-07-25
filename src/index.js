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
        const seperator = core.getInput('seperator', {
            required: true,
            trimWhitespace: false,
        })
        console.log('seperator:', seperator)

        // Validate Inputs
        if (keys.length !== values.length) {
            return core.setFailed('Keys and Values length are not equal.')
        }

        // Validate JSON
        const fileData = fs.readFileSync(file)
        const data = JSON.parse(fileData.toString())
        for (let i = 0; i < keys.length; i++) {
            console.log(`--- ${i + 1}: ${keys[i]}: ${values[i]}`)
            const key = keys[i].split(seperator)
            console.log('key:', key)
            const value = key.reduce((x, y) => x?.[y] ?? null, data)
            console.log('value:', value)
            if (values[i] == value) {
                core.info(`\u001b[32m"${values[i]}" == "${value}"`)
            } else {
                core.info(`\u001b[31;1m"${values[i]}" != "${value}"`)
                return core.setFailed('One or more values were not equal.')
            }
        }

        core.info(`\u001b[32;1mFinished Success`)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
