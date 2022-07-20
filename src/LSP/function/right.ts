interface Shape {
    getArea: () => number;
}

interface Rectangle extends Shape {
    width: number;
    height: number;
}

interface Circle extends Shape {
    ratio: number;
    getStringArea: () => string;
}

const RectangleShape = (width: number, height: number): Rectangle => {
    const Rectangle: Rectangle = {
        width,
        height,
        getArea : () => {
            return width * height;
        }
    }

    return Rectangle;
}

const CircleShape = (ratio: number): Circle => {
    const Area = () => (Math.pow(ratio, 2));
    const Circle: Circle = {
        ratio,
        getArea: () => Area(),
        getStringArea: () => Area().toString(),
    }

    return Circle;
}

const { ratio, getArea: circleArea } = CircleShape(5);
const {getArea: rectangleArea, height, width} = RectangleShape(3,5);

// meio dificil desassociar o principio da substituicao de Liskov do paradigma de orientacao a objetos
// por que ela e intrisica ao lance de extender uma classe do filho e do pai mas deu hahaha

// pra assegurar a condicao do arquivo wrong eu tenho duas alternativas

// Circle nao e do tipo Shape entao reescrevo a interface pra nao ser Shape (o pato e de borracha)

// boto pro Circle uma funcao getStringArea e assumo que e Shape mesmo

console.log(`O circulo de raio ${ratio} tem area de ${circleArea()}`);
console.log(`O retangulo de largura ${width} e altura ${height} tem area de ${rectangleArea()}`)


export {}