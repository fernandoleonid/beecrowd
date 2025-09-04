export function problem (lines) {
    const numero = Number(lines[0])

    for (let candidato = 1; candidato <= numero; candidato++){
        if (numero % candidato == 0) {
            console.log (candidato)
        }
    }
}