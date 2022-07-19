const data = ['Uno', 'Dos', 'Tres'];

interface DataSource {
    dataSource: string[]
}

const Courses = ({dataSource}: DataSource) => {
    const setData = (field: string) => {
        dataSource.push(field);

        return data;
    }

    const getData = () => {
        return dataSource;
    }

    return {
        setData,
        getData,
    }
}

const { getData, setData } = Courses({dataSource: data});

setData('Flamengoooo')
setData('React')
console.log(getData());

// assim a funcao nao fica responsavel por chamar a camada de dados e sim por implementar o que tiver que implementar no contexto dado a ela

export {}