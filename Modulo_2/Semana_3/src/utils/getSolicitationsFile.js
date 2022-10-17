import fs from 'fs'

export function getSolicitationsFile() {
    const solicitationsInFile = fs.readFileSync('solicitations.json').toString()
    const solicitations = JSON.parse(solicitationsInFile)
    return solicitations
}