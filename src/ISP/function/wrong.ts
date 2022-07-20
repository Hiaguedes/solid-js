interface Animal {
    existsNowadays: boolean;
}

interface Mammal extends Animal {
    hasFur: boolean;
    nameOfSound: string;
}

interface Bird extends Animal {
    nameOfSound: string
}

const Dog = (): Mammal => {
    return {
        hasFur: true,
        existsNowadays: true,
        nameOfSound: 'bark'
    }
}

const Canary = (): Bird => {
    return {
        existsNowadays: true,
        nameOfSound: 'pew'
    }
}

const Toucan = () : Bird => {
    return {
        existsNowadays: true,
        nameOfSound: undefined,
    }
}

// Por que sei la que som faz o tucano ausuahsau e por isso eu nao deveria ser obrigado a implementar
// um valor que nao tenho certeza mas como Bird obriga entao coloco undefined

console.log(Dog());
console.log(Canary());
console.log(Toucan());

export {}
