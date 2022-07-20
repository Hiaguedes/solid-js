interface Animal {
    existsNowadays: boolean;
}

interface Mammal extends Animal {
    hasFur: boolean
}

interface Bird extends Animal {

}

interface Sounds {
    nameOfSound: string
}

const Dog = (): Mammal & Sounds => {
    return {
        hasFur: true,
        existsNowadays: true,
        nameOfSound: 'bark'
    }
}

const Canary = (): Bird & Sounds => {
    return {
        existsNowadays: true,
        nameOfSound: 'pew'
    }
}

const Toucan = () : Bird => {
    return {
        existsNowadays: true,
    }
}

// solucao tucano nao precisa implementar Sounds mas os outros implementam e ta tudo certo

console.log(Dog());
console.log(Canary());
console.log(Toucan());

export {}

