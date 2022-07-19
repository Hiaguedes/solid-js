const ModelosCelular = (type: 'SAMSUNG' | 'APPLE') => {
    const SamsungModels = ['Galaxy Note', 'Edge', 'Fold'];
    const AppleModels = ['iPhone Pro', 'iPhone Pro Max'];

    if(type === 'SAMSUNG'){
        return SamsungModels
    } else if(type === 'APPLE'){
        return AppleModels
    }
}

// que exemplo horrivel aushauhsauhs mas alem de amarrar os dados dos dois celulares dentro da funcao eu tenho
// um problema de escalabilidade pois a cada type de celular eu tenho que implementar um if novo

console.log(ModelosCelular('SAMSUNG'))

export {}