const data = ['Uno', 'Dos', 'Tres'];

const Courses = () => {
    const setData = (field: string) => {
        data.push(field);

        return data;
    }

    const getData = () => {
        return data;
    }

    return {
        setData,
        getData,
    }
}

const { getData, setData } = Courses();

setData('Flamengoooo')
setData('React')
console.log(getData());

export {}

// meio dificil pensar nessa, mas seguindo o exemplo da aula eu pensei 
// em desacoplar esse data pq nao seria responsabilidade dele a fonte de dados (assim como o connection do banco), o que casa
// com o principio da inversao de dependencia