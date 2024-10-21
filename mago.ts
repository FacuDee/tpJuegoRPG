import { Personaje } from "./personaje";

export class Mago extends Personaje {
  protected energia: number;

  constructor(nombre: string, puntosDeVida: number, energia: number) {
    super(nombre, puntosDeVida);
    this.energia = energia;
  }

  atacar(): void {
    if (this.energia > 0) {
      console.log(`${this.nombre} lanza un hechizo.`);
      this.energia -= 10;
    } else {
      console.log(`${this.nombre} no tiene suficiente energía.`);
    }
  }

  aprenderHechizo(nuevoHechizo: string): void {
    console.log(`${this.nombre} aprendió el hechizo: ${nuevoHechizo}.`);
  }
}
