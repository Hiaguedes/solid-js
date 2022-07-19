const soma = (...args: number[]) => {
    return args.reduce((acc, current) => acc + current)
}

console.log(soma(1,2,3))

export default soma