const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una cadena de texto: ", (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('')
    console.log(cadenaInvertida)
})