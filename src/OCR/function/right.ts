type ModelosCelular = () => string[]

const SamsungModels = ['Galaxy Note', 'Edge', 'Fold'];
const AppleModels = ['iPhone Pro', 'iPhone Pro Max'];

const ModelosCelular = (type: 'SAMSUNG' | 'APPLE') => {

    if(type === 'SAMSUNG'){
        return SamsungModels
    } else if(type === 'APPLE'){
        return AppleModels
    }
}

const ModelosSamsung: ModelosCelular = () => {
    return SamsungModels;
}

const ModelosApple: ModelosCelular = () => {
    return AppleModels;
}

// assim eu nao preciso alterar a funcao base e nem criar ifs e elses desnecessarios eu apenas
// utilizo um mesmo contrato em comum pra cada tipo de dado necessario

console.log(ModelosSamsung())

export {}