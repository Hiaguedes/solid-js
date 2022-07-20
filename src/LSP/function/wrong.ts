interface Shape {
    getArea: () => any;
}

const RectangleShape = (width: number, height: number) => {
    const Rectangle: Shape = {
        getArea : () => {
            return width * height;
        }
    }

    return Rectangle;
}

const CircleShape = (ratio: number) => {
    const Circle: Shape = {
        getArea : () => {
            return Math.pow(ratio, 2).toString();
        },
    }

    return Circle;
}

// aqui forcei kkkkk eu forcei a saida do getArea ser any pra forcar uma condicao do circle que tinha que me retornar uma string

const { getArea: circleArea } = CircleShape(5);
const {getArea: rectangleArea} = RectangleShape(3,5);

console.log(`O circulo tem area de ${circleArea()}`);
console.log(`O retangulo tem area de ${rectangleArea()}`)


export {}