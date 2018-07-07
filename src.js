const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calc = (s,r) => {
    return (s*2)-r
}

rl.on('line', input => {
    const str = input.split(' ')
    const R1 = parseInt(str[0],10)
    const S1 = parseInt(str[1],10)
    console.log(calc(S1,R1))
    rl.close()
})