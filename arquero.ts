import { Personaje } from "./personaje";

export class Arquero extends Personaje {
  protected flechas: number;

  constructor(nombre: string, puntosDeVida: number, flechas: number) {
    super(nombre, puntosDeVida);
    this.flechas = flechas;
  }

  atacar(): void {
    if (this.flechas > 0) {
      this.flechas--;
      console.log(
        `${this.nombre} dispara una flecha (le quedan ${this.flechas}).`
      );
    } else {
      console.log(`${this.nombre} no tiene flechas.`);
    }
  }

  sumarFlechas(cantidad: number): void {
    this.flechas += cantidad;
    console.log(`${this.nombre} obtiene ${cantidad} flechas.`);
  }
}
