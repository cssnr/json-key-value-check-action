import * as core from '@actions/core'
import * as fs from 'fs'

// main
;(async () => {
    try {
        // Parse Inputs
        const file: string = core.getInput('file', { required: true })
        console.log('file:', file)
        const keys: string[] = core.getInput('keys', { required: true }).split('\n')
        console.log('keys:', keys)
        const values: string[] = core.getInput('values', { required: true }).split('\n')
        console.log('values:', values)
        const seperator: string = core.getInput('seperator', {
            required: true,
            trimWhitespace: false,
        })
        console.log('seperator:', seperator)

        // Validate Inputs
        if (keys.length !== values.length) {
            return core.setFailed('Keys and Values length are not equal.')
        }

        // Validate JSON
        const fileData: Buffer = fs.readFileSync(file)
        const data: object = JSON.parse(fileData.toString())
        for (let i: number = 0; i < keys.length; i++) {
            console.log(`--- ${i + 1}: ${keys[i]}: ${values[i]}`)
            const key: string[] = keys[i].split(seperator)
            console.log('key:', key)
            const value = key.reduce((x: any, y: any) => x?.[y] ?? null, data)
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
        console.log(e)
        if (e instanceof Error) core.setFailed(e.message)
        // const msg = e instanceof Error ? e.message : String(e)
        // core.info(msg)
        // core.setFailed(msg)
    }
})()
