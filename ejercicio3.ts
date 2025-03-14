function filtrar<T extends number>(arreglo: T[]): T[] {
    let resultado: T[] = [];
    arreglo.forEach((item) => {
        if (item > 5) { 
            resultado.push(item);
        }
    });
    return resultado;
}
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filtrar(numeros1));  

