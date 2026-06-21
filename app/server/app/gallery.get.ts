// @ts-nocheck
import { readdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(() => {
    const dir = join(process.cwd(), 'public/gallery')

    const files = readdirSync(dir)
        .filter(f => /^img\d+\.jpg$/.test(f))
        .map(f => `/gallery/${f}`)

    return files
})
