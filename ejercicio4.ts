class Repositorio<T> {
    elementos: T[] = [];
    agregar(elemento: T): void {
      this.elementos.push(elemento);
    }
    buscarPorIndice(indice: number): T {
      return this.elementos[indice];
    }
    eliminar(indice: number): void {
      this.elementos.splice(indice, 1);
    }
  }
  const repo = new Repositorio<string|number>();
  repo.agregar(10);
  repo.agregar("pedro");
  repo.agregar("juan");

  console.log(repo.buscarPorIndice(1)); 
  repo.eliminar(0); 
  console.log(repo.buscarPorIndice(0)); 
  