function reversa<T>(arreglo: T[]): T[] {
    let arregloInvertido: T[] = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }

    return arregloInvertido;
}
const numeros = [1, 2, 3, 4, 5];
console.log(reversa(numeros));  

