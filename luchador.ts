import { Personaje } from "./personaje";

export class Luchador extends Personaje {
  protected fuerza: number;

  constructor(nombre: string, puntosDeVida: number, fuerza: number) {
    super(nombre, puntosDeVida);
    this.fuerza = fuerza;
  }

  atacar(): void {
    console.log(`${this.nombre} ataca con un golpe fuerte.`);
  }

  entrenar(): void {
    this.fuerza += 5;
    console.log(`${this.nombre} aumentó su fuerza a ${this.fuerza}.`);
  }
}
